"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Clock, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import { getQuestions } from "@/lib/questions"
import type { Question } from "@/lib/types"

interface ExamScreenProps {
  name: string
  subject: string
  difficulty: string
  onFinish: (score: number, answers: Record<number, string>) => void
}

export default function ExamScreen({ name, subject, difficulty, onFinish }: ExamScreenProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState<number>(1200) // 20 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(new Set([0]))

  // Inside the ExamScreen component, add proper typing for animations
  const questionAnimation: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  useEffect(() => {
    // Load questions based on subject and difficulty
    const loadedQuestions = getQuestions(subject, difficulty)
    setQuestions(loadedQuestions)
  }, [subject, difficulty])

  useEffect(() => {
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleFinishExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAnswerChange = (value: string): void => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: value,
    })
  }

  const handleNextQuestion = (): void => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextIndex)
      setVisitedQuestions((prev) => {
        const updated = new Set(prev)
        updated.add(nextIndex)
        return updated
      })
    }
  }

  const handlePrevQuestion = (): void => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleFinishExam = useCallback((): void => {
    if (isSubmitting) return
    setIsSubmitting(true)

    // Calculate score
    let score = 0
    questions.forEach((question, index) => {
      if (question.type === "multiple-choice") {
        if (answers[index] === question.correctAnswer) {
          score++
        }
      } else if (question.type === "text") {
        // For text questions, check if answer contains keywords
        const userAnswer = (answers[index] || "").toLowerCase()
        const keywords = (question.keywords || []).map((k) => k.toLowerCase())
        if (keywords.some((keyword) => userAnswer.includes(keyword))) {
          score++
        }
      }
    })

    onFinish(score, answers)
  }, [questions, answers, isSubmitting, onFinish])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  if (!currentQuestion) {
    return <div className="text-center py-8">Cargando preguntas...</div>
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </h2>
        </div>
        <div className="flex items-center text-orange-600 font-medium">
          <Clock className="mr-1 h-5 w-5" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <Progress value={progress} className="h-2 mb-6 bg-gray-200" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={questionAnimation}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-6 border-0 bg-white/60 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-gray-800">{currentQuestion.question}</h3>

              {currentQuestion.type === "multiple-choice" && (
                <RadioGroup
                  value={answers[currentQuestionIndex] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {currentQuestion.options?.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                    >
                      <RadioGroupItem
                        value={String.fromCharCode(97 + index)}
                        id={`option-${currentQuestionIndex}-${index}`}
                      />
                      <Label htmlFor={`option-${currentQuestionIndex}-${index}`} className="flex-grow cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === "text" && (
                <div className="space-y-2">
                  <Input
                    value={answers[currentQuestionIndex] || ""}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    placeholder="Escribe tu respuesta aquí..."
                    className="w-full p-3 border-gray-200"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <Button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          variant="outline"
          className="flex items-center border-gray-300 text-gray-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Anterior
        </Button>

        {currentQuestionIndex < questions.length - 1 ? (
          <Button onClick={handleNextQuestion} className="flex items-center bg-blue-600 hover:bg-blue-700">
            Siguiente <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleFinishExam}
            className="flex items-center bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            Terminar Examen <CheckCircle className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex justify-center mt-8 overflow-hidden">
        <div className="flex items-center max-w-full px-2">
          {questions.length > 10 ? (
            // Versión con elipsis para muchas preguntas
            <>
              {/* Primeros 5 números */}
              {questions.slice(0, 5).map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentQuestionIndex ? "default" : answers[index] ? "outline" : "ghost"}
                  className={`w-10 h-10 p-0 mx-1 ${
                    index === currentQuestionIndex
                      ? "bg-blue-600"
                      : answers[index]
                        ? "border-2 border-green-500 text-green-600"
                        : "border border-gray-300"
                  } ${!visitedQuestions.has(index) && index !== currentQuestionIndex + 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => {
                    if (visitedQuestions.has(index) || index === currentQuestionIndex + 1) {
                      setCurrentQuestionIndex(index)
                      if (index === currentQuestionIndex + 1) {
                        setVisitedQuestions((prev) => {
                          const updated = new Set(prev)
                          updated.add(index)
                          return updated
                        })
                      }
                    }
                  }}
                  disabled={!visitedQuestions.has(index) && index !== currentQuestionIndex + 1}
                >
                  {index + 1}
                </Button>
              ))}

              {/* Elipsis */}
              <span className="mx-2 text-gray-500">...</span>

              {/* Últimos 2 números */}
              {questions.slice(questions.length - 2).map((_, i) => {
                const index = questions.length - 2 + i
                return (
                  <Button
                    key={index}
                    variant={index === currentQuestionIndex ? "default" : answers[index] ? "outline" : "ghost"}
                    className={`w-10 h-10 p-0 mx-1 ${
                      index === currentQuestionIndex
                        ? "bg-blue-600"
                        : answers[index]
                          ? "border-2 border-green-500 text-green-600"
                          : "border border-gray-300"
                    } ${!visitedQuestions.has(index) && index !== currentQuestionIndex + 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                      if (visitedQuestions.has(index) || index === currentQuestionIndex + 1) {
                        setCurrentQuestionIndex(index)
                        if (index === currentQuestionIndex + 1) {
                          setVisitedQuestions((prev) => {
                            const updated = new Set(prev)
                            updated.add(index)
                            return updated
                          })
                        }
                      }
                    }}
                    disabled={!visitedQuestions.has(index) && index !== currentQuestionIndex + 1}
                  >
                    {index + 1}
                  </Button>
                )
              })}
            </>
          ) : (
            // Versión normal para pocas preguntas
            questions.map((_, index) => (
              <Button
                key={index}
                variant={index === currentQuestionIndex ? "default" : answers[index] ? "outline" : "ghost"}
                className={`w-10 h-10 p-0 mx-1 ${
                  index === currentQuestionIndex
                    ? "bg-blue-600"
                    : answers[index]
                      ? "border-2 border-green-500 text-green-600"
                      : "border border-gray-300"
                } ${!visitedQuestions.has(index) && index !== currentQuestionIndex + 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => {
                  if (visitedQuestions.has(index) || index === currentQuestionIndex + 1) {
                    setCurrentQuestionIndex(index)
                    if (index === currentQuestionIndex + 1) {
                      setVisitedQuestions((prev) => {
                        const updated = new Set(prev)
                        updated.add(index)
                        return updated
                      })
                    }
                  }
                }}
                disabled={!visitedQuestions.has(index) && index !== currentQuestionIndex + 1}
              >
                {index + 1}
              </Button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
