"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, ArrowLeft, ArrowRight, Volume2 } from "lucide-react"

// Flashcard data
const flashcards = [
  {
    id: 1,
    word: "Hello",
    image: "/placeholder.svg?height=200&width=200",
    audio: "/hello.mp3", // This would be a real audio file in production
  },
  {
    id: 2,
    word: "Thank you",
    image: "/placeholder.svg?height=200&width=200",
    audio: "/thankyou.mp3",
  },
  {
    id: 3,
    word: "Please",
    image: "/placeholder.svg?height=200&width=200",
    audio: "/please.mp3",
  },
  {
    id: 4,
    word: "Help",
    image: "/placeholder.svg?height=200&width=200",
    audio: "/help.mp3",
  },
  {
    id: 5,
    word: "More",
    image: "/placeholder.svg?height=200&width=200",
    audio: "/more.mp3",
  },
]

export default function CommunicationSkillsModule() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Update progress when card changes
  useEffect(() => {
    setProgress(((currentCard + 1) / flashcards.length) * 100)
  }, [currentCard])

  // Function to play audio
  const playAudio = () => {
    // In a real implementation, this would play the actual audio file
    console.log(`Playing audio for: ${flashcards[currentCard].word}`)
    // Example of how you would play audio in production:
    // const audio = new Audio(flashcards[currentCard].audio)
    // audio.play()
  }

  // Function to handle card flip
  const flipCard = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsFlipped(!isFlipped)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }
  }

  // Function to go to next card
  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setIsFlipped(false)
      setTimeout(() => {
        setCurrentCard(currentCard + 1)
      }, 300)
    } else {
      // Complete level
      alert("Level completed! Moving to next level.")
      setCurrentLevel(currentLevel + 1)
      setCurrentCard(0)
    }
  }

  // Function to go to previous card
  const prevCard = () => {
    if (currentCard > 0) {
      setIsFlipped(false)
      setTimeout(() => {
        setCurrentCard(currentCard - 1)
      }, 300)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/autism" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6" />
            <span>NeuroDev Therapy</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Level: <span className="font-bold">{currentLevel}</span>
            </div>
            <Link href="/autism">
              <Button variant="outline" size="sm">
                Exit Module
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter mb-2">Communication Skills Module</h1>
            <p className="text-gray-500">Learn common words and phrases with our interactive flashcards.</p>
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>
                  Card {currentCard + 1} of {flashcards.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card
              className={`w-full max-w-md h-80 cursor-pointer transition-transform duration-300 ${
                isAnimating ? "scale-95" : "scale-100"
              } ${isFlipped ? "bg-purple-50" : "bg-white"}`}
              onClick={flipCard}
            >
              <CardContent className="p-6 h-full flex flex-col items-center justify-center">
                {!isFlipped ? (
                  // Front of card - Image
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={flashcards[currentCard].image || "/placeholder.svg"}
                      width={200}
                      height={200}
                      alt={flashcards[currentCard].word}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-gray-500 text-sm">Tap card to flip</p>
                  </div>
                ) : (
                  // Back of card - Word and audio
                  <div className="flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-bold text-center">{flashcards[currentCard].word}</h2>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        playAudio()
                      }}
                    >
                      <Volume2 className="h-6 w-6" />
                      <span className="sr-only">Play sound</span>
                    </Button>
                    <p className="text-gray-500 text-sm">Tap card to flip back</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCard}
              disabled={currentCard === 0}
              className="h-10 w-10 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous card</span>
            </Button>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700" onClick={nextCard}>
              {currentCard < flashcards.length - 1 ? "Next Card" : "Complete Level"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NeuroDev Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
