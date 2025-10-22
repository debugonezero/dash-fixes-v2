import DonationForm from "./DonationForm";
import RepairForm from "./RepairForm";
import AnimationWrapper from "../AnimationWrapper";
import {
  FileSignature,
  PackageOpen,
  Microchip,
  Truck,
  ShieldHalf,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import CallToAction from "../CallToAction";

const MailInRepairPage = () => {
  return (
    <div className="bg-white dark:bg-darkTeal">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimationWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-textDark dark:text-textLight">
              Expert Repair, <br />
              <span className="gradient-text">Wherever You Are.</span> 📦
            </h2>
            <p className="text-lg md:text-xl text-textSubtleDark dark:text-textSubtleLight mb-8 max-w-3xl mx-auto">
              Mail your device to Dash Fixes for professional service, or donate
              your old electronics to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <CallToAction href="#start-repair" text="Start a Repair" />
              <CallToAction href="#donate-device" text="Donate a Device" />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="start-repair"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-lightOrange-dark dark:bg-darkTeal-light"
      >
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-textDark dark:text-textLight">
                The 4-Step Mail-In Process 📬
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-textSubtleDark dark:text-textSubtleLight">
                A clear and simple process to get your device repaired and
                returned to you safely.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Step 1 */}
            <AnimationWrapper delay={0.1}>
              <div className="w-20 h-20 mx-auto rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-4">
                <FileSignature className="text-3xl text-accentBlue" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-textDark dark:text-textLight">
                1. Get a Quote
              </h3>
              <p className="text-textSubtleDark dark:text-textSubtleLight">
                Fill out the form below with your device details and the issue
                you&apos;re facing. We&apos;ll email you a preliminary quote.
              </p>
            </AnimationWrapper>
            {/* Step 2 */}
            <AnimationWrapper delay={0.2}>
              <div className="w-20 h-20 mx-auto rounded-full bg-accentGreen bg-opacity-10 flex items-center justify-center mb-4">
                <PackageOpen className="text-3xl text-accentGreen" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-textDark dark:text-textLight">
                2. Ship It
              </h3>
              <p className="text-textSubtleDark dark:text-textSubtleLight">
                We&apos;ll email you a pre-paid shipping label. Package your
                device securely and drop it off with the carrier.
              </p>
            </AnimationWrapper>
            {/* Step 3 */}
            <AnimationWrapper delay={0.3}>
              <div className="w-20 h-20 mx-auto rounded-full bg-accentGreen bg-opacity-10 flex items-center justify-center mb-4">
                <Microchip className="text-3xl text-accentGreen" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-textDark dark:text-textLight">
                3. We Repair
              </h3>
              <p className="text-textSubtleDark dark:text-textSubtleLight">
                Once we receive it, we&apos;ll confirm the diagnosis, send a
                final quote for your approval, and then perform the repair.
              </p>
            </AnimationWrapper>
            {/* Step 4 */}
            <AnimationWrapper delay={0.4}>
              <div className="w-20 h-20 mx-auto rounded-full bg-accentMagenta bg-opacity-10 flex items-center justify-center mb-4">
                <Truck className="text-3xl text-accentMagenta" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-textDark dark:text-textLight">
                4. We Return
              </h3>
              <p className="text-textSubtleDark dark:text-textSubtleLight">
                After payment, we&apos;ll ship your device back to you, fully
                insured and with tracking information.
              </p>
            </AnimationWrapper>
          </div>
          <div className="text-center mt-16">
            <a
              href="#repair-form"
              className="px-8 py-4 bg-accentBlue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-lg shadow-md hover:shadow-lg"
            >
              Get Your Free Shipping Label{" "}
              <ArrowRight className="inline ml-2" />
            </a>
          </div>
          <div id="repair-form" className="mt-12">
            <RepairForm />
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="donate-device"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkTeal"
      >
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-textDark dark:text-textLight">
                Give Your Old Tech a New Purpose ♻️
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-textSubtleDark dark:text-textSubtleLight">
                Your donated devices provide essential parts for complex repairs
                and help reduce e-waste.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper>
              <div className="bg-lightOrange-dark dark:bg-darkTeal-light p-8 rounded-lg shadow-md border-t-4 border-accentBlue">
                <div className="w-16 h-16 rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-6">
                  <ShieldHalf className="text-3xl text-accentBlue" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-textDark dark:text-textLight">
                  Our Data Security Promise
                </h3>
                <p className="text-lg text-textSubtleDark dark:text-textSubtleLight">
                  Your privacy is our top priority. We professionally wipe all
                  data from every donated device using industry-standard
                  methods. We guarantee that your personal information will be
                  securely and permanently destroyed.
                </p>
              </div>
              <div className="mt-8 text-textDark dark:text-textLight">
                <h4 className="text-xl font-heading font-bold mb-3">
                  What we accept:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="text-accentGreen mr-2" size={16} />{" "}
                    Laptops (working or not)
                  </li>
                  <li className="flex items-center">
                    <Check className="text-accentGreen mr-2" size={16} />{" "}
                    Smartphones & Tablets
                  </li>
                  <li className="flex items-center">
                    <Check className="text-accentGreen mr-2" size={16} /> Game
                    Consoles & Handhelds
                  </li>
                  <li className="flex items-center">
                    <X className="text-accentMagenta mr-2" size={16} /> We do
                    not accept printers, TVs, or large appliances.
                  </li>
                </ul>
              </div>
            </AnimationWrapper>
            <DonationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MailInRepairPage;
