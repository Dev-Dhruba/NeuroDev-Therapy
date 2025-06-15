"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox"; 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

type SocialSkillCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  video?: string;
};


const socialSkillsCardsData: SocialSkillCard[] = [
  {
    title: "Cartoon Videos of Social Situation",
    description: "Watch animated scenarios to understand social interactions.",
    href: "#",
    image: "/images/social_situation.jpg",
  },
  {
    title: "Emotion Matching Game",
    description:
      "Learn to identify and match emotions through an interactive game.",
    href: "#",
    image: "/images/emotion_match.jpg",
  },
  {
    title: "Interactive Video Modelling",
    description:
      "Observe and learn social behaviors through interactive videos.",
    href: "#",
    image: "",
    video: "/videos/interactive_video.mp4",
  },
  {
    title: "Role-playing with Avatar",
    description: "Practice social skills by interacting with a virtual avatar.",
    href: "#",
    image: "/images/role_avatar.jpeg",
  },
];

export default function SocialSkillsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState<{
    src: string;
    alt: string;
    type: "image" | "video";
  } | null>(null);

  const openLightbox = (content: {
    src: string;
    alt: string;
    type: "image" | "video";
  }) => {
    setLightboxContent(content);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 py-4">
          <Link
            href="/autism"
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Autism Modules
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
              Social Skills Activities
            </h1>
            <p className="mt-3 max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed">
              Engage in these activities to enhance your social understanding
              and interaction skills.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {socialSkillsCardsData.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle className="text-purple-600">
                    {card.title}
                  </CardTitle>
                  {card.description && (
                    <CardDescription>{card.description}</CardDescription>
                  )}
                  <div
                    className="mt-4 aspect-video overflow-hidden rounded-md cursor-pointer"
                    onMouseEnter={() =>
                      openLightbox(
                        card.video
                          ? { src: card.video, type: "video", alt: card.title }
                          : { src: card.image, type: "image", alt: card.title }
                      )
                    }
                    onMouseLeave={closeLightbox}
                  >
                    {card.video ? (
                      <video
                        controls
                        autoPlay
                        loop
                        muted
                        width="640"
                        height="360"
                        className="object-cover w-full h-full pointer-events-none" 
                      >
                        <source src={card.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={600}
                        height={400}
                        className="object-contain w-full h-full pointer-events-none" 
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-gray-600">
                        {card.description ||
                        "Engage in this activity to enhance your social skills."}
                    </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                  >
                    Start Activity
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      {lightboxOpen && lightboxContent && (
        <Lightbox
          src={lightboxContent.src}
          alt={lightboxContent.alt}
          type={lightboxContent.type}
          onClose={closeLightbox}
        />
      )}
        <footer className="py-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Autism Learning Platform</p>
        </footer>
    </div>
  );
}
