"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Definir la interfaz para el usuario
interface User {
  username: string
}

// Definir la interfaz para el contexto de autenticación
interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
  isLoading: boolean
}

// Crear el contexto con un valor inicial
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personalizado para usar el contexto de autenticación
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}

// Props para el AuthProvider
interface AuthProviderProps {
  children: ReactNode
}

// Componente proveedor que envuelve la aplicación
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Verificar si el usuario ya está autenticado al cargar
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("auth-user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error("Error al cargar el usuario:", error)
      localStorage.removeItem("auth-user")
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Función para iniciar sesión
  const login = (username: string, password: string): boolean => {
    const validUsername = process.env.NEXT_PUBLIC_USERNAME || "admin"
    const validPassword = process.env.NEXT_PUBLIC_PASSWORD || "password123"

    if (username === validUsername && password === validPassword) {
      const newUser = { username }
      setUser(newUser)
      localStorage.setItem("auth-user", JSON.stringify(newUser))
      return true
    }
    return false
  }

  // Función para cerrar sesión
  const logout = (): void => {
    setUser(null)
    localStorage.removeItem("auth-user")
  }

  // Valor del contexto
  const value = {
    user,
    login,
    logout,
    isLoading,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
