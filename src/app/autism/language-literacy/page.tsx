"use client"

import React from 'react';
import Link from 'next/link';
import { BookOpen, Star, Volume2, Edit3 } from 'lucide-react';
import ActivityCard from '@/components/ui/ActivityCard';

export default function LanguageLiteracyPage() {
  const handleStartActivity = (activityName: string) => {
    console.log(`Starting ${activityName}`);
    // TODO: Implement actual functionality for each activity
    alert(`Starting ${activityName} - This feature is coming soon!`);
  };

  const activities = [
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Read-Aloud Stories",
      description: "Listen to stories with highlighted text for better comprehension.",
      content: "Enjoy interactive stories read aloud, with each word highlighted as it is spoken. This helps improve reading fluency and comprehension skills.",
      onStart: () => handleStartActivity("Read-Aloud Stories")
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Stories Based on Interests",
      description: "Personalized stories tailored to your favorite topics.",
      content: "Select your interests and read stories that match your favorite themes and topics. This makes reading more engaging and relevant.",
      onStart: () => handleStartActivity("Stories Based on Interests")
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Phonics Games",
      description: "Fun games to practice letter sounds and word building.",
      content: "Play interactive games that help you learn phonics, letter sounds, and how to build words. Perfect for developing reading foundations.",
      onStart: () => handleStartActivity("Phonics Games")
    },
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Dictation Games",
      description: "Practice writing and spelling by listening and typing.",
      content: "Listen to words or sentences and type them out to improve your spelling and writing skills. Great for auditory processing.",
      onStart: () => handleStartActivity("Dictation Games")
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/autism" className="flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 transition-colors">
            <BookOpen className="h-6 w-6" />
            <span>Language & Literacy Module</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/autism" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Back to Autism Modules
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 bg-gradient-to-b from-purple-50 to-white py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 text-gray-900">
              Language & Literacy Activities
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 md:text-xl">
              Choose an activity to help develop reading, writing, and comprehension skills in a fun, engaging way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                content={activity.content}
                onStart={activity.onStart}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 