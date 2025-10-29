import AnimationWrapper from "../AnimationWrapper";
import { Smartphone } from "lucide-react";

export const metadata = {
  title: "Samsung Galaxy Repair | Screen, Battery & Charging Port Repair | Dash Fixes",
  description: "Expert Samsung Galaxy repair services in Pasadena. Screen replacements, battery repairs, charging port fixes for Galaxy S, Note, and Fold models. Fast, affordable service.",
  keywords: "Samsung Galaxy repair, Galaxy screen repair, Galaxy battery replacement, charging port repair, Samsung repair Pasadena, PCC Samsung repair",
  openGraph: {
    title: "Samsung Galaxy Repair | Screen, Battery & Charging Port Repair",
    description: "Expert Samsung Galaxy repair services in Pasadena. Screen replacements, battery repairs, and charging port fixes for Galaxy S, Note, and Fold models.",
    url: "https://www.dashfixes.com/samsung-galaxy-repair",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Samsung Galaxy Repair | Screen, Battery & Charging Port Repair",
    description: "Expert Samsung Galaxy repair services in Pasadena for Galaxy S, Note, and Fold models.",
  },
};

const SamsungGalaxyRepairPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-solarized-dark3 dark:text-solarized-light">
              Samsung Galaxy Repair in Pasadena
            </h1>
            <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8 max-w-3xl mx-auto">
              We offer reliable, expert repairs for all Samsung Galaxy devices, including the S-series, Note, and Fold models. If you're in Pasadena and need a screen, battery, or charging port repair, Dash Fixes is here to help.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Galaxy Screen Replacement */}
            <AnimationWrapper delay={0.1}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Galaxy Screen Replacement
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  We replace cracked or damaged screens on all Galaxy models, specializing in the delicate replacement of AMOLED displays to restore your phone's brilliant color.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Galaxy Battery Replacement */}
            <AnimationWrapper delay={0.2}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-green" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Galaxy Battery Replacement
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Restore your Samsung Galaxy's battery life with a professional battery replacement service, ensuring it lasts you through the day.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Galaxy Charging Port Repair */}
            <AnimationWrapper delay={0.3}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-violet bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-violet" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Galaxy Charging Port Repair
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Fix charging issues with a fast repair or replacement of your Samsung's charging port, a common issue that we can resolve quickly.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SamsungGalaxyRepairPage;