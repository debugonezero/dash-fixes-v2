import { Phone, Mail } from "lucide-react";

const WhyGetAQuote = () => (
  <div className="pt-8 md:pt-0">
    <h3 className="text-2xl font-heading font-bold mb-4 dark:text-solarized-light">
      Why Get a Quote?
    </h3>
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-accentGreen mr-3">✅</span>
        <div>
          <h4 className="font-bold dark:text-solarized-light">
            100% Free & No-Obligation
          </h4>
          <p className="text-textSubtleDark dark:text-solarized-light3">
            Our quotes are always free. There&apos;s no commitment to proceed
            with a repair.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <span className="text-accentGreen mr-3">⚡</span>
        <div>
          <h4 className="font-bold dark:text-solarized-light">
            Fast & Honest Responses
          </h4>
          <p className="text-textSubtleDark dark:text-solarized-light3">
            We&apos;ll get back to you within a few business hours with a clear,
            transparent quote.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <span className="text-accentGreen mr-3">🛡️</span>
        <div>
          <h4 className="font-bold dark:text-solarized-light">
            Expertise Guaranteed
          </h4>
          <p className="text-textSubtleDark dark:text-solarized-light3">
            Your device will be handled by a passionate expert dedicated to
            quality work.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <span className="text-accentGreen mr-3">🔒</span>
        <div>
          <h4 className="font-bold dark:text-solarized-light">
            Your Privacy is Our Priority
          </h4>
          <p className="text-textSubtleDark dark:text-solarized-light3">
            We respect your privacy and will never share your information with
            anyone.
          </p>
        </div>
      </li>
    </ul>
  </div>
);

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      <section className="hero-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-solarized-light">
              Get a Free Quote
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-textSubtleDark dark:text-solarized-light3">
              Have a broken device? Fill out the form below, or give us a call!
            </p>
            <p className="text-center text-red-500 font-bold">
              TEST: Contact page loads successfully!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:626-622-0196"
                className="text-2xl font-heading font-bold inline-flex items-center hover:text-accentBlue transition text-textDark dark:text-solarized-light"
              >
                <Phone className="w-6 h-6 mr-3" />
                (626) 622-0196
              </a>
              <a
                href="mailto:web@dashfixes.com"
                className="text-2xl font-heading font-bold inline-flex items-center hover:text-accentBlue transition text-textDark dark:text-solarized-light"
              >
                <Mail className="w-6 h-6 mr-3" />
                web@dashfixes.com
              </a>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-start">
            {/* <ContactForm /> */}
            <WhyGetAQuote />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
