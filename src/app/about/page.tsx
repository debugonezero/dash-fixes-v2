import Testimonials from "../Testimonials";
import Link from "next/link";
import AnimationWrapper from "../AnimationWrapper";
import { Recycle, Handshake } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-solarized-light">
                Our Philosophy
              </h1>
            </div>
          </AnimationWrapper>
          <div className="mt-12 space-y-12">
            <AnimationWrapper delay={0.1}>
              <h2 className="text-3xl font-heading font-bold mb-4 flex items-center text-textDark dark:text-solarized-light">
                <Recycle className="text-accentGreen mr-4" size={24} />A Focus
                on Sustainability
              </h2>
              <p className="text-lg text-textSubtleDark dark:text-solarized-light3">
                In a world of disposable technology, we believe in giving
                devices a second chance. Our work is driven by a commitment to
                reducing e-waste. By repairing and refurbishing electronics, we
                extend their life and keep valuable materials out of landfills.
                Our{" "}
                <Link
                  href="/donate"
                  className="text-accentBlue hover:underline"
                >
                  donation program
                </Link>{" "}
                is a core part of this mission, allowing us to salvage essential
                parts and give old tech a new purpose.
              </p>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <h2 className="text-3xl font-heading font-bold mb-4 flex items-center text-textDark dark:text-solarized-light">
                <Handshake className="text-accentBlue mr-4" size={24} />
                Our Service Philosophy
              </h2>
              <p className="text-lg text-textSubtleDark dark:text-solarized-light3">
                We believe that expert repair should be clear, honest, and
                accessible. Our philosophy is built on two key principles:
                transparent pricing and open communication. You will always
                receive a clear, no-obligation quote before any work begins, and
                we keep you informed throughout the process. Our goal is not
                just to fix your device, but to provide a service experience
                that is straightforward and trustworthy from start to finish.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default AboutPage;
