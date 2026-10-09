# AI Quest: Engineer Path

[![Electron](https://img.shields.io/badge/Electron-38.x-47848F?logo=electron&logoColor=white)](https://electronjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![i18n](https://img.shields.io/badge/i18n-English%20%7C%20Arabic-green)](#bilingual-support)

A desktop Electron + React application that transforms the journey of becoming an **AI Engineer** into an immersive, gamified progress-tracking experience.

---

## Overview

**AI Quest: Engineer Path** guides aspiring AI Engineers through comprehensive, structured stages ranging from mathematics and Python foundations to modern Large Language Models (LLMs), RAG pipelines, and agentic workflows. By integrating RPG-style game progression (XP, levels, class titles, badges, and boss challenges), learning becomes structured, engaging, and measurable.

---

## Features

- **8 Roadmap Worlds & 39 Topics:** Covering the complete spectrum of modern AI Engineering:
  - World 1: Python, Math & Foundations
  - World 2: Classical Machine Learning & Scikit-Learn
  - World 3: Deep Learning, PyTorch & Neural Networks
  - World 4: Computer Vision & Natural Language Processing
  - World 5: Transformers & Large Language Models (LLMs)
  - World 6: RAG Systems, Vector Databases & Embeddings
  - World 7: AI Agents, LangChain & Tool Use
  - World 8: MLOps, Model Deployment & Production Systems
- **Gamified Progression Engine:**
  - Dynamic XP awards, leveling system, and RPG class titles.
  - Interactive Boss Challenges and Capstone Projects for each world.
  - Quick-check self-assessment quizzes for every topic.
- **Bilingual Support (English & Arabic):** Full localization with instant runtime language switching and tailored RTL/LTR layout management.
- **Analytics & Metrics:**
  - Career readiness score calculator.
  - Streak and study time tracking.
  - Weekly progress comparisons.
- **Exportable Progress Card:** Generate and save a high-resolution PNG summary card showcasing your achievements and current rank.
- **Offline & Local-First:** All progress is persisted securely using local storage with zero cloud dependencies required.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Desktop Shell** | Electron 38, Electron Builder 26 |
| **Frontend Framework** | React 19, Vite 7 |
| **UI & Animations** | Vanilla CSS, Framer Motion, Lucide Icons |
| **Localization** | Custom i18n Context (English / Arabic) |
| **Export Engine** | HTML5 Canvas card generator |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn`

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/a-2m-a-r7/ai-quest-engineer-path.git
   cd ai-quest-engineer-path
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

- **Run Desktop App (Electron + Vite):**
  ```bash
  npm run app
  ```

- **Run Web Preview (Vite Dev Server):**
  ```bash
  npm run dev
  ```

### Building for Production

- **Generate Web Build (`dist/`):**
  ```bash
  npm run build
  ```

- **Package Windows Installer (`release/`):**
  ```bash
  npm run dist
  ```
  The packaged NSIS installer executable will be generated inside the `release/` folder.

---

## Project Structure

```text
ai-quest-engineer-path/
├── electron/                            # Electron main & preload scripts
│   ├── main.cjs                         # Window lifecycle & desktop configuration
│   ├── preload.cjs                      # Secure context bridge
│   └── icon.png                         # Application icon
├── src/                                 # React frontend source
│   ├── components/                      # Modular UI components
│   │   ├── Dashboard.jsx                # Main hub & career overview
│   │   ├── WorldMap.jsx                 # Interactive world selector
│   │   ├── SectionView.jsx              # Topic roadmap view
│   │   ├── TopicScreen.jsx              # Topic details & quiz check
│   │   ├── TrophyRoom.jsx               # Badges & achievements
│   │   ├── ResourceHub.jsx              # Curated study resources
│   │   ├── Onboarding.jsx               # New user welcome flow
│   │   ├── Settings.jsx                 # Language & app settings
│   │   └── Shared.jsx                   # Reusable UI widgets
│   ├── data/
│   │   └── roadmap.js                   # Comprehensive roadmap curriculum
│   ├── hooks/
│   │   └── useProgress.js               # Persistence & level tracking hook
│   ├── lib/
│   │   ├── gameLogic.js                 # XP, leveling & title computation
│   │   ├── exportCard.js                # Canvas PNG progress card generator
│   │   ├── i18n.js                      # Translation helpers
│   │   └── LangContext.jsx              # React context for active locale
│   ├── locales/
│   │   ├── en.js                        # English translations
│   │   └── ar.js                        # Arabic translations
│   ├── App.jsx                          # Root component
│   ├── main.jsx                         # React entry point
│   └── styles.css                       # Global styles & design system
├── index.html                           # Single page entry HTML
├── vite.config.js                       # Vite build configuration
├── package.json                         # Project metadata and dependencies
├── .gitignore                           # Git ignore rules
├── LICENSE                              # MIT License
└── README.md                            # Documentation
```

---

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
