import AnimationWrapper from "./AnimationWrapper";

const Disclaimer = () => {
  return (
    <section
      id="disclaimer"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimationWrapper>
          <div className="w-16 h-16 rounded-full bg-solarized-orange bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-solarized-light">
            An Important Note for iPhone Owners
          </h2>
          <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
            Starting with the iPhone 11, Apple has serialized major components
            like screens and batteries to the device&apos;s motherboard. This
            means that after a repair, even when using a Genuine Apple part,
            your phone may display a temporary notification in Settings saying
            it has an &quot;Unknown Part.&quot;{" "}
            <strong>
              This message is normal and does not affect the functionality of
              your device in any way.
            </strong>{" "}
            Your new part will perform perfectly. We believe in full
            transparency and want you to be aware of this standard industry-wide
            behavior.
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Disclaimer;
