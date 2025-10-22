import AnimationWrapper from "./AnimationWrapper";

const Process = () => {
  const steps = [
    {
      title: "1. Get Your Free Label",
      description:
        "Fill out the form below to get an instant quote and a free, pre-paid shipping label emailed to you.",
      iconClass: "fa-solid fa-file-signature text-3xl text-solarized-blue",
      backgroundColor: "bg-solarized-blue",
    },
    {
      title: "2. Mail Your Device",
      description:
        "Package your device securely and drop it off at your nearest mail location. Shipping is on us.",
      iconClass: "fa-solid fa-box-open text-3xl text-solarized-cyan",
      backgroundColor: "bg-solarized-cyan",
    },
    {
      title: "3. We Fix & Return",
      description:
        "Once we receive it, we&apos;ll confirm the quote, perform the repair, and ship it right back to you, fully insured.",
      iconClass: "fa-solid fa-microchip text-3xl text-solarized-green",
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
              How It Works: As Easy As 1-2-3
            </h2>
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-solarized-blue flex items-center justify-center text-solarized-light font-bold">
                  1
                </div>
                <div className="w-16 h-1 bg-solarized-blue mx-2"></div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-solarized-cyan flex items-center justify-center text-solarized-light font-bold">
                  2
                </div>
                <div className="w-16 h-1 bg-solarized-cyan mx-2"></div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-solarized-green flex items-center justify-center text-solarized-light font-bold">
                  3
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
                <i className={step.iconClass}></i>
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
