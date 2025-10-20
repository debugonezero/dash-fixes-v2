import AnimationWrapper from './AnimationWrapper';
import { DollarSign, Star, Circle, Check, Info } from 'lucide-react';

const Quality = () => {
  return (
    <section id="quality" className="py-16 px-4 sm:px-6 lg:px-8 bg-lightOrange-dark">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Screen Quality Tiers 🛠️</h2>
            <p className="text-lg max-w-2xl mx-auto">We believe in giving you choices. You decide what&apos;s best for your device and your budget.</p>
          </div>
        </AnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Aftermarket Incell */}
          <AnimationWrapper delay={0.1}>
            <div className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accentMagenta bg-opacity-10 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-accentMagenta" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Aftermarket Incell</h3>
              <p className="text-textSubtleDark mb-4">The most budget-friendly option to get your device back up and running.</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start"><Check className="text-accentGreen mr-2 mt-1" size={16} /><strong>Best For:</strong> Data recovery, temporary fixes, or budget-conscious trade-ins.</li>
                <li className="flex items-start"><Info className="text-accentBlue mr-2 mt-1" size={16} /><strong>Keep in Mind:</strong> Colors and brightness may differ slightly from the original screen.</li>
              </ul>
            </div>
          </AnimationWrapper>
          
          {/* Aftermarket OLED */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-white rounded-xl p-8 shadow-md transition duration-300 border-t-4 border-accentBlue hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accentBlue bg-opacity-10 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-accentBlue" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Aftermarket OLED (Most Popular)</h3>
              <p className="text-textSubtleDark mb-4">The perfect balance of exceptional quality and great value, closely matching the original display.</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start"><Check className="text-accentGreen mr-2 mt-1" size={16} /><strong>Best For:</strong> Everyday use for customers who want a high-quality repair without the premium price of a genuine part.</li>
                <li className="flex items-start"><Info className="text-accentBlue mr-2 mt-1" size={16} /><strong>Keep in Mind:</strong> Offers a vibrant and reliable display that is nearly indistinguishable from the original.</li>
              </ul>
            </div>
          </AnimationWrapper>
          
          {/* Genuine */}
          <AnimationWrapper delay={0.3}>
            <div className="bg-white rounded-xl p-8 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accentGreen bg-opacity-10 flex items-center justify-center mb-6">
                <Circle className="w-8 h-8 text-accentGreen" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Genuine / Refurbished</h3>
              <p className="text-textSubtleDark mb-4">The highest quality available, restoring your device to its original factory state.</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start"><Check className="text-accentGreen mr-2 mt-1" size={16} /><strong>Best For:</strong> Customers who demand perfect color accuracy and original performance.</li>
                <li className="flex items-start"><Info className="text-accentBlue mr-2 mt-1" size={16} /><strong>Keep in Mind:</strong> This is the premium option. The Apple serialization message may still appear.</li>
              </ul>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Quality;