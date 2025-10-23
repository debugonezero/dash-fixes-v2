import AnimationWrapper from "../AnimationWrapper";
import RepairRequestForm from "../components/RepairRequestForm";
import {
  FileSignature,
  PackageOpen,
  Microchip,
  Truck,
  ArrowRight,
} from "lucide-react";
import CallToAction from "../CallToAction";

const MailInRepairPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimationWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-solarized-dark3 dark:text-solarized-light">
              Expert Repair, <br />
              <span className="gradient-text">Wherever You Are.</span>
            </h2>
            <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8 max-w-3xl mx-auto">
              Mail your device to Dash Fixes for professional service. We ship from Pasadena, CA with 3-5 business day turnaround.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <CallToAction href="#repair-form" text="Start Your Repair" />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="start-repair"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
      >
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                The 4-Step Mail-In Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
                A clear and simple process to get your device repaired and
                returned to you safely. Typical turnaround: 3-5 business days.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Step 1 */}
            <AnimationWrapper delay={0.1}>
              <div className="w-20 h-20 mx-auto rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <FileSignature className="text-3xl text-solarized-blue" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-solarized-dark3 dark:text-solarized-light">
                1. Get a Quote
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                Fill out the form below with your device details and the issue
                you&apos;re facing. We&apos;ll email you a preliminary quote.
              </p>
            </AnimationWrapper>
            {/* Step 2 */}
            <AnimationWrapper delay={0.2}>
              <div className="w-20 h-20 mx-auto rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-4">
                <PackageOpen className="text-3xl text-solarized-green dark:text-solarized-green" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-solarized-dark3 dark:text-solarized-light">
                2. Ship It
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                We&apos;ll email you a pre-paid shipping label. Package your
                device securely and drop it off with the carrier.
              </p>
            </AnimationWrapper>
            {/* Step 3 */}
            <AnimationWrapper delay={0.3}>
              <div className="w-20 h-20 mx-auto rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-4">
                <Microchip className="text-3xl text-solarized-green dark:text-solarized-green" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-solarized-dark3 dark:text-solarized-light">
                3. We Repair
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                Once we receive it, we&apos;ll confirm the diagnosis, send a
                final quote for your approval, and then perform the repair.
              </p>
            </AnimationWrapper>
            {/* Step 4 */}
            <AnimationWrapper delay={0.4}>
              <div className="w-20 h-20 mx-auto rounded-full bg-solarized-magenta bg-opacity-10 flex items-center justify-center mb-4">
                <Truck className="text-3xl text-solarized-magenta dark:text-solarized-magenta" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-solarized-dark3 dark:text-solarized-light">
                4. We Return
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                After payment, we&apos;ll ship your device back to you, fully
                insured and with tracking information.
              </p>
            </AnimationWrapper>
          </div>
          <div className="text-center mt-16">
            <a
              href="#repair-form"
              className="px-8 py-4 bg-solarized-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-lg shadow-md hover:shadow-lg"
            >
              Get Started Now{" "}
              <ArrowRight className="inline ml-2" />
            </a>
          </div>
          <div id="repair-form" className="mt-12">
            <RepairRequestForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-solarized-dark">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Mail-in Repair FAQ
              </h2>
              <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
                Common questions about our mail-in repair service
              </p>
            </div>
          </AnimationWrapper>

          <div className="space-y-6">
            <AnimationWrapper delay={0.1}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  How long does the repair process take?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Typical turnaround is 3-5 business days from when we receive your device. This includes diagnosis, repair, and return shipping. We'll provide tracking information throughout the process.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What if my device can't be repaired?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  If your device is beyond repair, we'll contact you with options. You can choose to have it returned at no additional cost, or we can recycle it responsibly. No repair, no additional fees.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Is my data safe?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Absolutely. We use industry-standard data wiping methods to permanently destroy all personal information. Your privacy is our top priority, and we never access or retain your data.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.4}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What devices do you repair?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  We specialize in iPhones, Android phones, iPads, tablets, laptops, MacBooks, and gaming consoles. Common repairs include screen replacements, battery replacements, charging port fixes, and data recovery.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.5}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  How does the shipping work?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  After you submit your repair request and pay the $9.99 diagnostic fee, we'll email you a pre-paid shipping label with the closest FedEx, UPS, or USPS drop-off locations. Your device is fully insured during transit.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.6}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Where am I shipping my device?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Our secure P.O. Box is located in Pasadena, CA. The full shipping address will be on the pre-paid label we email to you after you get your quote.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.7}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What if I decline the final quote?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  If you choose not to proceed with the repair after receiving the final quote, we will securely ship your device back to you. A small diagnostic fee of $25 may apply to cover our technician's time and return shipping costs.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.8}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  How should I package my device?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  To ensure your device arrives safely, please use a sturdy box with at least 2 inches of padding (like bubble wrap) on all sides. Please do not include any accessories such as chargers, cables, or cases unless we specifically ask for them.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.9}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  How much does shipping cost?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  We offer simple, flat-rate round-trip shipping for just <strong>$9.99</strong>. This covers a pre-paid label to send your device to us and the insured return shipping back to you.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.6}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What if I need to cancel my repair?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  You can cancel at any time before we begin the repair. If your device hasn't been shipped yet, you'll receive a full refund of the diagnostic fee. Contact us at contact@dashfixes.com or (626) 622-0196.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.7}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Do you offer a warranty on repairs?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Yes! We offer a 90-day warranty on all repairs. If you experience any issues with the repair within 90 days, we'll fix it at no additional cost. This warranty covers parts and labor for the specific issue that was repaired.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.8}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What if my device is under warranty with the manufacturer?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  If your device is still under manufacturer warranty, we recommend using their service first. However, if you've already tried that or prefer our service, we can still help. Our repairs are performed by certified technicians and use high-quality parts.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.9}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Can I track my repair status?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Absolutely! Once your repair is confirmed, you'll receive a service number via email. You can use this number on our tracking page to check the status of your repair in real-time. We'll also send you email updates at each step of the process.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={1.0}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What payment methods do you accept?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  We accept all major credit cards (Visa, MasterCard, American Express, Discover) through our secure Stripe payment system. For the diagnostic fee, we also accept PayPal and Apple Pay. All payments are processed securely and your information is never stored on our servers.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MailInRepairPage;
