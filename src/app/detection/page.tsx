import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, TestTube } from "lucide-react"

export default function DetectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                              Our tests take approximately 15-20 minutes to complete. You&aposll receive immediate results
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
    </div>
  )
}
