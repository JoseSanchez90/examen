"use client"
import { Card } from "@/components/ui/card"
import { motion, type Variants } from "framer-motion"
import { BookOpen, History, Pencil, Brain } from "lucide-react"

interface SubjectSelectionProps {
  name: string
  onSelectSubject: (subject: string) => void
}

export default function SubjectSelection({ name, onSelectSubject }: SubjectSelectionProps) {
  const subjects = [
    {
      id: "verbal",
      name: "Razonamiento Verbal",
      description: "Prueba tus habilidades con palabras y comprensión",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "social",
      name: "Personal Social",
      description: "Aprende sobre el medio ambiente y la sociedad",
      icon: <History className="h-8 w-8" />,
      color: "from-green-500 to-green-700",
    },
    {
      id: "grammar",
      name: "Gramática",
      description: "Aprende a escribir correctamente las palabras",
      icon: <Pencil className="h-8 w-8" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      id: "history",
      name: "Historia del Perú",
      description: "Conoce más sobre la historia de nuestro país",
      icon: <Brain className="h-8 w-8" />,
      color: "from-red-500 to-red-700",
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
    <div className="md:px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-700">¡Hola, {name}! 👋</h2>
        <p className="text-gray-600 mt-2">Elige la materia que quieres practicar hoy</p>
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
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 overflow-hidden"
              onClick={() => onSelectSubject(subject.id)}
            >
              <div className="flex items-center p-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${subject.color} text-white mr-4 flex-shrink-0`}
                >
                  {subject.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{subject.name}</h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
