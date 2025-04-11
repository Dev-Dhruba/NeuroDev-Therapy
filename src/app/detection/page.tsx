import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, TestTube } from "lucide-react"

export default function DetectionPage() {
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
            <Link href="/detection" className="text-sm font-medium underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Early Detection Tests
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our scientifically-backed screening tools help identify signs of autism and dyslexia early, allowing
                  for timely intervention and support.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="about">About Our Tests</TabsTrigger>
                    <TabsTrigger value="autism">Autism Test</TabsTrigger>
                    <TabsTrigger value="dyslexia">Dyslexia Test</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="p-4 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">About Our Detection Tests</h2>
                      <p className="text-gray-500">
                        Our detection tests are designed by experts in neurodevelopmental conditions to help identify
                        potential signs of autism and dyslexia. These tests are not diagnostic tools but serve as
                        initial screenings that can guide you toward professional evaluation if needed.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>Why Early Detection Matters</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-500">
                              Research shows that early intervention leads to significantly better outcomes. Identifying
                              signs early allows for timely support and personalized learning strategies.
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>What to Expect</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-500">
                              Our tests take approximately 15-20 minutes to complete. You'll receive immediate results
                              with recommendations for next steps based on your responses.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="autism" className="p-4 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Autism Detection Test</h2>
                      <p className="text-gray-500">
                        Our autism screening tool evaluates social communication, behavioral patterns, and sensory
                        sensitivities to identify potential signs of autism spectrum disorder.
                      </p>
                      <Card>
                        <CardHeader>
                          <CardTitle>Test Overview</CardTitle>
                          <CardDescription>What our autism detection test evaluates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-500">
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
                              Social interaction and communication patterns
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
                              Repetitive behaviors and restricted interests
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
                              Sensory sensitivities and processing patterns
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
                              Developmental milestones and patterns
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            Start Autism Detection Test
                            <TestTube className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="dyslexia" className="p-4 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Dyslexia Detection Test</h2>
                      <p className="text-gray-500">
                        Our dyslexia screening tool evaluates reading, writing, and processing skills to identify
                        potential signs of dyslexia and related learning differences.
                      </p>
                      <Card>
                        <CardHeader>
                          <CardTitle>Test Overview</CardTitle>
                          <CardDescription>What our dyslexia detection test evaluates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-500">
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
                              Phonological awareness and processing
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
                              Reading fluency and comprehension
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
                              Spelling and writing patterns
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
                              Working memory and processing speed
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Start Dyslexia Detection Test
                            <TestTube className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
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
  )
}
