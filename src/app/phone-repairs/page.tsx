import Link from "next/link";
import Testimonials from "../Testimonials";
import AnimationWrapper from "../AnimationWrapper";
import { Smartphone } from "lucide-react";

const PhoneRepairsPage = () => {
  const phoneServices = [
    {
      title: "iPhone Screen Replacement",
      description:
        "Cracked or unresponsive screen? We offer high-quality screen replacements for all iPhone models to make your device look and function like new. It's our most common repair!",
      price: "$49+",
    },
    {
      title: "iPhone Battery Replacement",
      description:
        "If your iPhone doesn't hold a charge like it used to, a new battery can restore its longevity and performance. We'll have it swapped out in no time.",
      price: "$49+",
    },
    {
      title: "Back Glass Repair",
      description:
        "A broken back glass is a safety hazard. We use genuine parts to replace the housing, restoring your iPhone's structural integrity and sleek look.",
      price: "$79+",
    },
    {
      title: "Charging Port Repair",
      description:
        "Having trouble charging? A faulty lightning port is a common issue. We can clean, repair, or replace the port to get you powered up again.",
      price: "$59+",
    },
    {
      title: "Water Damage Treatment",
      description:
        "Accidents happen. If your iPhone took a swim, bring it to us immediately. We offer professional water damage cleaning and diagnostics to save your device.",
      price: "$79+",
    },
    {
      title: "Data Recovery",
      description:
        "Is your iPhone stuck on the Apple logo or not turning on at all? We may be able to help recover your precious photos, contacts, and files.",
      price: "$99+",
    },
  ];

  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Nationwide Phone Repair Service
              </h1>
              <p className="text-lg max-w-2xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
                From the latest models to older generations, we provide expert,
                affordable phone repairs via our simple mail-in service.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {phoneServices.map((service, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <div className="bg-solarized-light2 dark:bg-solarized-dark2 p-6 rounded-lg shadow-md dark:shadow-lg">
                  <Smartphone className="w-8 h-8 text-solarized-blue dark:text-solarized-cyan mb-4" />
                  <h3 className="text-xl font-bold font-heading text-solarized-dark3 dark:text-solarized-light mb-2">
                    {service.title}
                  </h3>
                  <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-solarized-blue dark:text-solarized-blue">
                      {service.price}
                    </p>
                    <Link
                      href="/contact"
                      className="px-4 py-2 bg-solarized-blue dark:bg-solarized-blue text-white dark:text-solarized-light rounded-lg font-medium hover:bg-opacity-90 transition"
                    >
                      Get a Quote →
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

export default PhoneRepairsPage;
