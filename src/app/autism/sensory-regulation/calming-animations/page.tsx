import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Music, Play, Pause, Volume2, VolumeX, Settings } from "lucide-react"
import { useState } from "react"

interface Theme {
  id: string
  name: string
  color: string
}

export default function CalmingAnimationsPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('bubbles')

  const themes: Theme[] = [
    { id: 'bubbles', name: 'Floating Bubbles', color: 'bg-blue-500' },
    { id: 'waves', name: 'Gentle Waves', color: 'bg-teal-500' },
    { id: 'stars', name: 'Twinkling Stars', color: 'bg-purple-500' },
    { id: 'clouds', name: 'Drifting Clouds', color: 'bg-gray-400' }
  ]

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-blue-600" />
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
              <Link href="/autism/sensoryregulation" className="hover:text-blue-600 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Sensory Regulation
              </Link>
            </div>
          </div>
        </section>

        {/* Main Animation Area */}
        <section className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animation Container */}
            <div className="relative w-full h-[600px] bg-gradient-to-b from-blue-200/30 to-indigo-300/30 rounded-2xl mx-8 overflow-hidden">
              
              {/* Floating Bubbles Animation */}
              {currentTheme === 'bubbles' && (
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-8 h-8 bg-blue-300/40 rounded-full animate-bounce`}
                      style={{
                        left: `${Math.random() * 90}%`,
                        top: `${Math.random() * 90}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Gentle Waves Animation */}
              {currentTheme === 'waves' && (
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-teal-300/40 to-transparent animate-pulse" />
                  <div className="absolute bottom-8 w-full h-24 bg-gradient-to-t from-teal-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              )}

              {/* Twinkling Stars Animation */}
              {currentTheme === 'stars' && (
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-indigo-900/20">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 95}%`,
                        top: `${Math.random() * 95}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Drifting Clouds Animation */}
              {currentTheme === 'clouds' && (
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-24 h-12 bg-gray-200/50 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 80}%`,
                        top: `${Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${4 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Center Message */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 bg-white/80 p-8 rounded-2xl backdrop-blur-sm">
                  <Music className="h-16 w-16 mx-auto text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">Find Your Calm</h2>
                  <p className="text-gray-600">Let the gentle animations and music help you relax</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Control Panel */}
        <section className="w-full py-8 bg-white/80 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Main Controls */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <Button
                  onClick={togglePlayback}
                  size="lg"
                  className={`${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                >
                  {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={toggleMute}
                    variant="outline"
                    size="sm"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-24"
                    disabled={isMuted}
                  />
                  <span className="text-sm text-gray-600 w-8">{isMuted ? 0 : volume}%</span>
                </div>
              </div>

              {/* Theme Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Animation Themes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => setCurrentTheme(theme.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          currentTheme === theme.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-8 h-8 ${theme.color} rounded-full mx-auto mb-2`} />
                        <p className="text-sm font-medium">{theme.name}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Status Indicator */}
              <div className="mt-6 text-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  isPlaying ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                  <span className="text-sm font-medium">
                    {isPlaying ? 'Playing peaceful sounds' : 'Click play to begin your calming session'}
                  </span>
                </div>
              </div>
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