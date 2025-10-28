"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, Tailwind, and Framer Motion.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Modern shopping interface built with React and shadcn/ui.",
    link: "#",
  },
  {
    title: "Dashboard Template",
    description: "Responsive dashboard using Next.js and Recharts.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-20 text-gray-900 dark:text-white transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
           // target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-indigo-400 transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
