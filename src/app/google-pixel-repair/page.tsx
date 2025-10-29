import AnimationWrapper from "../AnimationWrapper";
import { Smartphone } from "lucide-react";

const GooglePixelRepairPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-solarized-dark3 dark:text-solarized-light">
              Google Pixel Repair in Pasadena
            </h1>
            <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8 max-w-3xl mx-auto">
              As a Google Pixel specialist in Pasadena, we handle all common issues for Pixel devices, from screen repairs and battery replacements to charging port issues. If you're near PCC or Caltech and have a broken screen or a battery that won't charge, we can help.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pixel Screen Repair */}
            <AnimationWrapper delay={0.1}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-blue bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Pixel Screen Repair
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Cracked or blacked-out screen? We use high-quality parts to restore your Pixel's vibrant display and touch functionality.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Pixel Battery Replacement */}
            <AnimationWrapper delay={0.2}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-green" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Pixel Battery Replacement
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  Is your Pixel dying too fast or shutting down unexpectedly? A new battery will bring back its all-day performance.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>

            {/* Charging Port Issues */}
            <AnimationWrapper delay={0.3}>
              <div className="service-card bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-solarized-violet bg-opacity-10 flex items-center justify-center mb-6">
                  <Smartphone className="text-3xl text-solarized-violet" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-solarized-dark3 dark:text-solarized-light">
                  Charging Port Issues
                </h3>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  If your Google Pixel isn't charging correctly, we can professionally clean, repair, or replace the USB-C port.
                </p>
                <a href="/contact" className="font-medium text-solarized-blue hover:underline">
                  Get a Quote →
                </a>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GooglePixelRepairPage;