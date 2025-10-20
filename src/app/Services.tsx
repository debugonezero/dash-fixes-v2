import Link from 'next/link';
import AnimationWrapper from './AnimationWrapper';
import { Smartphone, Laptop, Package, Gamepad, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: (<Smartphone className="w-8 h-8 text-accentMagenta" />),
      title: 'Phone Repairs 📱',
      description: "Broken screens, battery issues, water damage - we&apos;ve got you covered.",
      features: [
        "Screen replacements",
        "Battery swaps",
        "Charging port fixes",
      ],
      link: '/phone-repairs',
    },
    {
      icon: (<Laptop className="w-8 h-8 text-accentBlue" />),
      title: 'Laptop Repairs 💻',
      description: "From hardware issues to software problems, we&apos;ll get your laptop running like new.",
      features: [
        "Virus removal",
        "Hardware upgrades",
        "Keyboard replacements",
      ],
      link: '/laptop-repairs',
    },
    {
      icon: (<Gamepad className="w-8 h-8 text-accentGreen" />),
      title: 'Game Console Repairs 🎮',
      description: "Overheating PS5s, controller drift, and more - we&apos;ll get you back in the game.",
      features: [
        "HDMI Port Repair",
        "Internal Cleaning",
        "Controller Repair",
      ],
      link: '/game-console-repairs',
    },
  ];

  const mailInService = {
    icon: (<Package className="w-12 h-12 text-accentBlue" />),
    title: 'Nationwide Mail-in Repairs 📦',
    description: "Not on campus? No problem! We offer expert repairs to anyone in the United States. Get a free quote, a pre-paid shipping label, and fast turnaround.",
    link: '/mail-in-repair',
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-lightOrange-dark dark:bg-darkTeal-light">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-textDark dark:text-textLight">Our Repair Services 🛠️</h2>
            <p className="text-lg max-w-3xl mx-auto text-textSubtleDark dark:text-textSubtleLight">We specialize in fixing all your campus tech essentials quickly and affordably. Can&apos;t make it in person? We serve the entire nation via our mail-in program.</p>
          </div>
        </AnimationWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <Link href={service.link} passHref>
                <div className="service-card bg-white dark:bg-darkTeal h-full rounded-2xl p-8 shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentBlue hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-textDark dark:text-textLight">
                    {service.title}
                  </h3>
                  <p className="text-textSubtleDark dark:text-textSubtleLight mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-textDark dark:text-textLight">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-accentGreen mr-2 flex-shrink-0" size={16} />
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
          <div className="bg-white dark:bg-darkTeal rounded-2xl shadow-xl border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentBlue hover:scale-[1.01] p-8 md:p-12">
            <div className="md:flex md:items-center md:gap-12">
              <div className="flex-shrink-0 mb-8 md:mb-0 text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center">
                  {mailInService.icon}
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-textDark dark:text-textLight">
                  {mailInService.title}
                </h3>
                <p className="text-textSubtleDark dark:text-textSubtleLight mb-6 max-w-2xl mx-auto md:mx-0">
                  {mailInService.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-center md:text-right mt-6 md:mt-0">
                <Link href={mailInService.link} className="inline-block px-8 py-4 bg-accentBlue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-lg shadow-md hover:shadow-lg">
                  Get a Shipping Label <ArrowRight className="inline ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
};

export default Services;
