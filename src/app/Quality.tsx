import AnimationWrapper from "./AnimationWrapper";

const Quality = () => {
  return (
    <section
      id="quality"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Screen Quality Tiers
            </h2>
            <p className="text-lg max-w-2xl mx-auto dark:text-solarized-light3">
              We believe in giving you choices. You decide what&apos;s best for
              your device and your budget.
            </p>
          </div>
        </AnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Aftermarket Incell */}
          <AnimationWrapper delay={0.1}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Aftermarket Incell
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Budget-friendly option for data recovery or temporary fixes.
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  <strong>Best For:</strong> Trade-ins, temporary use.
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-blue mr-2">❓</span>
                  <strong>Keep in Mind:</strong> Slight color differences.
                </li>
              </ul>
            </div>
          </AnimationWrapper>

          {/* Aftermarket OLED */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Aftermarket OLED
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  High-quality balance, closely matching original.
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  <strong>Best For:</strong> Everyday use, great value.
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-blue mr-2">❓</span>
                  <strong>Keep in Mind:</strong> Nearly indistinguishable.
                </li>
              </ul>
            </div>
          </AnimationWrapper>

          {/* Genuine */}
          <AnimationWrapper delay={0.3}>
            <div className="bg-solarized-light2 dark:bg-solarized-dark2 h-full rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <div className="w-12 h-12 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                  Genuine / Refurbished
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3">
                  Highest quality, original factory state.
                </p>
              </div>
              <ul className="space-y-1 text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <li className="flex items-center">
                  <span className="text-solarized-green mr-2">✅</span>
                  <strong>Best For:</strong> Perfect accuracy.
                </li>
                <li className="flex items-center">
                  <span className="text-solarized-blue mr-2">❓</span>
                  <strong>Keep in Mind:</strong> Premium, may show Apple
                  message.
                </li>
              </ul>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Quality;
