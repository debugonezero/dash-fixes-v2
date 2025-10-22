import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { Package } from "lucide-react";
import CallToAction from "./CallToAction";

const Services = () => {
  const mainServices = [
    {
      icon: "📱",
      title: "Phone Repairs",
      description:
        "Broken screens, battery issues, water damage - we&apos;ve got you covered.",
      features: ["Screen replacements", "Battery swaps", "Charging port fixes"],
      link: "/phone-repairs",
    },
    {
      icon: "💻",
      title: "Laptop Repairs",
      description:
        "From hardware issues to software problems, we&apos;ll get your laptop running like new.",
      features: ["Virus removal", "Hardware upgrades", "Keyboard replacements"],
      link: "/laptop-repairs",
    },
    {
      icon: "🎮",
      title: "Game Console Repairs",
      description:
        "Overheating PS5s, controller drift, and more - we&apos;ll get you back in the game.",
      features: ["HDMI Port Repair", "Internal Cleaning", "Controller Repair"],
      link: "/game-console-repairs",
    },
  ];

  const mailInService = {
    icon: <Package className="w-12 h-12 text-solarized-blue" />,
    title: "Nationwide Mail-in Repairs",
    description:
      "Not on campus? No problem! We offer expert repairs to anyone in the United States. Get a free quote, a pre-paid shipping label, and fast turnaround.",
    link: "/mail-in-repair",
  };

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark2 dark:text-solarized-light">
              Our Repair Services 🛠️
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
              We specialize in fixing all your campus tech essentials quickly
              and affordably. Can&apos;t make it in person? We serve the entire
              nation via our mail-in program.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <Link href={service.link}>
                <div className="service-card bg-solarized-light dark:bg-solarized-dark h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
                  <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                    {service.title}
                  </h3>
                  <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-solarized-green mr-2">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper delay={0.3}>
          <div className="bg-solarized-light dark:bg-solarized-dark rounded-2xl shadow-xl border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-solarized-blue hover:scale-[1.01] p-8 md:p-12">
            <div className="md:flex md:items-center md:gap-12">
              <div className="flex-shrink-0 mb-8 md:mb-0 text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center">
                  {mailInService.icon}
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-solarized-dark2 dark:text-solarized-light">
                  {mailInService.title}
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-6 max-w-2xl mx-auto md:mx-0">
                  {mailInService.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-center md:text-right mt-6 md:mt-0">
                <CallToAction
                  href={mailInService.link}
                  text="Request a Quote"
                />
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Services;
