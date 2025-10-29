import AnimationWrapper from "./AnimationWrapper";
import CallToAction from "./CallToAction";
import Image from "next/image";

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
              href="/mail-in-repair"
              text="Start Mail-in Repair"
            />
            <CallToAction
              href="/services"
              text="Get a Free Quote"
            />
          </div>
          <p className="mt-4 text-sm text-solarized-dark3 dark:text-solarized-light3">
            ⚡ 3-5 business days turnaround • 📍 Ships from Pasadena, CA
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3">
              🛡️ Secure SSL
            </div>
            <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3">
              <span className="mr-2">📦</span>Insured Shipping
            </div>
            <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3">
              <span className="mr-2">🚚</span>Free Pre-paid Labels
            </div>
          </div>
        </AnimationWrapper>
        <AnimationWrapper delay={0.2}>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/graphics/hero-image-large.webp"
                alt="A successfully repaired laptop looking like new"
                className="w-full h-auto max-w-md mx-auto md:max-w-none"
                loading="eager"
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
