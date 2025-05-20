"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import WelcomeScreen from "@/components/welcome-screen"
import SubjectSelection from "@/components/subject-selection"
import DifficultySelection from "@/components/difficulty-selection"
import ExamScreen from "@/components/exam-screen"
import ResultsScreen from "@/components/results-screen"
import LoginScreen from "@/components/login-screen"
import HistoryScreen from "@/components/history-screen"
import ExamReviewScreen from "@/components/exam-review-screen"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { useAuth } from "@/contexts/auth-context"
import { LogOut } from "lucide-react"

type Screen = "login" | "welcome" | "subject" | "difficulty" | "exam" | "results" | "history" | "review"
type ExamHistory = Array<{
  id: string
  date: string
  subject: string
  difficulty: string
  score: number
  answers: Record<number, string>
}>

export default function Home() {
  const [screen, setScreen] = useState<Screen>("login")
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [difficulty, setDifficulty] = useState<string>("")
  const [score, setScore] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedExamId, setSelectedExamId] = useState<string>("")
  const { user, login, logout, isLoading } = useAuth()
  const [history, setHistory] = useLocalStorage<ExamHistory>(`exam-history-${user?.username || "guest"}`, [])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user && screen !== "login") {
      setScreen("login")
    }
  }, [user, screen, isLoading])

  // Modificar el useEffect para redirigir directamente a la selección de materias después del login
  useEffect(() => {
    if (user && screen === "login") {
      setName("Piero Nicolas")
      setScreen("subject")
    }
  }, [user, screen])

  const handleLogin = (username: string, password: string): boolean => {
    return login(username, password)
  }

  const handleLogout = () => {
    logout()
    setScreen("login")
  }

  // Eliminar la función handleStartExam ya que no la usaremos
  // Reemplazar con una función para obtener la información del perfil
  const getUserProfile = () => {
    return {
      name: "Piero Nicolas",
      age: 9,
      birthdate: "2/01/2016",
      grade: "4to grado de primaria",
    }
  }

  const handleSelectSubject = (selectedSubject: string): void => {
    setSubject(selectedSubject)
    setScreen("difficulty")
  }

  const handleSelectDifficulty = (selectedDifficulty: string): void => {
    setDifficulty(selectedDifficulty)
    setScreen("exam")
  }

  const handleFinishExam = (finalScore: number, examAnswers: Record<number, string>): void => {
    setScore(finalScore)
    setAnswers(examAnswers)

    // Save to history
    const examId = `exam-${Date.now()}`
    const newHistory: ExamHistory = [
      ...history,
      {
        id: examId,
        date: new Date().toLocaleDateString(),
        subject,
        difficulty,
        score: finalScore,
        answers: examAnswers,
      },
    ]
    setHistory(newHistory)

    setScreen("results")
  }

  const handleViewHistory = (): void => {
    setScreen("history")
  }

  const handleViewExamDetails = (examId: string): void => {
    setSelectedExamId(examId)
    setScreen("review")
  }

  const handleReturnHome = (): void => {
    setScreen("subject") // Cambiado de "welcome" a "subject" para ir directamente a la selección de materias
    setSubject("")
    setDifficulty("")
    setScore(0)
    setAnswers({})
  }

  const handleBackToHistory = (): void => {
    setScreen("history")
  }

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8 flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8 flex items-center justify-center">
      <div className="container max-w-4xl">
        <Card className="backdrop-blur-sm bg-white/80 shadow-xl overflow-hidden">
          {user && (
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm bg-black hover:bg-black/80 text-white backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>Cerrar sesion</span>
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="relative">
            {screen !== "login" && (
              <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            )}

            <CardContent className="p-0">
              {screen === "login" && <LoginScreen onLogin={handleLogin} />}

              {screen === "welcome" && (
                <WelcomeScreen onStart={() => setScreen("subject")} onViewHistory={handleViewHistory} />
              )}

              {screen === "subject" && (
                <SubjectSelection
                  name={name}
                  onSelectSubject={handleSelectSubject}
                  onViewHistory={handleViewHistory}
                  history={history}
                />
              )}

              {screen === "difficulty" && (
                <DifficultySelection name={name} subject={subject} onSelectDifficulty={handleSelectDifficulty} />
              )}

              {screen === "exam" && (
                <ExamScreen name={name} subject={subject} difficulty={difficulty} onFinish={handleFinishExam} />
              )}

              {screen === "results" && (
                <ResultsScreen
                  name={name}
                  subject={subject}
                  difficulty={difficulty}
                  score={score}
                  history={history}
                  onReturnHome={handleReturnHome}
                  onViewHistory={handleViewHistory}
                />
              )}

              {screen === "history" && (
                <HistoryScreen
                  history={history}
                  onReturnHome={handleReturnHome}
                  onViewExamDetails={handleViewExamDetails}
                />
              )}

              {screen === "review" && (
                <ExamReviewScreen
                  examId={selectedExamId}
                  history={history}
                  onBack={handleBackToHistory}
                  onReturnHome={handleReturnHome}
                />
              )}
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  )
}
