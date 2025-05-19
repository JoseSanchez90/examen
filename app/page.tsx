"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WelcomeScreen from "@/components/welcome-screen"
import SubjectSelection from "@/components/subject-selection"
import DifficultySelection from "@/components/difficulty-selection"
import ExamScreen from "@/components/exam-screen"
import ResultsScreen from "@/components/results-screen"
import { useLocalStorage } from "@/hooks/use-local-storage"

type Screen = "welcome" | "subject" | "difficulty" | "exam" | "results"
type ExamHistory = Array<{ date: string; subject: string; score: number }>

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome")
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [difficulty, setDifficulty] = useState<string>("")
  const [score, setScore] = useState<number>(0)
  const [history, setHistory] = useLocalStorage<ExamHistory>("exam-history", [])

  const handleStartExam = (selectedName: string): void => {
    setName(selectedName)
    setScreen("subject")
  }

  const handleSelectSubject = (selectedSubject: string): void => {
    setSubject(selectedSubject)
    setScreen("difficulty")
  }

  const handleSelectDifficulty = (selectedDifficulty: string): void => {
    setDifficulty(selectedDifficulty)
    setScreen("exam")
  }

  const handleFinishExam = (finalScore: number): void => {
    setScore(finalScore)

    // Save to history
    const newHistory: ExamHistory = [
      ...history,
      {
        date: new Date().toLocaleDateString(),
        subject,
        score: finalScore,
      },
    ]
    setHistory(newHistory)

    setScreen("results")
  }

  const handleReturnHome = (): void => {
    setScreen("welcome")
    setSubject("")
    setDifficulty("")
    setScore(0)
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto max-w-3xl px-2 py-6 md:py-0">
        <Card className="shadow-xl shadow-black/30">
          <CardHeader>
            <CardTitle className="text-center text-2xl md:text-3xl font-bold">¡Examen Escolar Interactivo!</CardTitle>
          </CardHeader>
          <CardContent className="md:p-6">
            {screen === "welcome" && <WelcomeScreen onStart={handleStartExam} />}

            {screen === "subject" && <SubjectSelection name={name} onSelectSubject={handleSelectSubject} />}

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
              />
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
