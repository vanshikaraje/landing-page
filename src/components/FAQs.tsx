"use client";
import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is this platform about?",
    answer: "It’s a space to showcase your profile, build credibility, and access opportunities with ease.",
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up, create your profile, and explore the features designed to help you grow.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we follow strict security standards to ensure your information is always protected.",
  },
  {
    question: "Can I access the platform on mobile?",
    answer: "Absolutely, the platform is fully optimized for both desktop and mobile devices.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/30 py-4">
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-2 text-white/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#A46EDB,#4F21A1_34%,#200D42_65%,#000_82%)] text-white py-[72px]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mx-auto max-w-[648px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[468px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
