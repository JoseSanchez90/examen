"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"
import { BookOpen, History, Pencil, Brain, ClipboardList } from "lucide-react"

interface SubjectSelectionProps {
  name: string
  onSelectSubject: (subject: string) => void
  onViewHistory: () => void
  history: Array<{
    id: string
    date: string
    subject: string
    difficulty: string
    score: number
    answers: Record<number, string>
  }>
}

export default function SubjectSelection({ name, onSelectSubject, onViewHistory, history }: SubjectSelectionProps) {
  const subjects = [
    {
      id: "verbal",
      name: "Razonamiento Verbal",
      description: "Prueba tus habilidades con palabras y comprensión",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "social",
      name: "Personal Social",
      description: "Aprende sobre el medio ambiente y la sociedad",
      icon: <History className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
    },
    {
      id: "grammar",
      name: "Gramática",
      description: "Aprende a escribir correctamente las palabras",
      icon: <Pencil className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: "history",
      name: "Historia del Perú",
      description: "Conoce más sobre la historia de nuestro país",
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
    <div className="p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">¡Hola, {name.split(" ")[0]}! 👋</h2>
        <div className="mt-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg inline-block">
          <p className="text-gray-700">
            <span className="font-semibold">Edad:</span> 9 años
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Fecha de nacimiento:</span> 2/01/2016
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Grado:</span> 4to grado de primaria
          </p>
        </div>
        <p className="text-gray-600 mt-4">Elige la materia que quieres practicar hoy</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {subjects.map((subject) => (
          <motion.div key={subject.id} variants={item}>
            <Card
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm overflow-hidden group"
              onClick={() => onSelectSubject(subject.id)}
            >
              <div className="flex items-center p-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${subject.color} text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {subject.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{subject.name}</h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <Button
          onClick={onViewHistory}
          variant="outline"
          className="flex items-center gap-2 mx-auto border-blue-300 text-blue-700 hover:bg-blue-50"
        >
          <ClipboardList className="h-5 w-5" />
          {history.length > 0 ? "Ver historial de exámenes" : "No hay historial de exámenes"}
        </Button>
      </div>
    </div>
  )
}
