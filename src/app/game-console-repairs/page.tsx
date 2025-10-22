import Link from "next/link";
import Testimonials from "../Testimonials";
import { Plug, Fan, Gamepad, Disc3 } from "lucide-react";
import AnimationWrapper from "../AnimationWrapper";

const GameConsoleRepairsPage = () => {
  const consoleServices = [
    {
      icon: <Plug size={40} />,
      title: "HDMI Port Repair",
      description:
        "No signal to your TV? A broken HDMI port is a very common problem. We can professionally repair or replace the port on your PS5, Xbox, or other consoles.",
      link: "/contact",
    },
    {
      icon: <Fan size={40} />,
      title: "Overheating & Loud Fan",
      description:
        "Is your console shutting down unexpectedly or does it sound like a jet engine? It likely needs a deep internal cleaning and new thermal paste to restore its cooling performance.",
      link: "/contact",
    },
    {
      icon: <Gamepad size={40} />,
      title: "Controller Repair",
      description:
        "Don&apos;t let stick drift or broken buttons ruin your game. We can repair or replace the components in your controllers to get them working like new.",
      link: "/contact",
    },
    {
      icon: <Disc3 size={40} />,
      title: "Disc Drive Issues",
      description:
        "Is your console not reading or ejecting discs? We can diagnose and repair issues with the disc drive on PlayStation and Xbox consoles.",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-textLight">
                Nationwide Game Console Repair
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-textSubtleDark dark:text-textSubtleLight">
                From overheating PlayStation 5s to Xbox controller drift,
                we&apos;ll get you back in the game with our easy-to-use mail-in
                repair service.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consoleServices.map((service, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <div className="service-card bg-lightOrange-dark dark:bg-darkTeal-light p-8 rounded-lg shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4 text-accentMagenta">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-textDark dark:text-textLight mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-textSubtleDark dark:text-textSubtleLight font-sans text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <Link href={service.link} passHref>
                      <span className="font-medium text-accentBlue hover:underline cursor-pointer">
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

export default GameConsoleRepairsPage;
