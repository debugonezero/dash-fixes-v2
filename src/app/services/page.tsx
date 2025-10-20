import Testimonials from "../Testimonials";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Repair Services
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-textSubtleDark">
              We specialize in fixing all your campus tech essentials quickly
              and affordably.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card bg-lightOrange-dark rounded-xl p-8 shadow-md transition duration-300">
              <h3 className="text-xl font-heading font-bold mb-3">
                Phone Repairs 📱
              </h3>
              <p className="text-textSubtleDark mb-4">
                Broken screens, battery issues, water damage - we&apos;ve got
                you covered for all smartphone problems.
              </p>
              <Link
                href="/phone-repairs"
                className="font-medium text-accentBlue hover:underline"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-lightOrange-dark rounded-xl p-8 shadow-md transition duration-300">
              <h3 className="text-xl font-heading font-bold mb-3">
                Laptop Repairs 💻
              </h3>
              <p className="text-textSubtleDark mb-4">
                From hardware issues to software problems, we&apos;ll get your
                laptop running like new again.
              </p>
              <Link
                href="/laptop-repairs"
                className="font-medium text-accentBlue hover:underline"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-lightOrange-dark rounded-xl p-8 shadow-md transition duration-300">
              <h3 className="text-xl font-heading font-bold mb-3">
                Mail-in Repairs 📦
              </h3>
              <p className="text-textSubtleDark mb-4">
                Not on campus? No problem! Securely mail your device to us from
                anywhere in the country.
              </p>
              <Link
                href="/mail-in-repair"
                className="font-medium text-accentBlue hover:underline"
              >
                Learn More →
              </Link>
            </div>
            <div className="service-card bg-lightOrange-dark rounded-xl p-8 shadow-md transition duration-300">
              <h3 className="text-xl font-heading font-bold mb-3">
                Game Console Repairs 🎮
              </h3>
              <p className="text-textSubtleDark mb-4">
                From overheating PS5s to sticky controller buttons, we&apos;ll
                get you back in the game.
              </p>
              <Link
                href="/game-console-repairs"
                className="font-medium text-accentBlue hover:underline"
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
