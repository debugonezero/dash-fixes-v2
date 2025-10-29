import Link from "next/link";
import Testimonials from "../Testimonials";
import { BugOff, MemoryStick, Keyboard, HardDrive } from "lucide-react";
import AnimationWrapper from "../AnimationWrapper";

export const metadata = {
  title: "Laptop Repairs | MacBook & Windows Repair Services | Dash Fixes",
  description: "Professional laptop repair services for MacBooks and Windows computers. Hardware upgrades, virus removal, screen repairs, keyboard replacements, and more. Fast service in Pasadena.",
  keywords: "laptop repair, MacBook repair, Windows repair, hardware upgrade, virus removal, screen repair, keyboard repair, laptop repair Pasadena",
  openGraph: {
    title: "Laptop Repairs | MacBook & Windows Repair Services",
    description: "Professional laptop repair services for MacBooks and Windows computers. Hardware upgrades, virus removal, and component repairs.",
    url: "https://www.dashfixes.com/laptop-repairs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Laptop Repairs | MacBook & Windows Repair Services",
    description: "Professional laptop repair services for MacBooks and Windows computers in Pasadena.",
  },
};

const LaptopRepairsPage = () => {
  const laptopServices = [
    {
      icon: <BugOff size={40} />,
      title: "Virus & Malware Removal",
      description:
        "Is your computer running slow or showing strange pop-ups? We can perform a deep clean of your system to remove malicious software and restore performance.",
      link: "/contact",
    },
    {
      icon: <MemoryStick size={40} />,
      title: "Hardware Upgrades (SSD & RAM)",
      description:
        "Give your old laptop a massive speed boost. Upgrading from a traditional hard drive to a Solid State Drive (SSD) is the single best upgrade for performance.",
      link: "/contact",
    },
    {
      icon: <Keyboard size={40} />,
      title: "Keyboard & Screen Replacement",
      description:
        "We replace broken laptop screens and non-responsive or damaged keyboards for a wide variety of MacBook and Windows models.",
      link: "/contact",
    },
    {
      icon: <HardDrive size={40} />,
      title: "Data Recovery",
      description:
        "If your laptop has failed and you can&apos;t access your important files, don&apos;t panic. We offer data recovery services to retrieve your valuable information.",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Nationwide Laptop & MacBook Repair
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
                Whether you have a MacBook, Windows laptop, or Chromebook, we
                provide expert hardware and software repairs through our
                convenient mail-in service.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laptopServices.map((service, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <div className="service-card bg-lightOrange-dark dark:bg-darkTeal-light p-8 rounded-lg shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4 text-solarized-magenta">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                      {service.title}
                    </h3>
                    <p className="text-solarized-dark3 dark:text-solarized-light3">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <Link href={service.link}>
                      <span className="font-medium text-solarized-blue hover:underline cursor-pointer">
                        Get a Quote &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default LaptopRepairsPage;
