"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Home, Search, Calendar, BookOpen, Award, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface HistoryScreenProps {
  history: Array<{
    id: string
    date: string
    subject: string
    difficulty: string
    score: number
    answers: Record<number, string>
  }>
  onReturnHome: () => void
  onViewExamDetails: (examId: string) => void
}

export default function HistoryScreen({ history, onReturnHome, onViewExamDetails }: HistoryScreenProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSubject, setFilterSubject] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")

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

  // Filter and sort exams
  const filteredHistory = history
    .filter((item) => {
      const matchesSearch =
        getSubjectName(item.subject).toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getDifficultyName(item.difficulty).toLowerCase().includes(searchTerm.toLowerCase())

      const matchesSubject = filterSubject === "all" ? true : item.subject === filterSubject

      return matchesSearch && matchesSubject
    })
    .sort((a, b) => {
      if (sortBy === "date-desc") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "date-asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortBy === "score-desc") {
        return b.score - a.score
      } else if (sortBy === "score-asc") {
        return a.score - b.score
      }
      return 0
    })

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  } as const

  // Get unique subjects for filter
  const subjects = Array.from(new Set(history.map((item) => item.subject)))

  return (
    <div className="p-6 md:p-8">
      <motion.div {...containerAnimation} className="py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Historial de Exámenes</h2>
          <p className="text-gray-600 mt-2">Revisa todos los exámenes que has realizado</p>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-8 bg-white/40 backdrop-blur-sm rounded-lg border border-gray-200/50 mb-6">
            <p className="text-gray-600 font-medium">Aún no tienes historial de exámenes</p>
            <p className="text-gray-500 mt-2">Completa un examen para ver tu historial aquí</p>
          </div>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar exámenes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <Select value={filterSubject} onValueChange={setFilterSubject}>
                  <SelectTrigger className="w-full md:w-[200px] border-gray-200">
                    <SelectValue placeholder="Filtrar por materia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las materias</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {getSubjectName(subject)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[200px] border-gray-200">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Más recientes primero</SelectItem>
                    <SelectItem value="date-asc">Más antiguos primero</SelectItem>
                    <SelectItem value="score-desc">Mayor puntaje primero</SelectItem>
                    <SelectItem value="score-asc">Menor puntaje primero</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredHistory.length > 0 ? (
              <div className="space-y-4 mb-6">
                {filteredHistory.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-md transition-shadow border-0 bg-white/60 backdrop-blur-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center text-blue-700 font-medium mb-1">
                            <BookOpen className="mr-2 h-4 w-4" />
                            {getSubjectName(item.subject)}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <Calendar className="mr-2 h-4 w-4" />
                            {item.date}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            Nivel: {getDifficultyName(item.difficulty)}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex items-center mr-4">
                            <Award className="mr-2 h-5 w-5 text-yellow-500" />
                            <span
                              className={`font-bold ${
                                item.score >= 18
                                  ? "text-green-600"
                                  : item.score >= 13
                                    ? "text-blue-600"
                                    : "text-orange-600"
                              }`}
                            >
                              {item.score}/20
                            </span>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onViewExamDetails(item.id)}
                            className="flex items-center border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            <Eye className="mr-1 h-4 w-4" />
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white/40 backdrop-blur-sm rounded-lg border border-gray-200/50 mb-6">
                <p className="text-gray-500">No se encontraron exámenes con los filtros seleccionados</p>
              </div>
            )}
          </>
        )}

        <div className="flex justify-center">
          <Button onClick={onReturnHome} className="flex items-center bg-blue-600 hover:bg-blue-700">
            <Home className="mr-2 h-5 w-5" /> Volver al Inicio
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
