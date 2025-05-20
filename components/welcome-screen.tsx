"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Sparkles, History, BookOpen } from "lucide-react"

interface WelcomeScreenProps {
  onStart: (name: string) => void
  onViewHistory: () => void
}

export default function WelcomeScreen({ onStart, onViewHistory }: WelcomeScreenProps) {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError("Por favor, ingresa tu nombre para continuar")
      return
    }
    onStart(name)
  }

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  } as const

  return (
    <div className="bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-pink-500/90 p-8 min-h-[80vh] flex items-center justify-center">
      <motion.div {...containerAnimation} className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">¡Bienvenido al Examen Escolar!</h1>
          <p className="text-blue-100 text-lg">Vamos a poner a prueba tus conocimientos de manera divertida</p>
        </div>

        <div className="backdrop-blur-sm bg-white/20 rounded-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg font-medium text-white">
                ¿Cómo te llamas?
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError("")
                }}
                placeholder="Escribe tu nombre aquí"
                className="bg-white/20 border-white/30 text-white placeholder:text-blue-100/70 h-12 text-lg"
              />
              {error && <p className="text-pink-200 text-sm">{error}</p>}
            </div>

            <div className="flex flex-col space-y-3">
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-white hover:bg-white/90 text-blue-700 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" /> Comenzar Nuevo Examen
              </Button>

              <Button
                type="button"
                onClick={onViewHistory}
                variant="outline"
                className="w-full h-12 text-lg border-white/50 text-white hover:bg-white/20"
              >
                <History className="mr-2 h-5 w-5" /> Ver Historial de Exámenes
              </Button>
            </div>
          </form>
        </div>

        <div className="text-center text-sm text-blue-100/80 mt-6">
          <p>Prepárate para demostrar lo que sabes en diferentes materias</p>
        </div>
      </motion.div>
    </div>
  )
}
