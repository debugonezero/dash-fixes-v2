import Testimonials from "../Testimonials";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-solarized-light">
              Our Repair Services
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-textSubtleDark dark:text-solarized-light3">
              We specialize in fixing all your campus tech essentials quickly
              and affordably.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                Phone Repairs 📱
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3">
                Broken screens, battery issues, water damage - we&apos;ve got
                you covered for all smartphone problems.
              </p>
              <Link
                href="/phone-repairs"
                className="font-medium text-accentBlue hover:underline dark:text-solarized-blue"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                Laptop Repairs 💻
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3">
                From hardware issues to software problems, we&apos;ll get your
                laptop running like new again.
              </p>
              <Link
                href="/laptop-repairs"
                className="font-medium text-accentBlue hover:underline dark:text-solarized-blue"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                Mail-in Repairs 📦
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3">
                Not on campus? No problem! Securely mail your device to us from
                anywhere in the country.
              </p>
              <Link
                href="/mail-in-repair"
                className="font-medium text-accentBlue hover:underline dark:text-solarized-blue"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-6 border border-solarized-light3 dark:border-solarized-dark3">
              <h3 className="text-lg font-heading font-bold mb-2 text-solarized-dark2 dark:text-solarized-light">
                Game Console Repairs 🎮
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3">
                From overheating PS5s to sticky controller buttons, we&apos;ll
                get you back in the game.
              </p>
              <Link
                href="/game-console-repairs"
                className="font-medium text-accentBlue hover:underline dark:text-solarized-blue"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default ServicesPage;
