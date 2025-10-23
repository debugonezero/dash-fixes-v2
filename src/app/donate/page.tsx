import DonationForm from "../mail-in-repair/DonationForm";
import AnimationWrapper from "../AnimationWrapper";
import { ShieldHalf, Check, X } from "lucide-react";

const DonatePage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Give Your Old Tech a New Purpose
              </h1>
              <p className="text-lg max-w-2xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
                Your donated devices provide essential parts for complex repairs
                and help reduce e-waste.
              </p>
            </div>
          </AnimationWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper delay={0.1}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 p-8 rounded-lg shadow-md dark:shadow-lg border-t-4 border-solarized-blue">
                <div className="w-16 h-16 rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-6">
                  <ShieldHalf className="text-3xl text-solarized-blue dark:text-solarized-blue" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                  Our Data Security Promise
                </h3>
                <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
                  Your privacy is our top priority. We professionally wipe all
                  data from every donated device using industry-standard
                  methods. We guarantee that your personal information will be
                  securely and permanently destroyed.
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  What we accept:
                </h4>
                <ul className="space-y-2 text-textSubtleDark dark:text-solarized-light3">
                  <li className="flex items-center">
                    <Check className="text-solarized-green mr-2" size={16} />{" "}
                    Laptops (working or not)
                  </li>
                  <li className="flex items-center">
                    <Check className="text-solarized-green mr-2" size={16} />{" "}
                    Smartphones & Tablets
                  </li>
                  <li className="flex items-center">
                    <Check className="text-solarized-green mr-2" size={16} /> Game
                    Consoles & Handhelds
                  </li>
                  <li className="flex items-center">
                    <X className="text-solarized-red mr-2" size={16} /> We do
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

export default DonatePage;
