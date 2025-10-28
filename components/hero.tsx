// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg" // replace with your background image path
          alt="Hero Background"
          fill
          className="object-cover brightness-50 dark:brightness-75"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center max-w-3xl w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
        >
          <Image
            src="/profile.jpeg" // replace with your profile image path
            alt="Abdullahi Ahmed"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hi, I'm Abdullahi Ahmed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-200"
        >
          Software Engineer
        </motion.p>

        <motion.a
          href="/cv.pdf"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
