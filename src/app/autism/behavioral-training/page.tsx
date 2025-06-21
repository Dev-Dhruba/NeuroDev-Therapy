"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Star, CheckCircle, Play, Volume2, Target, Users, Video } from "lucide-react"

export default function BehavioralTrainingModule() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const trainingCards = [
    {
      id: "token-board",
      title: "Token Board with Sound/Visual Rewards",
      description: "Interactive token board system with audio and visual feedback for positive reinforcement",
      icon: Star,
      features: [
        "Visual token collection system",
        "Sound effects for rewards",
        "Progress tracking with animations",
        "Customizable reward goals"
      ],
      buttonText: "Start Token Board",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      cardHoverColor: "hover:bg-yellow-50",
      route: "/autism/behavioral-training/token-board"
    },
    {
      id: "choice-making",
      title: "Choice-making Animations",
      description: "Engaging animations to help develop decision-making and choice-making skills",
      icon: CheckCircle,
      features: [
        "Interactive choice scenarios",
        "Animated decision trees",
        "Visual feedback for choices",
        "Progressive difficulty levels"
      ],
      buttonText: "Start Choice Training",
      buttonColor: "bg-green-500 hover:bg-green-600",
      cardHoverColor: "hover:bg-green-50",
      route: "/autism/behavioral-training/choice-making"
    },
    {
      id: "modeling-clips",
      title: "Short Clips for Modeling Correct Behaviors",
      description: "Video-based modeling to demonstrate and reinforce appropriate behaviors",
      icon: Video,
      features: [
        "Short behavioral modeling videos",
        "Step-by-step behavior breakdown",
        "Interactive practice sessions",
        "Real-world scenario examples"
      ],
      buttonText: "Start Behavior Modeling",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      cardHoverColor: "hover:bg-blue-50",
      route: "/autism/behavioral-training/modeling-clips"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/autism" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6" />
            <span>NeuroDev Therapy</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/autism">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Autism
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Behavioral Training Module</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ABA-inspired behavioral training tools designed to develop positive behaviors and skills through 
              interactive, engaging activities with immediate feedback and reinforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {trainingCards.map((card) => {
              const IconComponent = card.icon
              return (
                <Card 
                  key={card.id}
                  className={`w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${card.cardHoverColor} ${
                    hoveredCard === card.id ? 'ring-2 ring-purple-200' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300 ${
                        hoveredCard === card.id 
                          ? card.id === 'token-board' ? 'bg-yellow-200 text-yellow-700' 
                          : card.id === 'choice-making' ? 'bg-green-200 text-green-700'
                          : 'bg-blue-200 text-blue-700'
                          : 'bg-purple-100 text-purple-600'
                      }`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {card.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4 text-green-500 flex-shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4">
                      <Link href={card.route} className="w-full">
                        <Button 
                          className={`w-full text-white ${card.buttonColor} transition-all duration-300 transform hover:scale-105`}
                        >
                          {card.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-purple-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">About Behavioral Training</h2>
              <p className="text-gray-600 mb-6">
                Our behavioral training module is based on Applied Behavior Analysis (ABA) principles, 
                providing evidence-based interventions to help develop positive behaviors and reduce 
                challenging ones. Each tool is designed to be engaging, interactive, and provide 
                immediate feedback for optimal learning outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Targeted Goals</h3>
                    <p className="text-sm text-gray-600">Specific behavioral objectives with measurable outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Individualized Approach</h3>
                    <p className="text-sm text-gray-600">Personalized training based on individual needs and preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Play className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Interactive Learning</h3>
                    <p className="text-sm text-gray-600">Engaging activities that maintain attention and motivation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-slate-50">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} NeuroDev Therapy. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/autism" className="text-sm text-gray-500 hover:underline">
                Back to Autism Modules
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 