"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, type Variants } from "framer-motion"
import { Home } from "lucide-react"
import confetti from "canvas-confetti"
import type { Options as ConfettiOptions } from "canvas-confetti"

interface ResultsScreenProps {
  name: string
  subject: string
  difficulty: string
  score: number
  history: Array<{ date: string; subject: string; score: number }>
  onReturnHome: () => void
}

interface MotivationalMessage {
  title: string
  message: string
  icon: string
}

export default function ResultsScreen({ name, subject, difficulty, score, history, onReturnHome }: ResultsScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (score >= 18) {
      setShowConfetti(true)
      const duration = 3 * 1000
      const end = Date.now() + duration

      const confettiOptions: ConfettiOptions = {
        particleCount: 2,
        spread: 55,
      }

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
          return
        }

        // Left side
        confetti({
          ...confettiOptions,
          angle: 60,
          origin: { x: 0, y: 0.5 },
        })

        // Right side
        confetti({
          ...confettiOptions,
          angle: 120,
          origin: { x: 1, y: 0.5 },
        })
      }, 150)

      return () => clearInterval(interval)
    }
  }, [score])

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

  const getMotivationalMessage = (): MotivationalMessage => {
    if (score <= 12) {
      return {
        title: "¡Sigue intentándolo!",
        message:
          "Puedes hacerlo mejor, sigue estudiando y no te rindas. Cada intento te hace más fuerte e inteligente.",
        icon: "💪",
      }
    } else if (score <= 17) {
      return {
        title: "¡Muy buen trabajo!",
        message: "Lo estás haciendo excelente. Sigue así y pronto dominarás todos los temas.",
        icon: "🌟",
      }
    } else {
      return {
        title: "¡Increíble!",
        message: "¡Eres muy inteligente! Con tu dedicación y talento llegarás muy lejos. ¡El futuro es tuyo!",
        icon: "🏆",
      }
    }
  }

  const message = getMotivationalMessage()
  const subjectHistory = history.filter((h) => h.subject === subject)
  const averageScore =
    subjectHistory.length > 0 ? subjectHistory.reduce((sum, h) => sum + h.score, 0) / subjectHistory.length : 0

  const containerAnimation: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerAnimation}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-700">¡Examen completado, {name}!</h2>
        <p className="text-gray-600 mt-2">
          {getSubjectName(subject)} - Nivel: {getDifficultyName(difficulty)}
        </p>
      </div>

      <Card className="mb-8 overflow-hidden bg-blue-950/20">
        <div className="text-center">
          <div className="text-6xl font-bold mb-2">{score}/20</div>
          <div className="text-xl">Tu puntaje</div>
        </div>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{message.icon}</div>
            <h3 className="text-xl font-bold text-blue-700">{message.title}</h3>
            <p className="text-gray-600 mt-2">{message.message}</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="progress" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="progress">Tu Progreso</TabsTrigger>
          <TabsTrigger value="history">Historial</TabsTrigger>
        </TabsList>
        <TabsContent value="progress" className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Puntaje promedio:</span>
              <span className="font-bold text-blue-700">{averageScore.toFixed(1)}/20</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Exámenes completados:</span>
              <span className="font-bold text-blue-700">{subjectHistory.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Mejor puntaje:</span>
              <span className="font-bold text-blue-700">
                {subjectHistory.length > 0 ? Math.max(...subjectHistory.map((h) => h.score)) : 0}
                /20
              </span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history" className="p-4">
          {history.length > 0 ? (
            <div className="space-y-2">
              {history
                .slice()
                .reverse()
                .slice(0, 5)
                .map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border-b">
                    <div>
                      <div className="font-medium">{getSubjectName(item.subject)}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    <div className="font-bold text-blue-700">{item.score}/20</div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">No hay historial disponible</div>
          )}
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button onClick={onReturnHome} className="flex items-center bg-green-600 hover:bg-green-700 cursor-pointer">
          <Home className="mr-2 h-5 w-5" /> Volver al Inicio
        </Button>
      </div>
    </motion.div>
  )
}