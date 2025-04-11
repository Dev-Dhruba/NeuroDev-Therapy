import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BookText, Brain, Lightbulb, Pencil, ArrowRight, Headphones } from "lucide-react"

export default function DyslexiaPage() {
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
            <Link href="/dyslexia" className="text-sm font-medium underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Dyslexia Therapy Modules
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Discover our gamified learning modules designed to support individuals with dyslexia through
                    engaging, level-based activities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/detection">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Take Dyslexia Detection Test
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Dyslexia Therapy Illustration"
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
                  Gamified Learning Modules
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our learning modules use game-based approaches to make reading and learning engaging and effective.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <BookText className="h-6 w-6" />
                  </div>
                  <CardTitle>Phonological Awareness Module</CardTitle>
                  <CardDescription>Build foundational sound recognition skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our phonological awareness module helps develop the ability to recognize and work with sounds in
                    spoken language.
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
                      Interactive sound games
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
                      Rhyming challenges
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
                      Sound blending activities
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/phonological-awareness" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Reading Fluency Module</CardTitle>
                  <CardDescription>Develop smooth and accurate reading skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our reading fluency module focuses on developing the ability to read text accurately, quickly, and
                    with proper expression.
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
                      Timed reading games
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
                      Word recognition activities
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
                      Expression practice
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/reading-fluency" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle>Comprehension Strategies Module</CardTitle>
                  <CardDescription>Build understanding and meaning from text</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our comprehension module helps individuals with dyslexia extract meaning from text and develop
                    critical thinking skills.
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
                      Story visualization games
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
                      Question-based activities
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
                      Summarization challenges
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/comprehension-strategies" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Pencil className="h-6 w-6" />
                  </div>
                  <CardTitle>Spelling & Writing Module</CardTitle>
                  <CardDescription>Develop written expression skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our spelling and writing module helps individuals with dyslexia develop skills for written
                    expression and communication.
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
                      Interactive spelling games
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
                      Sentence building activities
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
                      Creative writing challenges
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/spelling-writing" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle>Memory & Processing Module</CardTitle>
                  <CardDescription>Strengthen cognitive skills for learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our memory and processing module focuses on developing working memory, processing speed, and
                    cognitive skills essential for learning.
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
                      Memory matching games
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
                      Processing speed challenges
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
                      Attention training activities
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/memory-processing" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <CardTitle>Assistive Technology Module</CardTitle>
                  <CardDescription>Learn to use tools that support reading and writing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our assistive technology module introduces tools and technologies that can support individuals with
                    dyslexia in their learning journey.
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
                      Text-to-speech tutorials
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
                      Speech-to-text practice
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
                      Reading software simulations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dyslexia/assistive-technology" className="w-full">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
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
            <p className="text-sm text-gray-500 md:text-base">
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
