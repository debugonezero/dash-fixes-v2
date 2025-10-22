"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimationWrapper from "../AnimationWrapper";

const faqData = [
  {
    question:
      "What kind of parts do you use for batteries, charging ports, and back glass?",
    answer:
      "We have a strict quality-first policy. For critical components like batteries and charging ports, we <strong>only</strong> use high-quality <strong>Aftermarket Premium</strong> or <strong>Genuine</strong> parts. We never use generic, low-quality alternatives, as they lead to high failure rates and a bad customer experience. For back glass, we <strong>only</strong> use Genuine parts to ensure a perfect fit, durability, and water resistance.",
  },
  {
    question:
      "Why do you replace the whole back housing on some iPhone models?",
    answer:
      "For iPhone models before the iPhone 14 (non-Pro), replacing only the back glass with a third-party part can compromise the device's structural integrity and water resistance. To guarantee a factory-quality repair, we replace the entire back housing with a Genuine unit. This ensures the repair is durable and maintains the original feel and resistance of the device.",
  },
  {
    question: "What about parts for MacBooks?",
    answer:
      "Our commitment to quality extends to all Apple products. We use specific, high-quality parts for each type of MacBook repair:<br>- <strong>Screens:</strong> We use Genuine, Refurbished, or Premium quality displays to ensure a perfect picture.<br>- <strong>Batteries:</strong> We use either Genuine or high-quality Premium batteries for longevity and safety.<br>- <strong>Keyboards & Trackpads:</strong> For these critical components, we <strong>only</strong> use Genuine parts to guarantee a perfect fit, feel, and long-term reliability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods for your convenience, including <strong>Credit/Debit Cards, Apple Pay, Google Pay, and Venmo</strong>. All card payments are processed securely through Square.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods for your convenience, including <strong>Credit/Debit Cards, Apple Pay, Google Pay, and Venmo</strong>. All card payments are processed securely through Square.",
  },
];

const FaqItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-solarized-light3 dark:border-solarized-dark3 py-6">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
          {faq.question}
        </h3>
        <span className="text-accentBlue dark:text-solarized-blue">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-solarized-dark3 dark:text-solarized-light3">
          <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
        </div>
      )}
    </div>
  );
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-solarized-light">
              Frequently Asked Questions
            </h1>
          </div>
        </AnimationWrapper>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
