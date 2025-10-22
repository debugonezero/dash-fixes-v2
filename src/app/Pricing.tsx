import AnimationWrapper from "./AnimationWrapper";

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
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Phone Repairs
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Starting at $49
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Screen replacement: $49+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Battery replacement: $49+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Back Glass repair: $79+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Data recovery: $99+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Water damage: $79+
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 bg-solarized-blue text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                Get Phone Help
              </a>
            </div>
          </AnimationWrapper>

          {/* Laptop Repair Pricing */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Laptop Repairs
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Starting at $79
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Screen Replacement: $129+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  SSD Upgrade / Replacement: $99+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Data Recovery: $99+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Performance Optimization: $79+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Keyboard & DC Jack Repair: $89+
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 bg-solarized-blue text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                Get Laptop Help
              </a>
            </div>
          </AnimationWrapper>

          {/* Game Console Repair Pricing */}
          <AnimationWrapper delay={0.3}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Game Console Repairs
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Starting at $39
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  HDMI Port Repair: $99+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Internal Cleaning: $59+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Thermal Paste Replacement: $79+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Controller Repair: $39+
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Other Issues: Quote
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 bg-solarized-blue text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                Get Console Help
              </a>
            </div>
          </AnimationWrapper>

          {/* Other Devices Pricing */}
          <AnimationWrapper delay={0.4}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Other Devices?
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Smartwatches, Drones, etc.
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Custom Tablet Repairs
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Smartwatch Screen & Battery
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  Drone & Controller Fixes
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  And much more...
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-blue mr-2">❓</span>
                  If it has a battery, ask us!
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-3 bg-solarized-blue text-solarized-light text-center rounded-lg font-medium hover:bg-opacity-90 transition"
              >
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
