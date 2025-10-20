import Link from 'next/link';
import AnimationWrapper from './AnimationWrapper';
import { CheckCircle2, HelpCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-textDark">Affordable Repair Pricing</h2>
            <p className="text-lg max-w-2xl mx-auto text-textSubtleDark">Transparent pricing for common repairs. Get a custom quote for anything else!</p>
          </div>
        </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Repair Pricing */}
          <AnimationWrapper delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentMagenta hover:scale-[1.02] z-10 relative">
              <div className="absolute top-0 right-0 bg-accentMagenta text-white px-3 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-textDark">Phone Repairs</h3>
                <p className="text-textSubtleDark">Starting at</p>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-textDark">$49</span>
                  <span className="text-lg text-textSubtleDark ml-1">/repair</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-textDark">
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Screen replacement: $49+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Battery replacement: $49+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Back Glass repair: $79+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Data recovery: $99+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Water damage: $79+
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 bg-accentMagenta text-white text-center rounded-lg font-medium hover:bg-opacity-90 transition">
                Get Phone Help
              </Link>
            </div>
          </AnimationWrapper>
          
          {/* Laptop Repair Pricing */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentBlue hover:scale-[1.02]">
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-textDark">Laptop Repairs</h3>
                <p className="text-textSubtleDark">Starting at</p>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-textDark">$79</span>
                  <span className="text-lg text-textSubtleDark ml-1">/repair</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-textDark">
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Screen Replacement: $129+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  SSD Upgrade / Replacement: $99+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Data Recovery: $99+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Performance Optimization: $79+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Keyboard & DC Jack Repair: $89+
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 bg-accentBlue text-white text-center rounded-lg font-medium hover:bg-opacity-90 transition">
                Get Laptop Help
              </Link>
            </div>
          </AnimationWrapper>

          {/* Game Console Repair Pricing */}
          <AnimationWrapper delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentGreen hover:scale-[1.02]">
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-textDark">Game Console Repairs</h3>
                <p className="text-textSubtleDark">Starting at</p>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-textDark">$39</span>
                  <span className="text-lg text-textSubtleDark ml-1">/repair</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-textDark">
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  HDMI Port Repair: $99+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Internal Cleaning: $59+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Thermal Paste Replacement: $79+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Controller Repair: $39+
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Other Issues: Quote
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 bg-accentGreen text-white text-center rounded-lg font-medium hover:bg-opacity-90 transition">
                Get Console Help
              </Link>
            </div>
          </AnimationWrapper>

          {/* Other Devices Pricing */}
          <AnimationWrapper delay={0.5}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-accentMagenta hover:scale-[1.02]">
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-textDark">Other Devices?</h3>
                <p className="text-textSubtleDark">Smartwatches, Drones, etc.</p>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-textDark">Quote</span>
                  <span className="text-lg text-textSubtleDark ml-1">/repair</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-textDark">
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Custom Tablet Repairs
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Smartwatch Screen & Battery
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  Drone & Controller Fixes
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-accentGreen mr-2" />
                  And much more...
                </li>
                <li className="flex items-center">
                  <HelpCircle className="text-accentGreen mr-2" />
                  If it has a battery, ask us!
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 bg-accentMagenta text-white text-center rounded-lg font-medium hover:bg-opacity-90 transition">
                Request a Custom Quote
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
