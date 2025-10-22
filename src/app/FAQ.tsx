import AnimationWrapper from "./AnimationWrapper";

const FAQ = () => {
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
  ];

  return (
    <section
      id="faq"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-3xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-solarized-light">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimationWrapper>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <details className="bg-solarized-light2 dark:bg-solarized-dark2 p-4 rounded-lg">
                <summary className="text-xl font-heading font-bold cursor-pointer list-none hover:text-solarized-blue transition dark:text-solarized-light">
                  {faq.question}
                </summary>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mt-2">
                  {faq.answer}
                </p>
              </details>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
