"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface WelcomeScreenProps {
  onStart: (name: string) => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
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
    <motion.div {...containerAnimation} className="flex flex-col items-center justify-center md:space-y-6 md:py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">¡Bienvenido al Examen Escolar!</h1>
        <p className="text-gray-600 text-lg">Vamos a poner a prueba tus conocimientos de manera divertida</p>
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md border-2 border-blue-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
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
              className="border-2 border-blue-300 focus:border-blue-500 h-12 text-lg"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="mr-2 h-5 w-5" /> Comenzar
          </Button>
        </form>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Prepárate para demostrar lo que sabes en diferentes materias</p>
      </div>
    </motion.div>
  )
}
