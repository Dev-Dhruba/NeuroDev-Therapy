// src/app/autism/cognitive-skills/page.tsx
import CognitiveSkillCards from "@/components/ui/cognitivecards";

export default function CognitiveSkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        Cognitive Skill Activities
      </h1>
      <CognitiveSkillCards />
    </main>
  );
}

