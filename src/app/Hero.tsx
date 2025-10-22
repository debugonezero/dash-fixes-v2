import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimationWrapper delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 dark:text-solarized-light">
            Expert Tech Repair.
            <br />
            <span className="gradient-text">Shipped From Your Door.</span>
          </h1>
          <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8">
            Your device is essential. Our mail-in repair service makes getting
            it fixed simple. We&apos;ll send you a free, pre-paid shipping
            label. Just pack your device and drop it off. We handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <CallToAction
              href="/contact"
              text="Start Free Mail-in Repair Quote"
            />
          </div>
          <p className="mt-4 text-sm text-solarized-dark3 dark:text-solarized-light3">
            Get prepaid label & insured shipping
          </p>
          <div className="flex space-x-6 mt-6">
            <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3">
              🛡️ Secure SSL
            </div>
            <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3">
              📦 Insured Shipping
            </div>
          </div>
        </AnimationWrapper>
        <AnimationWrapper delay={0.2}>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/graphics/hero-image.jpg"
                alt="A successfully repaired laptop looking like new"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-solarized-yellow rounded-xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-solarized-blue rounded-full opacity-20"></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;
