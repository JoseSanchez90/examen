import type { JSX } from "react"

export interface Question {
  question: string
  type: "multiple-choice" | "text"
  options?: string[]
  correctAnswer?: string
  keywords?: string[]
}

export interface Subject {
  id: string
  name: string
  description: string
  icon: JSX.Element
  color: string
}

export interface Difficulty {
  id: string
  name: string
  description: string
  icon: JSX.Element
  color: string
}

export interface ExamHistoryItem {
  date: string
  subject: string
  score: number
}