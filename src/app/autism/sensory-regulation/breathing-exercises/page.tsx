import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Wind, Play, Pause, RotateCcw, Award } from "lucide-react"
import { useState, useEffect } from "react"

type PhaseType = 'inhale' | 'hold' | 'exhale' | 'rest'
type TechniqueType = 'box' | '4-7-8'

interface TechniqueConfig {
  inhale: number
  hold: number
  exhale: number
  rest: number
  name: string
}

interface Buddy {
  id: string
  name: string
  emoji: string
  color: string
}

export default function BreathingExercisesPage() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<PhaseType>('inhale')
  const [countdown, setCountdown] = useState(4)
  const [cycles, setCycles] = useState(0)
  const [technique, setTechnique] = useState<TechniqueType>('box')
  const [buddy, setBuddy] = useState('bear')

  const techniques: Record<TechniqueType, TechniqueConfig> = {
    box: { inhale: 4, hold: 4, exhale: 4, rest: 4, name: 'Box Breathing' },
    '4-7-8': { inhale: 4, hold: 7, exhale: 8, rest: 2, name: '4-7-8 Technique' }
  }

  const buddies: Buddy[] = [
    { id: 'bear', name: 'Calm Bear', emoji: '🐻', color: 'bg-amber-100' },
    { id: 'turtle', name: 'Zen Turtle', emoji: '🐢', color: 'bg-green-100' },
    { id: 'owl', name: 'Wise Owl', emoji: '🦉', color: 'bg-purple-100' },
    { id: 'fish', name: 'Peaceful Fish', emoji: '🐠', color: 'bg-blue-100' }
  ]

  const phases: PhaseType[] = ['inhale', 'hold', 'exhale', 'rest']
  const currentTechnique = techniques[technique]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else if (isActive && countdown === 0) {
      // Move to next phase
      const currentIndex = phases.indexOf(currentPhase)
      const nextIndex = (currentIndex + 1) % phases.length
      const nextPhase = phases[nextIndex]
      
      setCurrentPhase(nextPhase)
      setCountdown(currentTechnique[nextPhase])
      
      // If we completed a full cycle
      if (nextPhase === 'inhale') {
        setCycles(cycles + 1)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, countdown, currentPhase, cycles, currentTechnique, phases])

  const startExercise = () => {
    setIsActive(true)
    setCurrentPhase('inhale')
    setCountdown(currentTechnique.inhale)
  }

  const pauseExercise = () => {
    setIsActive(false)
  }

  const resetExercise = () => {
    setIsActive(false)
    setCurrentPhase('inhale')
    setCountdown(currentTechnique.inhale)
    setCycles(0)
  }

  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'inhale': return 'bg-green-500'
      case 'hold': return 'bg-yellow-500'
      case 'exhale': return 'bg-blue-500'
      case 'rest': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  const getPhaseInstruction = () => {
    switch (currentPhase) {
      case 'inhale': return 'Breathe in slowly...'
      case 'hold': return 'Hold your breath...'
      case 'exhale': return 'Breathe out gently...'
      case 'rest': return 'Rest and prepare...'
      default: return 'Get ready...'
    }
  }

  const selectedBuddy = buddies.find(b => b.id === buddy)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-green-600" />
            <span>NeuroDev Therapy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/autism" className="text-sm font-medium hover:underline underline-offset-4">
              Autism
            </Link>
            <Link href="/dyslexia" className="text-sm font-medium hover:underline underline-offset-4">
              Dyslexia
            </Link>
            <Link href="/detection" className="text-sm font-medium hover:underline underline-offset-4">
              Detection Test
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Contact Us
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <section className="w-full py-4 bg-white/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/autism/sensoryregulation" className="hover:text-green-600 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Sensory Regulation
              </Link>
            </div>
          </div>
        </section>

        {/* Main Breathing Area */}
        <section className="flex-1 py-12">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            
            {/* Breathing Buddy and Animation */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                {/* Breathing Circle Animation */}
                <div 
                  className={`w-64 h-64 rounded-full ${getPhaseColor()} transition-all duration-1000 flex items-center justify-center ${
                    isActive && currentPhase === 'inhale' ? 'scale-125' : 
                    isActive && currentPhase === 'exhale' ? 'scale-75' : 'scale-100'
                  }`}
                >
                  {/* Buddy Character */}
                  <div className={`w-32 h-32 rounded-full ${selectedBuddy?.color} flex items-center justify-center text-6xl transition-all duration-500`}>
                    {selectedBuddy?.emoji}
                  </div>
                </div>
                
                {/* Countdown Display */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full px-6 py-2 shadow-lg border-2 border-gray-200">
                    <span className="text-3xl font-bold text-gray-800">{countdown}</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8 space-y-2">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">{currentPhase}</h2>
                <p className="text-lg text-gray-600">{getPhaseInstruction()}</p>
                <p className="text-sm text-gray-500">Breathing with {selectedBuddy?.name}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-8">
              {!isActive ? (
                <Button onClick={startExercise} size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Play className="h-5 w-5 mr-2" />
                  Start Breathing
                </Button>
              ) : (
                <Button onClick={pauseExercise} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Pause className="h-5 w-5 mr-2" />
                  Pause
                </Button>
              )}
              
              <Button onClick={resetExercise} variant="outline" size="lg">
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Technique Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="h-5 w-5" />
                    Breathing Technique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(techniques).map(([key, tech]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setTechnique(key as TechniqueType)
                          resetExercise()
                        }}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          technique === key 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-sm text-gray-600">
                          In:{tech.inhale}s → Hold:{tech.hold}s → Out:{tech.exhale}s → Rest:{tech.rest}s
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Buddy Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Breathing Buddy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {buddies.map((buddie) => (
                      <button
                        key={buddie.id}
                        onClick={() => setBuddy(buddie.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          buddy === buddie.id 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{buddie.emoji}</div>
                        <div className="text-sm font-medium">{buddie.name}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracking */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{cycles}</div>
                    <div className="text-sm text-gray-600">Breathing Cycles Completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Current Technique</div>
                    <div className="font-semibold">{currentTechnique.name}</div>
                  </div>
                </div>
                
                {cycles > 0 && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">
                        {cycles >= 10 ? "Breathing Master! 🏆" :
                         cycles >= 5 ? "Great Progress! 🌟" :
                         cycles >= 1 ? "Keep Going! 💪" : ""}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container flex flex-col gap-4 py-8 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Brain className="h-6 w-6" />
              <span>NeuroDev Therapy</span>
            </Link>
            <p className="text-sm text-gray-500">
              Providing specialized therapy for individuals with autism and dyslexia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}