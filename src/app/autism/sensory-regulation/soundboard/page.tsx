import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Volume2, VolumeX, Play, Pause, Save, Heart, Trash2 } from "lucide-react"
import { useState } from "react"

export default function SoundboardPage() {
  const [activeSounds, setActiveSounds] = useState<string[]>([])
  const [masterVolume, setMasterVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [savedCombinations, setSavedCombinations] = useState<{id: string, name: string, sounds: string[]}[]>([])

  const soundCategories = {
    nature: {
      name: "Nature Sounds",
      color: "bg-green-500",
      sounds: [
        { id: "rain", name: "Gentle Rain", emoji: "🌧️", color: "bg-blue-100" },
        { id: "ocean", name: "Ocean Waves", emoji: "🌊", color: "bg-blue-200" },
        { id: "forest", name: "Forest Birds", emoji: "🌲", color: "bg-green-100" },
        { id: "wind", name: "Soft Wind", emoji: "💨", color: "bg-gray-100" }
      ]
    },
    ambient: {
      name: "Ambient Sounds",
      color: "bg-purple-500",
      sounds: [
        { id: "whitenoise", name: "White Noise", emoji: "📻", color: "bg-gray-100" },
        { id: "pinknoise", name: "Pink Noise", emoji: "🔊", color: "bg-pink-100" },
        { id: "brownnoise", name: "Brown Noise", emoji: "🎵", color: "bg-amber-100" },
        { id: "cafe", name: "Café Ambience", emoji: "☕", color: "bg-orange-100" }
      ]
    },
    musical: {
      name: "Musical Elements",
      color: "bg-blue-500",
      sounds: [
        { id: "chimes", name: "Wind Chimes", emoji: "🎐", color: "bg-yellow-100" },
        { id: "piano", name: "Soft Piano", emoji: "🎹", color: "bg-purple-100" },
        { id: "flute", name: "Gentle Flute", emoji: "🪈", color: "bg-indigo-100" },
        { id: "bells", name: "Tibetan Bells", emoji: "🔔", color: "bg-gold-100" }
      ]
    }
  }

  const toggleSound = (soundId: string) => {
    if (activeSounds.includes(soundId)) {
      setActiveSounds(activeSounds.filter(id => id !== soundId))
    } else {
      setActiveSounds([...activeSounds, soundId])
    }
  }

  const clearAllSounds = () => {
    setActiveSounds([])
  }

  const saveCombination = () => {
    if (activeSounds.length === 0) return
    
    const name = `Mix ${savedCombinations.length + 1}`
    const newCombination = {
      id: Date.now().toString(),
      name,
      sounds: [...activeSounds]
    }
    setSavedCombinations([...savedCombinations, newCombination])
  }

  const loadCombination = (combination: {id: string, name: string, sounds: string[]}) => {
    setActiveSounds(combination.sounds)
  }

  const deleteCombination = (id: string) => {
    setSavedCombinations(savedCombinations.filter(combo => combo.id !== id))
  }

  const getSoundName = (soundId: string) => {
    for (const category of Object.values(soundCategories)) {
      const sound = category.sounds.find(s => s.id === soundId)
      if (sound) return sound.name
    }
    return soundId
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-purple-600" />
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
              <Link href="/autism/sensoryregulation" className="hover:text-purple-600 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Sensory Regulation
              </Link>
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Relaxing Soundboard</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Mix and match calming sounds to create your perfect relaxation environment. 
              Click sounds to layer them together and find your ideal calm.
            </p>
            
            {/* Master Controls */}
            <div className="flex items-center justify-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setIsMuted(!isMuted)}
                  variant="outline"
                  size="sm"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : masterVolume}
                  onChange={(e) => setMasterVolume(Number(e.target.value))}
                  className="w-24"
                  disabled={isMuted}
                />
                <span className="text-sm text-gray-600 w-8">{isMuted ? 0 : masterVolume}%</span>
              </div>
              
              <Button
                onClick={clearAllSounds}
                variant="outline"
                size="sm"
                disabled={activeSounds.length === 0}
              >
                <Pause className="h-4 w-4 mr-1" />
                Stop All
              </Button>
            </div>
          </div>
        </section>

        {/* Soundboard */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            
            {/* Sound Categories */}
            <div className="space-y-8">
              {Object.entries(soundCategories).map(([categoryId, category]) => (
                <Card key={categoryId}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.sounds.map((sound) => (
                        <button
                          key={sound.id}
                          onClick={() => toggleSound(sound.id)}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                            activeSounds.includes(sound.id)
                              ? 'border-purple-500 bg-purple-100 shadow-lg scale-105'
                              : `border-gray-200 ${sound.color} hover:border-gray-300`
                          }`}
                        >
                          <div className="text-3xl mb-2">{sound.emoji}</div>
                          <div className="font-medium text-sm">{sound.name}</div>
                          {activeSounds.includes(sound.id) && (
                            <div className="mt-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mx-auto" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Active Sounds Display */}
            {activeSounds.length > 0 && (
              <Card className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-purple-600" />
                      Currently Playing ({activeSounds.length})
                    </span>
                    <Button
                      onClick={saveCombination}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save Mix
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {activeSounds.map((soundId) => (
                      <div
                        key={soundId}
                        className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm"
                      >
                        <span className="text-sm font-medium">{getSoundName(soundId)}</span>
                        <button
                          onClick={() => toggleSound(soundId)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <VolumeX className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Saved Combinations */}
            {savedCombinations.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Saved Sound Mixes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedCombinations.map((combo) => (
                      <div
                        key={combo.id}
                        className="p-4 border rounded-lg bg-white shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{combo.name}</h4>
                          <button
                            onClick={() => deleteCombination(combo.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {combo.sounds.length} sounds: {combo.sounds.map(getSoundName).join(', ')}
                        </div>
                        <Button
                          onClick={() => loadCombination(combo)}
                          size="sm"
                          variant="outline"
                          className="w-full"
                        >
                          <Play className="h-3 w-3 mr-1" />
                          Load Mix
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Tips Section */}
        <section className="w-full py-8 bg-white/50">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>💡 Tips for Creating the Perfect Sound Mix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <span>Start with one base sound like rain or ocean waves</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <span>Layer in ambient sounds for depth</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <span>Add musical elements sparingly for harmony</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <span>Save your favorite combinations for easy access</span>
                    </div>
                  </div>
                </div>
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