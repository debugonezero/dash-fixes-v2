"use client";

import AnimationWrapper from "./AnimationWrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question:
        "What kind of parts do you use for batteries, charging ports, and back glass?",
      answer:
        "We have a strict quality-first policy. For critical components like batteries and charging ports, we only use high-quality Aftermarket Premium or Genuine parts. We never use generic, low-quality alternatives, as they lead to high failure rates and a bad customer experience. For back glass, we only use Genuine parts to ensure a perfect fit, durability, and water resistance.",
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
        "Our commitment to quality extends to all Apple products. We use specific, high-quality parts for each type of MacBook repair: Screens: We use Genuine, Refurbished, or Premium quality displays to ensure a perfect picture. Batteries: We use either Genuine or high-quality Premium batteries for longevity and safety. Keyboards & Trackpads: For these critical components, we only use Genuine parts to guarantee a perfect fit, feel, and long-term reliability.",
    },
    {
      question: "How does mail-in repair work?",
      answer:
        "Mail-in repair is simple! Submit our contact form with your device details and issue. We'll send a free, prepaid shipping label via email. Package your device securely and drop it at any USPS or UPS location. We repair it and ship it back insured. No campus visits needed!",
    },
    {
      question: "What are shipping costs?",
      answer:
        "Shipping is completely free for mail-in repairs. We provide a prepaid label for both directions, covering all costs. Just use the label we email you.",
    },
    {
      question: "How long does the mail-in repair process take?",
      answer:
        "Typically 5-7 business days total: 1-2 days for shipping to us, 1-2 days for repair, 1-2 days back to you. Rush options available for an extra fee.",
    },
    {
      question: "Is my device insured during shipping?",
      answer:
        "Yes! Your device is fully insured during transit. We use USPS Priority Mail with tracking, and you can opt for additional insurance if needed.",
    },
    {
      question: "What if my repair costs more than quoted?",
      answer:
        "We'll always contact you before proceeding if costs exceed the initial quote. No work is done without your approval, and we prioritize transparency.",
    },
  ];

  return (
    <section
      id="faq"
      className="section-spacing bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-3xl mx-auto">
        <AnimationWrapper>
          <div className="text-center content-spacing">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-solarized-light">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimationWrapper>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className="bg-solarized-light dark:bg-solarized-dark rounded-lg border border-solarized-light3 dark:border-solarized-dark3 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition-colors"
                >
                  <span className="text-xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-solarized-blue" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-solarized-blue" />
                    )}
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 border-t border-solarized-light3 dark:border-solarized-dark3">
                    <p className="text-solarized-dark3 dark:text-solarized-light3 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
