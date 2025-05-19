"use client"
import { Card } from "@/components/ui/card"
import { motion, type Variants } from "framer-motion"
import { Baby, User, Brain } from "lucide-react"

interface DifficultySelectionProps {
  name: string
  subject: string
  onSelectDifficulty: (difficulty: string) => void
}

export default function DifficultySelection({ name, subject, onSelectDifficulty }: DifficultySelectionProps) {
  const getSubjectName = (id: string) => {
    const subjects: Record<string, string> = {
      verbal: "Razonamiento Verbal",
      social: "Personal Social",
      grammar: "Gramática",
      history: "Historia del Perú",
    }
    return subjects[id] || id
  }

  const difficulties = [
    {
      id: "easy",
      name: "Facilito",
      description: "Para comenzar a aprender",
      icon: <Baby className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
    },
    {
      id: "medium",
      name: "Aventurero",
      description: "Para poner a prueba lo que sabes",
      icon: <User className="h-8 w-8" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: "hard",
      name: "Super Cerebrito",
      description: "Para los más inteligentes",
      icon: <Brain className="h-8 w-8" />,
      color: "from-red-400 to-red-600",
    },
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-700">¡Excelente elección, {name}! 😎</h2>
        <p className="text-gray-600 mt-2">
          Has elegido: <span className="font-semibold">{getSubjectName(subject)}</span>
        </p>
        <p className="text-gray-600">Ahora, ¿qué nivel de dificultad prefieres?</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto"
      >
        {difficulties.map((difficulty) => (
          <motion.div key={difficulty.id} variants={item}>
            <Card
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-blue-300"
              onClick={() => onSelectDifficulty(difficulty.id)}
            >
              <div className="flex items-center p-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${difficulty.color} text-white mr-4 flex-shrink-0`}
                >
                  {difficulty.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{difficulty.name}</h3>
                  <p className="text-gray-600 text-sm">{difficulty.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}