import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Puzzle, Zap, BookOpen, Award, Mic, ArrowRight } from "lucide-react"

export default function AutismPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6" />
            <span>NeuroDev Therapy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/autism" className="text-sm font-medium underline underline-offset-4">
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
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Autism Therapy Modules
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Discover our gamified therapy modules designed to support individuals with autism through engaging,
                    level-based activities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/detection/autism">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Take Autism Detection Test
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/a.jpg"
                  width={400}
                  height={400}
                  alt="Autism Therapy Illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Gamified Therapy Modules
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our therapy modules use game-based learning to make therapy engaging and effective.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Communication Skills Module</CardTitle>
                  <CardDescription>Develop verbal and non-verbal communication skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our communication module uses interactive games and activities to develop language, expression, and
                    comprehension skills.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Animated flashcards with image + word + sound
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Speech-to-text games
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Call-and-response conversations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Clickable icons for AAC
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/communication-skills" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M17 6.1H3" />
                      <path d="M21 12.1H3" />
                      <path d="M15.1 18H3" />
                    </svg>
                  </div>
                  <CardTitle>Social Skills Module</CardTitle>
                  <CardDescription>Build meaningful social connections and understanding</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our social skills module helps develop the ability to understand social cues, recognize emotions,
                    and navigate social interactions.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Cartoon videos of social situations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Emotion-matching games
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Interactive video modeling
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Role-play with AI avatar
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/social-skills" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Puzzle className="h-6 w-6" />
                  </div>
                  <CardTitle>Cognitive Skills Module</CardTitle>
                  <CardDescription>Develop problem-solving and memory skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our cognitive skills module helps develop problem-solving, memory, and critical thinking skills
                    through engaging games and activities.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Visual puzzles with voice-over instructions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Simon-says style memory games
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Sequencing games
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Color and shape games with sound effects
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/cognitive-skills" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Sensory Regulation Module</CardTitle>
                  <CardDescription>Manage sensory sensitivities and processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our sensory regulation module helps process and respond to sensory information in a more comfortable
                    and effective way.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Calming animations + gentle background music
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Breathing exercises with animated characters
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Interactive &qoutsoundboard&qout for relaxing sounds
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Visual timers + soothing voice guidance
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/sensory-regulation" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Language and Literacy Module</CardTitle>
                  <CardDescription>Develop reading and writing skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our language and literacy module helps develop reading, writing, and comprehension skills through
                    engaging activities.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Read-aloud stories with highlighted text
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Stories based on user interests
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Phonics games
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Dictation games
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/languageliteracy" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Behavioral Training Module</CardTitle>
                  <CardDescription>ABA-inspired behavioral training</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our behavioral training module uses ABA-inspired techniques to develop positive behaviors and
                    skills.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Token board with sound/visual rewards
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Choice-making animations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Short clips for modeling correct behaviors
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/behavioral-training" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Mic className="h-6 w-6" />
                  </div>
                  <CardTitle>Voice and Pronunciation Module</CardTitle>
                  <CardDescription>Develop speech clarity and pronunciation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our voice and pronunciation module helps develop speech clarity, articulation, and pronunciation
                    skills.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Mirror game: mimic avatar&aposs mouth movements
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Animated tongue/mouth diagrams
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tongue twisters and pronunciation drills
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/autism/voice-pronunciation" className="w-full">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Blog
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Research
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Testimonials
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Support</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  FAQ
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Community
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Terms
                </Link>
              </nav>
            </div>
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
