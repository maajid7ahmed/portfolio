"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      // Simulate sending delay
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("✅ Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4 text-gray-900 dark:text-white transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Get In Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-md bg-white/80 dark:bg-gray-900/60 p-6 rounded-2xl shadow-lg space-y-4 transition-colors duration-500"
      >
        <div>
          <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-200">
            Name
          </label>
          <Input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-200">
            Email
          </label>
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-200">
            Message
          </label>
          <Textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Send Message
        </Button>

        {status && <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-2">{status}</p>}
      </motion.form>
    </main>
  );
}
