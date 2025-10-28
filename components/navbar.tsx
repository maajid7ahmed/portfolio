"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full backdrop-blur-md bg-white/40 dark:bg-black/40 py-4 z-50 transition-colors duration-500"
    >
      <div className="container mx-auto flex justify-center gap-8 text-gray-900 dark:text-white font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
