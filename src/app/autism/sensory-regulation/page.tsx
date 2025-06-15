import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Music, Wind, Volume2, Clock, Play } from "lucide-react"

export default function SensoryRegulationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6" />
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
        <section className="w-full py-6 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/autism" className="hover:text-purple-600 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Autism Modules
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sensory Regulation Module
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interactive tools to help manage sensory sensitivities and develop self-regulation skills through calming activities.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Wind className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-gray-700">Find Your Calm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Cards Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              
              {/* Card 1: Calming Animations */}
              <Card className="group transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader className="pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                    <Music className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
                    Calming Animations
                  </CardTitle>
                  <CardDescription className="text-base">
                    Watch peaceful animations with gentle background music to relax and unwind
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Floating bubbles and gentle waves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Soft instrumental background music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Customizable visual themes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Volume and speed controls</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/sensoryregulation/calming-animations" className="w-full">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      Start Calming Session
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 2: Breathing Exercises */}
              <Card className="group transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 group-hover:bg-green-200 transition-colors">
                    <Wind className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-700 transition-colors">
                    Breathing Exercises
                  </CardTitle>
                  <CardDescription className="text-base">
                    Practice mindful breathing with animated characters to reduce anxiety and stress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Animated breathing buddy characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>4-7-8 and box breathing techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Visual cues and gentle voice guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Progress tracking and achievements</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/sensoryregulation/breathing-exercises" className="w-full">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      Begin Breathing Practice
                      <Wind className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 3: Interactive Soundboard */}
              <Card className="group transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader className="pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4 group-hover:bg-purple-200 transition-colors">
                    <Volume2 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-700 transition-colors">
                    Relaxing Soundboard
                  </CardTitle>
                  <CardDescription className="text-base">
                    Mix and match calming sounds to create your perfect relaxation environment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Nature sounds (rain, ocean, forest)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>White noise and ambient sounds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Musical instruments and chimes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Save favorite sound combinations</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/sensoryregulation/soundboard" className="w-full">
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      Explore Sounds
                      <Volume2 className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 4: Visual Timers */}
              <Card className="group transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader className="pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4 group-hover:bg-orange-200 transition-colors">
                    <Clock className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-700 transition-colors">
                    Visual Timers
                  </CardTitle>
                  <CardDescription className="text-base">
                    Use visual timers with calming voice guidance for transitions and activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Colorful countdown animations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Gentle voice reminders and encouragement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Customizable timer themes and sounds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Break reminders and activity suggestions</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/sensoryregulation/visual-timers" className="w-full">
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      Set Up Timer
                      <Clock className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Benefits of Sensory Regulation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These activities help develop emotional regulation, reduce anxiety, and improve focus through sensory-friendly experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Improved Focus</h3>
                <p className="text-sm text-gray-600">Better attention and concentration skills</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Wind className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Stress Reduction</h3>
                <p className="text-sm text-gray-600">Lower anxiety and emotional overwhelm</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Better Transitions</h3>
                <p className="text-sm text-gray-600">Smoother changes between activities</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
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