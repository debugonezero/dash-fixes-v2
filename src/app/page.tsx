import Hero from "./Hero";
import Process from "./Process";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Disclaimer from "./Disclaimer";
import Quality from "./Quality";
import FAQ from "./FAQ";
import AnimationWrapper from "./AnimationWrapper";
import CallToAction from "./CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <section id="mail-in-repair" className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2">
        <div className="max-w-4xl mx-auto text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Expert Repairs by Mail
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-solarized-dark3 dark:text-solarized-light3">
              Can&apos;t make it to our shop? No problem. We offer a secure and
              convenient mail-in repair service for customers nationwide. Get a
              free quote and shipping label today.
            </p>
            <CallToAction href="/mail-in-repair" text="Start a Mail-In Repair" />
          </AnimationWrapper>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Pricing />
      <Disclaimer />
      <Quality />
      <FAQ />
    </>
  );
}
