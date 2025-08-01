import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { ArrowRight, Brain, BookOpen, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-scrren bg-gradient-to-b from-green-100 via-white to-green-50">
      <header className="fixed top-0 z-50 w-full rounded-b-md border-b border-green-700 bg-white shadow-xl">
        <div className="container flex h-20 items-center justify-between px-1 md:px-3">
          <Link href="/" className="flex items-center gap-1 font-semibold">
            <Brain className="h-8 w-8"/>
            <span className="text-md md:text-2xl tracking-tighter font-bold text-green-800">NeuroDev Therapy</span>
          </Link>
          <nav className="hidden md:flex gap-5">
            <Link href="/autism" className="text-sm font-medium text-gray-700 hover:text-green-600 hover:underline underline-offset-4">
              Autism
            </Link>
            <Link href="/dyslexia" className="text-sm font-medium text-gray-700 hover:text-green-600 hover:underline underline-offset-4">
              Dyslexia
            </Link>
            <Link href="/detection" className="text-sm font-medium text-gray-700 hover:text-green-600 hover:underline underline-offset-4">
              Detection Test
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-600 hover:underline underline-offset-4">
              About Us
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:flex bg-green-600 text-white transition duration-300 ease-in hover:bg-green-700/80 hover:text-white  hover:scale-105 rounded-md px-4 py-2">
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
        <section className="relative w-full  pb-16 md:pt-28 mb:pb-24 bg-gradient-to-b from-green-100 via-white to-green-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-14">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-1">
                  
                  
                  <span className="inline-flex text-green-800 items-center gap-2 rounded-full border border-green-500 bg-white/90 px-3 py-1.5 text-sm font-medium shadow-md hover:shadow-lg rounded transition duration-300 ease-in transform:scale-105 backdrop-blur-sm mx-auto mt-5 mb-10 cursor-pointer ">
                    <Brain className="h-5 w-5 text-green-600" />
                    Specialized Therapy for Autism & Dyslexia
                  </span>
                  
                  <h1 className="mx-auto max-w-4xl text-sm font-bold tracking-tighter text-transparent bg-gradient-to-b from-green-800 to-green-600 bg-clip-text sm:text-3xl md:text-6xl ">
                    Discover gamified, module‑based therapies designed to support individuals.
                  </h1>
                  <p className="mt-7 mb-4 max-w-4xl text-2xl text-gray-500 tracking-tighter">
                    Through engaging, interactive experiences for autism and dyslexia development.
                  </p>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/detection">
                    <Button size="lg" className="mt-5 hover:scale-105 bg-green-600 text-white border:border-white hover:bg-green-700 cursor-pointer px-3 py-2 rounded-md shadow-md transition duration-300">
                      Take Detection Test
                      <TestTube className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/therapy-modules">
                    <Button size="lg" variant="outline" className="mt-5 hover:scale-105 bg-white text-green-600 border border-green-600 hover:shadow-md hover:text-green-600 cursor-pointer px-3 py-2 rounded-md transition duration-300">
                      Explore Modules
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
              </div>

              </div>
              <div className="flex flex-col justify-center ">
                <div id="therapy-modules" className="grid gap-8 sm:grid-cols-2 w-full max-w-10xl mx-auto ">
                  <div className="flex flex-col items-center space-y-4 rounded-2xl border border-green-500  bg-white/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 ease-in-out  hover:scale-105">
                    <div className="rounded-full bg-purple-100 p-3">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 bg-white/80">Autism Therapy</h3>
                    <p className="text-center text-green-600">Gamified modules for autism therapy and development.</p>
                    <Link href="/autism">
                      <Button variant="outline" className="mt-2 border-purple-400 text-purple-600 hover:text-purple-600 hover:bg-purple-50 transition duration-300 ease-in-out  hover:scale-103">
                        Explore Modules
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center space-y-4 rounded-2xl border border border-green-500 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 ease-in-out  hover:scale-105">
                    <div className="rounded-full bg-blue-100 p-3 ">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 bg-white/80">Dyslexia Therapy</h3>
                    <p className="text-center text-green-600">Interactive learning strategies for dyslexia.</p>
                    <Link href="/dyslexia">
                      <Button variant="outline" className="mt-2 border-blue-400 text-blue-600 hover:text-blue-600 bg-white/80 hover:bg-blue-50  transition duration-300 ease-in-out  hover:scale-103">
                        Explore Modules
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 via-white to-green-100 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-green-700 font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine early detection with gamified, level-based therapy modules to make learning engaging and
                  effective.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 rounded-2xl border border border-green-500 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 ease-in-out  hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 ">
                  <TestTube className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-green-600">Early Detection</h3>
                <p className="text-gray-500">
                  Our scientifically-backed screening tools help identify signs of autism and dyslexia early.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border border-green-500 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 ease-in-out  hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
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
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
                    <path d="M18 8h4v4" />
                    <path d="m22 8-5 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600">Gamified Therapy</h3>
                <p className="text-gray-500">
                  Level-based modules make therapy engaging, motivating, and effective for all ages.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border border-green-500 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 ease-in-out  hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 ">Progress Tracking</h3>
                <p className="text-gray-500">
                  Monitor development with detailed progress tracking and personalized recommendations.
                </p>
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
  );
}