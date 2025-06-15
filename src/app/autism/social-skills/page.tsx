import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

// Define the type for the card data
type SocialSkillCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  video?: string;
};

// Define the data for the cards
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
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
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
              <Card
                key={card.title}
                className="flex flex-col transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-purple-600">
                    {card.title}
                  </CardTitle>
                  {card.description && (
                    <CardDescription>{card.description}</CardDescription>
                  )}
                  {/* Check if it's a video or an image */}
                  <div className="mt-4 aspect-video overflow-hidden rounded-md">
                    {card.video ? (
                      <video controls className="object-cover w-full h-full">
                        <source src={card.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Content for the card can be added here if needed */}
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
      {/* Footer can be added here if needed, similar to other pages */}
    </div>
  );
}
