import AnimationWrapper from "../AnimationWrapper";
import { Smartphone } from "lucide-react";

const IPhoneRepairPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-solarized-dark3 dark:text-solarized-light">
              iPhone Repair in Pasadena
            </h1>
            <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8 max-w-3xl mx-auto">
              From the latest iPhone 15 Pro Max to older models, we provide expert, affordable iPhone repairs for the Pasadena, PCC, and Caltech communities. Whether you have a cracked screen, a battery that won't last, or water damage, we have the solution.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iPhone Screen Replacement */}
            <AnimationWrapper delay={0.1}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  iPhone Screen Replacement
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Cracked or unresponsive screen? We offer high-quality screen replacements for all iPhone models to make your device look and function like new. It's our most common repair!
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* iPhone Battery Replacement */}
            <AnimationWrapper delay={0.2}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-green" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  iPhone Battery Replacement
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  If your iPhone doesn't hold a charge like it used to, a new battery can restore its longevity and performance. We'll have it swapped out in no time.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Back Glass Repair */}
            <AnimationWrapper delay={0.3}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-violet bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-violet" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Back Glass Repair
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  A broken back glass is a safety hazard. We use genuine parts to replace the housing, restoring your iPhone's structural integrity and sleek look.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Charging Port Repair */}
            <AnimationWrapper delay={0.4}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-orange bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-orange" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Charging Port Repair
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Having trouble charging? A faulty lightning port is a common issue. We can clean, repair, or replace the port to get you powered up again.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Water Damage Treatment */}
            <AnimationWrapper delay={0.5}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-cyan bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Water Damage Treatment
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Accidents happen. If your iPhone took a swim, bring it to us immediately. We offer professional water damage cleaning and diagnostics to save your device.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Data Recovery */}
            <AnimationWrapper delay={0.6}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-magenta bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-magenta" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Data Recovery
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Is your iPhone stuck on the Apple logo or not turning on at all? We may be able to help recover your precious photos, contacts, and files.
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

export default IPhoneRepairPage;