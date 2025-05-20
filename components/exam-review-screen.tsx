"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft, Home, Award, CheckCircle, XCircle } from "lucide-react"
import { getQuestions } from "@/lib/questions"
import type { Question } from "@/lib/types"

interface ExamReviewScreenProps {
  examId: string
  history: Array<{
    id: string
    date: string
    subject: string
    difficulty: string
    score: number
    answers: Record<number, string>
  }>
  onBack: () => void
  onReturnHome: () => void
}

export default function ExamReviewScreen({ examId, history, onBack, onReturnHome }: ExamReviewScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState<Question[]>([])

  // Find the exam in history
  const exam = history.find((item) => item.id === examId)

  useEffect(() => {
    if (exam) {
      // Load questions based on subject and difficulty
      const loadedQuestions = getQuestions(exam.subject, exam.difficulty)
      setQuestions(loadedQuestions)
    }
  }, [exam])

  if (!exam) {
    return (
      <div className="text-center py-8">
        <p>Examen no encontrado</p>
        <Button onClick={onBack} className="mt-4">
          Volver
        </Button>
      </div>
    )
  }

  const getSubjectName = (id: string): string => {
    const subjects: Record<string, string> = {
      verbal: "Razonamiento Verbal",
      social: "Personal Social",
      grammar: "Gramática",
      history: "Historia del Perú",
    }
    return subjects[id] || id
  }

  const getDifficultyName = (id: string): string => {
    const difficulties: Record<string, string> = {
      easy: "Facilito",
      medium: "Aventurero",
      hard: "Super Cerebrito",
    }
    return difficulties[id] || id
  }

  const isAnswerCorrect = (questionIndex: number): boolean => {
    const question = questions[questionIndex]
    const userAnswer = exam.answers[questionIndex]

    if (!question || !userAnswer) return false

    if (question.type === "multiple-choice") {
      return userAnswer === question.correctAnswer
    } else if (question.type === "text") {
      const keywords = (question.keywords || []).map((k) => k.toLowerCase())
      return keywords.some((keyword) => userAnswer.toLowerCase().includes(keyword))
    }

    return false
  }

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  } as const

  const currentQuestion = questions[currentQuestionIndex]
  const userAnswer = exam.answers[currentQuestionIndex] || ""

  return (
    <div className="p-6 md:p-8">
      <motion.div {...containerAnimation} className="py-6">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={onBack} className="flex items-center border-gray-300 text-gray-700">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Historial
          </Button>

          <div className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-yellow-500" />
            <span
              className={`font-bold ${
                exam.score >= 18 ? "text-green-600" : exam.score >= 13 ? "text-blue-600" : "text-orange-600"
              }`}
            >
              {exam.score}/20
            </span>
          </div>
        </div>

        <Card className="mb-6 border-0 bg-white/60 backdrop-blur-sm shadow-md">
          <CardHeader className="bg-white/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <CardTitle className="text-gray-800">{getSubjectName(exam.subject)}</CardTitle>
              <div className="text-sm text-gray-500">
                {exam.date} - Nivel: {getDifficultyName(exam.difficulty)}
              </div>
            </div>
          </CardHeader>
        </Card>

        {currentQuestion ? (
          <Card className="mb-6 border-0 bg-white/60 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Pregunta {currentQuestionIndex + 1} de {questions.length}
                </h3>
                {isAnswerCorrect(currentQuestionIndex) ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="mr-1 h-5 w-5" />
                    Correcta
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <XCircle className="mr-1 h-5 w-5" />
                    Incorrecta
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800">{currentQuestion.question}</p>
              </div>

              {currentQuestion.type === "multiple-choice" && (
                <div className="space-y-3 mb-6">
                  <p className="font-medium text-gray-700">Opciones:</p>
                  {currentQuestion.options?.map((option, index) => {
                    const optionLetter = String.fromCharCode(97 + index)
                    const isSelected = userAnswer === optionLetter
                    const isCorrect = currentQuestion.correctAnswer === optionLetter

                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${
                          isSelected && isCorrect
                            ? "bg-green-50 border-green-300"
                            : isSelected && !isCorrect
                              ? "bg-red-50 border-red-300"
                              : !isSelected && isCorrect
                                ? "bg-blue-50 border-blue-300"
                                : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 border font-medium ${
                              isSelected
                                ? isCorrect
                                  ? "bg-green-100 border-green-300 text-green-800"
                                  : "bg-red-100 border-red-300 text-red-800"
                                : isCorrect
                                  ? "bg-blue-100 border-blue-300 text-blue-800"
                                  : "bg-gray-100 border-gray-300 text-gray-800"
                            }`}
                          >
                            {optionLetter}
                          </div>
                          <div className="text-gray-800">{option}</div>
                          {isSelected && isCorrect && <CheckCircle className="ml-auto h-5 w-5 text-green-600" />}
                          {isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 text-red-600" />}
                          {!isSelected && isCorrect && <CheckCircle className="ml-auto h-5 w-5 text-blue-600" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {currentQuestion.type === "text" && (
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Tu respuesta:</p>
                    <div
                      className={`p-3 rounded-lg border ${
                        isAnswerCorrect(currentQuestionIndex)
                          ? "bg-green-50 border-green-300"
                          : "bg-red-50 border-red-300"
                      }`}
                    >
                      {userAnswer || <span className="text-gray-400">Sin respuesta</span>}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-700 mb-2">Palabras clave esperadas:</p>
                    <div className="p-3 rounded-lg border border-blue-300 bg-blue-50">
                      {currentQuestion.keywords?.join(", ") || "No hay palabras clave definidas"}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-8">Cargando pregunta...</div>
        )}

        <div className="flex justify-between mb-6">
          <Button
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="border-gray-300 text-gray-700"
          >
            Pregunta Anterior
          </Button>

          <Button
            onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            disabled={currentQuestionIndex === questions.length - 1}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Siguiente Pregunta
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {questions.map((_, index) => (
            <Button
              key={index}
              variant={index === currentQuestionIndex ? "default" : "outline"}
              className={`w-10 h-10 p-0 ${
                index === currentQuestionIndex
                  ? "bg-blue-600"
                  : isAnswerCorrect(index)
                    ? "border-green-500 text-green-600"
                    : "border-red-500 text-red-600"
              }`}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={onReturnHome} className="flex items-center bg-blue-600 hover:bg-blue-700">
            <Home className="mr-2 h-5 w-5" /> Volver al Inicio
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
