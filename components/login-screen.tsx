"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Lock, User, BookOpen } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LoginScreenProps {
  onLogin: (username: string, password: string) => boolean
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!username.trim()) {
      setError("Por favor, ingresa un nombre de usuario")
      return
    }

    if (!password.trim()) {
      setError("Por favor, ingresa una contraseña")
      return
    }

    const success = onLogin(username, password)

    if (!success) {
      setError("Nombre de usuario o contraseña incorrectos")
    }
  }

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  } as const

  return (
    <div className="bg-gradient-to-br from-blue-600/90 to-purple-700/90 py-4 min-h-[80vh] flex items-center justify-center">
      <motion.div {...containerAnimation} className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Examenes para mejorar el rendimiento Escolar</h1>
          <p className="text-blue-100 text-lg">Inicia sesión para acceder a tus exámenes</p>
        </div>

        <div className="backdrop-blur-sm bg-white/20 rounded-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <Alert
                variant="destructive"
                className="bg-red-500/20 backdrop-blur-sm text-white border border-red-300/30"
              >
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="username" className="text-lg font-medium text-white flex items-center">
                <User className="mr-2 h-5 w-5" /> Nombre de Usuario
              </label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError("")
                  }}
                  placeholder="Ingresa tu nombre de usuario"
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100/70 h-12 text-lg pl-4"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-lg font-medium text-white flex items-center">
                <Lock className="mr-2 h-5 w-5" /> Contraseña
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError("")
                  }}
                  placeholder="Ingresa tu contraseña"
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100/70 h-12 text-lg pl-4"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-white hover:bg-white/90 text-blue-700 transition-all duration-300"
            >
              Iniciar Sesión
            </Button>
          </form>
        </div>

        <div className="text-center text-sm text-blue-100/80 mt-6">
          <p>Ingresa con tus credenciales para ver tu historial de exámenes</p>
        </div>
      </motion.div>
    </div>
  )
}
