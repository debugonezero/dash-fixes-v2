import AnimationWrapper from './AnimationWrapper';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Affordable Repair Pricing
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
              Transparent pricing for common repairs. Get a custom quote for
              anything else!
            </p>
          </div>
        </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Repair Pricing */}
          <AnimationWrapper delay={0.1}>
            <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md border-t-4 border-solarized-red transform scale-105 z-10 relative">
            <div className="absolute top-0 right-0 bg-solarized-red text-solarized-light px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold mb-2">
                Phone Repairs
              </h3>
              <p>Starting at</p>
              <div className="flex items-end mt-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-lg ml-1">/repair</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Screen replacement: $49+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Battery replacement: $49+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Back Glass repair: $79+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Data recovery: $99+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Water damage: $79+
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 bg-solarized-red text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition">
              Get Phone Help
            </a>
            </div>
          </AnimationWrapper>

          {/* Laptop Repair Pricing */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md border-t-4 border-solarized-blue">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold mb-2">
                Laptop Repairs
              </h3>
              <p>Starting at</p>
              <div className="flex items-end mt-2">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-lg ml-1">/repair</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Screen Replacement: $129+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                SSD Upgrade / Replacement: $99+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Data Recovery: $99+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Performance Optimization: $79+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Keyboard & DC Jack Repair: $89+
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 bg-solarized-blue text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition">
              Get Laptop Help
            </a>
            </div>
          </AnimationWrapper>

          {/* Game Console Repair Pricing */}
          <AnimationWrapper delay={0.3}>
            <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md border-t-4 border-solarized-cyan">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold mb-2">
                Game Console Repairs
              </h3>
              <p>Starting at</p>
              <div className="flex items-end mt-2">
                <span className="text-4xl font-bold">$39</span>
                <span className="text-lg ml-1">/repair</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                HDMI Port Repair: $99+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Internal Cleaning: $59+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Thermal Paste Replacement: $79+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Controller Repair: $39+
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Other Issues: Quote
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 bg-solarized-cyan text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition">
              Get Console Help
            </a>
            </div>
          </AnimationWrapper>

          {/* Other Devices Pricing */}
          <AnimationWrapper delay={0.4}>
            <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md border-t-4 border-solarized-magenta">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold mb-2">
                Other Devices?
              </h3>
              <p>Smartwatches, Drones, etc.</p>
              <div className="flex items-end mt-2">
                <span className="text-4xl font-bold">Quote</span>
                <span className="text-lg ml-1">/repair</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Custom Tablet Repairs
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Smartwatch Screen & Battery
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                Drone & Controller Fixes
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-solarized-green mr-2"></i>
                And much more...
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-question-circle text-solarized-green mr-2"></i>
                If it has a battery, ask us!
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 bg-solarized-magenta text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition">
              Request a Custom Quote
            </a>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Pricing;