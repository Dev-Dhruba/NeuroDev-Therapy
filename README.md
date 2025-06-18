<div align="center">

# NeuroDev Therapy

</div>

<div align="center">
  <img src="/public/images/nav.png" alt="NeuroDev Therapy Banner" width="600"/>
  
  **An open-source platform for detecting and supporting Autism and Dyslexia through engaging, module-based therapies.**
  
  [![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/gwyUM2yh)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhruba-bhattacharyya-336928292/)
  [![Stars](https://img.shields.io/github/stars/Dev-Dhruba/NeuroDev-Therapy?style=social)](https://github.com/Dev-Dhruba/NeuroDev-Therapy)
</div>

## Project Overview

NeuroDev Therapy is a comprehensive web application that provides accessible tools for early detection and therapeutic support for Autism Spectrum Disorder (ASD) and Dyslexia. Through gamified, interactive modules, the platform aims to make neurodiversity support engaging and effective for learners of all ages.

## Key Features

- **Detection Modules**: Evidence-based screening tools including AQ, M-CHAT-R/F, CARS, and phonological tests
- **Therapy Modules**: Interactive therapies for communication, social skills, literacy, and cognitive development
- **Gamified Learning**: Engaging activities with visual feedback and progress tracking systems
- **Accessibility First**: Screen reader support, high contrast modes, and intuitive navigation
- **Responsive Design**: Optimized interface for desktop, tablet, and mobile devices
- **AI Integration**: Powered by Gemini AI for personalized learning experiences
- **Progress Tracking**: Visual progress indicators and achievement systems

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI components
- **Animations**: Framer Motion, tw-animate-css
- **Icons**: Lucide React
- **Database**: Supabase
- **AI/ML**: Gemini AI, Vercel AI SDK
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-Dhruba/NeuroDev-Therapy.git
   cd NeuroDev-Therapy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Navigate to `http://localhost:3000` in your web browser

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
neurodev-therapy/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router
│   │   ├── about/      # About page
│   │   ├── autism/     # Autism modules
│   │   ├── detection/  # Detection tests
│   │   ├── dyslexia/   # Dyslexia modules
│   │   └── page.tsx    # Landing page
│   ├── components/     # Reusable components
│   │   └── ui/         # Shadcn UI components
│   └── lib/            # Utilities and helpers
├── CONTRIBUTING.md     # Contribution guidelines
└── README.md          # Project documentation
```

## Detection and Therapy Modules

### Autism Support

**Detection Tools:**
- AQ (Autism Quotient): 50-item self-assessment questionnaire
- M-CHAT-R/F: Early screening tool for toddlers
- CARS: Childhood Autism Rating Scale
- SRS-2: Social Responsiveness Scale

**Therapy Modules:**
- Communication skills with Augmentative and Alternative Communication (AAC) support
- Social interaction development through role-play activities
- Cognitive development exercises and puzzles
- Sensory regulation and processing tools
- Literacy and phonics training programs
- Behavioral support and management systems

### Dyslexia Support

**Detection Tools:**
- Phonological awareness assessments
- Rapid Automatized Naming (RAN) tests
- Auditory memory evaluations
- Reading fluency measurements

**Therapy Modules:**
- Phonics instruction with audio guidance
- Text-to-speech reading support systems
- Interactive dictation and transcription exercises
- Sight word recognition and memorization games
- Typing skills development programs
- Story sequencing and comprehension activities

## Contributing

We welcome contributions from developers, designers, educators, and accessibility advocates. The project benefits from diverse perspectives and expertise in creating inclusive educational tools.

**Ways to contribute:**
- Report bugs or suggest new features
- Improve user interface and user experience design
- Enhance accessibility features and compliance
- Add documentation or create translations
- Develop new therapy modules or detection tools

Please review our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on the development process, coding standards, and submission procedures.

## Community and Support

Join our community to connect with other contributors, users, and stakeholders:

- **Discord Server**: [Join our community](https://discord.gg/gwyUM2yh) for real-time discussions and support
- **Issue Tracking**: Report bugs or request features through [GitHub Issues](https://github.com/Dev-Dhruba/NeuroDev-Therapy/issues)
- **Project Discussions**: Share ideas and feedback in [GitHub Discussions](https://github.com/Dev-Dhruba/NeuroDev-Therapy/discussions)

## Maintainer

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/144554934?v=4" width="80"/>
      <br>
      <strong>Dhruba Bhattacharyya</strong>
      <br>
      <sub>Project Administrator</sub>
      <br>
      <a href="https://www.linkedin.com/in/dhruba-bhattacharyya-336928292/">
        <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn Profile"/>
      </a>
    </td>
  </tr>
</table>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete terms and conditions.

## Acknowledgements

If this project has been valuable to you or aligns with your mission to support neurodiversity, please consider:
- Starring this repository to increase its visibility
- Sharing the project with relevant communities and networks
- Contributing to the codebase or documentation
- Participating in community discussions and feedback

Through collaborative effort, we can make neurodiversity support more accessible and effective for individuals and families worldwide.

---

<div align="center">
  <strong>Developed to support the neurodivergent community</strong>
</div>
