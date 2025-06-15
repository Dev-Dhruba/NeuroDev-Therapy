import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Clock, Play, Pause, RotateCcw, Plus, Minus, Volume2, VolumeX } from "lucide-react"
import { useState, useEffect } from "react"

// Define types for better TypeScript support
interface Theme {
  name: string;
  colors: string[];
  emoji: string;
}

interface PresetTime {
  name: string;
  seconds: number;
  color: string;
}

type ThemeKey = 'sunset' | 'ocean' | 'forest' | 'lavender';

export default function VisualTimersPage() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [initialTime, setInitialTime] = useState(300)
  const [isRunning, setIsRunning] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>('sunset')
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [showBreakSuggestion, setShowBreakSuggestion] = useState(false)

  const themes: Record<ThemeKey, Theme> = {
    sunset: {
      name: 'Warm Sunset',
      colors: ['from-orange-400', 'via-red-400', 'to-pink-500'],
      emoji: '🌅'
    },
    ocean: {
      name: 'Ocean Breeze',
      colors: ['from-blue-400', 'via-teal-400', 'to-green-400'],
      emoji: '🌊'
    },
    forest: {
      name: 'Forest Calm',
      colors: ['from-green-400', 'via-emerald-400', 'to-teal-500'],
      emoji: '🌲'
    },
    lavender: {
      name: 'Lavender Dreams',
      colors: ['from-purple-400', 'via-violet-400', 'to-indigo-500'],
      emoji: '💜'
    }
  }

  const breakActivities = [
    "Take 5 deep breaths 🫁",
    "Stretch your arms and shoulders 🤸",
    "Look at something far away 👀",
    "Drink some water 💧",
    "Walk around for a minute 🚶",
    "Do some gentle neck rolls 🔄"
  ]

  const presetTimes: PresetTime[] = [
    { name: '5 min', seconds: 300, color: 'bg-green-100' },
    { name: '10 min', seconds: 600, color: 'bg-blue-100' },
    { name: '15 min', seconds: 900, color: 'bg-purple-100' },
    { name: '25 min', seconds: 1500, color: 'bg-orange-100' },
    { name: '30 min', seconds: 1800, color: 'bg-red-100' },
    { name: '45 min', seconds: 2700, color: 'bg-indigo-100' }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false)
      setShowBreakSuggestion(true)
      // Voice notification would trigger here
      if (voiceEnabled) {
        console.log("Time's up! Great work!")
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft, voiceEnabled])

  const startTimer = () => {
    setIsRunning(true)
    setShowBreakSuggestion(false)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(initialTime)
    setShowBreakSuggestion(false)
  }

  const setPresetTime = (seconds: number) => {
    setTimeLeft(seconds)
    setInitialTime(seconds)
    setIsRunning(false)
    setShowBreakSuggestion(false)
  }

  const adjustTime = (minutes: number) => {
    const newTime = Math.max(60, timeLeft + (minutes * 60)) // Minimum 1 minute
    setTimeLeft(newTime)
    if (!isRunning) {
      setInitialTime(newTime)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const getProgress = () => {
    return ((initialTime - timeLeft) / initialTime) * 100
  }

  const currentTheme = themes[selectedTheme]
  const progressPercentage = getProgress()
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-orange-600" />
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
              <Link href="/autism/sensoryregulation" className="hover:text-orange-600 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Sensory Regulation
              </Link>
            </div>
          </div>
        </section>

        {/* Main Timer Display */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            
            {/* Timer Circle */}
            <div className="relative inline-block mb-8">
              <svg width="320" height="320" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                />
                {/* Progress circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 140}`}
                  strokeDashoffset={`${2 * Math.PI * 140 * (1 - progressPercentage / 100)}`}
                  className="transition-all duration-1000 ease-in-out"
                />
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Timer Display in Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-gray-800 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-lg text-gray-600">
                  {isRunning ? 'Time Remaining' : 'Ready to Start'}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {currentTheme.emoji} {currentTheme.name}
                </div>
                
                {/* Progress Percentage */}
                <div className="mt-2 text-sm font-medium text-orange-600">
                  {Math.round(progressPercentage)}% Complete
                </div>
              </div>
            </div>

            {/* Main Controls */}
            <div className="flex justify-center gap-4 mb-8">
              {!isRunning ? (
                <Button 
                  onClick={startTimer} 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8"
                  disabled={timeLeft === 0}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Timer
                </Button>
              ) : (
                <Button 
                  onClick={pauseTimer} 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8"
                >
                  <Pause className="h-5 w-5 mr-2" />
                  Pause
                </Button>
              )}
              
              <Button onClick={resetTimer} variant="outline" size="lg" className="px-8">
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </Button>
            </div>

            {/* Time Adjustment */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button
                onClick={() => adjustTime(-5)}
                variant="outline"
                size="sm"
                disabled={isRunning}
              >
                <Minus className="h-4 w-4" />
                5 min
              </Button>
              <Button
                onClick={() => adjustTime(-1)}
                variant="outline"
                size="sm"
                disabled={isRunning}
              >
                <Minus className="h-3 w-3" />
                1 min
              </Button>
              <span className="px-4 py-2 bg-white rounded-lg border text-sm font-medium">
                Adjust Time
              </span>
              <Button
                onClick={() => adjustTime(1)}
                variant="outline"
                size="sm"
                disabled={isRunning}
              >
                <Plus className="h-3 w-3" />
                1 min
              </Button>
              <Button
                onClick={() => adjustTime(5)}
                variant="outline"
                size="sm"
                disabled={isRunning}
              >
                <Plus className="h-4 w-4" />
                5 min
              </Button>
            </div>
          </div>
        </section>

        {/* Break Suggestion Modal */}
        {showBreakSuggestion && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">🎉 Time&apos;s Up!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">Great work! Time for a little break.</p>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-medium mb-2">Try this:</div>
                  <div className="text-gray-700">
                    {breakActivities[Math.floor(Math.random() * breakActivities.length)]}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowBreakSuggestion(false)}
                    className="flex-1"
                    variant="outline"
                  >
                    Take Break
                  </Button>
                  <Button 
                    onClick={() => {
                      setShowBreakSuggestion(false)
                      resetTimer()
                      startTimer()
                    }}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Start Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings and Presets */}
        <section className="w-full py-8 bg-white/50">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Preset Times */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Quick Presets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {presetTimes.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => setPresetTime(preset.seconds)}
                        disabled={isRunning}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          timeLeft === preset.seconds && !isRunning
                            ? 'border-orange-500 bg-orange-50'
                            : `border-gray-200 ${preset.color} hover:border-gray-300 disabled:opacity-50`
                        }`}
                      >
                        <div className="font-semibold">{preset.name}</div>
                        <div className="text-xs text-gray-600">{formatTime(preset.seconds)}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Theme Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Visual Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTheme(key as ThemeKey)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedTheme === key
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{theme.emoji}</div>
                        <div className="text-sm font-medium">{theme.name}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Voice Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Voice Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Voice Reminders</span>
                      <Button
                        onClick={() => setVoiceEnabled(!voiceEnabled)}
                        variant="outline"
                        size="sm"
                      >
                        {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• Gentle time warnings</div>
                      <div>• Completion celebrations</div>
                      <div>• Break suggestions</div>
                      <div>• Encouraging words</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} NeuroDev Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}