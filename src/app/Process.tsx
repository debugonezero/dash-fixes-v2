import AnimationWrapper from "./AnimationWrapper";
import { FileSignature, PackageOpen, Microchip } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: "1. Get Your Free Label",
      description:
        "Fill out the form below to get an instant quote and a free, pre-paid shipping label emailed to you.",
      icon: <FileSignature className="text-3xl text-accentBlue" />,
    },
    {
      title: "2. Mail Your Device",
      description:
        "Package your device securely and drop it off at your nearest mail location. Shipping is on us.",
      icon: <PackageOpen className="text-3xl text-accentGreen" />,
    },
    {
      title: "3. We Fix & Return",
      description:
        "Once we receive it, we&apos;ll confirm the quote, perform the repair, and ship it right back to you, fully insured.",
      icon: <Microchip className="text-3xl text-accentMagenta" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-lightOrange-dark"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-textDark">
              How It Works: As Easy As 1-2-3
            </h2>
          </div>
        </AnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className={`w-20 h-20 mx-auto rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-textDark">
                {step.title}
              </h3>
              <p className="text-textSubtleDark">
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
