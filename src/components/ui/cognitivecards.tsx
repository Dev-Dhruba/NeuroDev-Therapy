import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaPuzzlePiece,
  FaMemory,
  FaStream,
  FaShapes,
} from "react-icons/fa";

const modules = [
  {
    title: "Visual Puzzles",
    description: "Solve puzzles with voice instructions.",
    icon: <FaPuzzlePiece size={40} />,
  },
  {
    title: "Simon Says",
    description: "Mimic patterns using audio-visual cues.",
    icon: <FaMemory size={40} />,
  },
  {
    title: "Sequencing Games",
    description: "Arrange logical steps in the right order.",
    icon: <FaStream size={40} />,
  },
  {
    title: "Color & Shape Games",
    description: "Match colors and shapes using sounds.",
    icon: <FaShapes size={40} />,
  },
];

export default function CognitiveSkillCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {modules.map((mod, i) => (
        <Card
          key={i}
          className="bg-green-50/60 border border-green-200 rounded-xl shadow-[0_4px_24px_rgba(34,197,94,0.2)] p-6 flex flex-col items-center text-center backdrop-blur-md transition-shadow duration-300"
        >
          <div className="text-green-600 mb-4">{mod.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-green-800">
            {mod.title}
          </h3>
          <p className="text-sm text-gray-700 mb-4">{mod.description}</p>
          <Button className="group bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
  Start Activity
  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
</Button>

        </Card>
      ))}
    </div>
  );
}


