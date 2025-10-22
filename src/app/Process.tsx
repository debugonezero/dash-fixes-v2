import AnimationWrapper from "./AnimationWrapper";

const Process = () => {
  const steps = [
    {
      title: "1. Request Quote",
      description:
        "Submit your repair details via our contact form for a free, instant quote tailored to your device.",
      icon: "📝",
      backgroundColor: "bg-solarized-blue",
    },
    {
      title: "2. Get Free Label",
      description:
        "Receive a pre-paid shipping label via email to send your device securely and at no cost.",
      icon: "📦",
      backgroundColor: "bg-solarized-cyan",
    },
    {
      title: "3. Ship Your Device",
      description:
        "Package your device safely and drop it off at any USPS or UPS location using the provided label.",
      icon: "🚚",
      backgroundColor: "bg-solarized-magenta",
    },
    {
      title: "4. Repair & Return",
      description:
        "We repair your device and ship it back fully insured. Track progress and get updates along the way.",
      icon: "🔧",
      backgroundColor: "bg-solarized-green",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              How It Works: Your 4-Step Mail-in Process
            </h2>
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-solarized-blue flex items-center justify-center text-solarized-light font-bold text-sm">
                  1
                </div>
                <div className="w-12 h-1 bg-solarized-blue"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-solarized-cyan flex items-center justify-center text-solarized-light font-bold text-sm">
                  2
                </div>
                <div className="w-12 h-1 bg-solarized-cyan"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-solarized-magenta flex items-center justify-center text-solarized-light font-bold text-sm">
                  3
                </div>
                <div className="w-12 h-1 bg-solarized-magenta"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-solarized-green flex items-center justify-center text-solarized-light font-bold text-sm">
                  4
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div
                className={`w-20 h-20 mx-auto rounded-full ${step.backgroundColor} bg-opacity-10 flex items-center justify-center mb-4`}
              >
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 dark:text-solarized-light">
                {step.title}
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                {step.description}
              </p>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
