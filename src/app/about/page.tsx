import Testimonials from "../Testimonials";
import Link from "next/link";
import AnimationWrapper from "../AnimationWrapper";
import { Recycle, Handshake } from "lucide-react";

export const metadata = {
  title: "About Dash Fixes | Sustainable Tech Repair Experts",
  description: "Learn about Dash Fixes, your trusted campus tech repair experts. We provide sustainable, professional repair services for iPhones, MacBooks, and gaming consoles with a focus on reducing e-waste.",
  keywords: "about Dash Fixes, tech repair company, sustainable repairs, Pasadena tech repair, campus repair service, e-waste reduction",
  openGraph: {
    title: "About Dash Fixes | Sustainable Tech Repair Experts",
    description: "Learn about Dash Fixes, your trusted campus tech repair experts providing sustainable repair services for iPhones, MacBooks, and gaming consoles.",
    url: "https://www.dashfixes.com/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Dash Fixes | Sustainable Tech Repair Experts",
    description: "Learn about Dash Fixes, your trusted campus tech repair experts providing sustainable repair services.",
  },
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Our Philosophy
              </h1>
            </div>
          </AnimationWrapper>
          <div className="mt-12 space-y-12">
            <AnimationWrapper delay={0.1}>
              <h2 className="text-3xl font-heading font-bold mb-4 flex items-center text-solarized-dark3 dark:text-solarized-light">
                <Recycle className="text-solarized-green mr-4" size={24} />A Focus
                on Sustainability
              </h2>
              <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
                In a world of disposable technology, we believe in giving
                devices a second chance. Our work is driven by a commitment to
                reducing e-waste. By repairing and refurbishing electronics, we
                extend their life and keep valuable materials out of landfills.
                Our{" "}
                <Link
                  href="/donate"
                  className="text-solarized-blue hover:underline"
                >
                  donation program
                </Link>{" "}
                is a core part of this mission, allowing us to salvage essential
                parts and give old tech a new purpose.
              </p>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <h2 className="text-3xl font-heading font-bold mb-4 flex items-center text-solarized-dark3 dark:text-solarized-light">
                <Handshake className="text-solarized-blue mr-4" size={24} />
                Our Service Philosophy
              </h2>
              <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
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
