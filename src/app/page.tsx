import Hero from "./Hero";
import Process from "./Process";
import ContactForm from "./ContactForm";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

import AnimationWrapper from "./AnimationWrapper";

const WhyGetAQuote = () => (
  <div className="pt-8 md:pt-0">
    <h3 className="text-2xl font-heading font-bold mb-4">Why Get a Quote?</h3>
    <ul className="space-y-4">
      <li className="flex items-start">
        <i className="fa-solid fa-check text-solarized-green mr-3 mt-1"></i>
        <div>
          <h4 className="font-bold">100% Free & No-Obligation</h4>
          <p className="text-solarized-dark3">
            Our quotes are always free. There&apos;s no commitment to proceed
            with a repair.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <i className="fa-solid fa-bolt text-solarized-green mr-3 mt-1"></i>
        <div>
          <h4 className="font-bold">Fast & Honest Responses</h4>
          <p className="text-solarized-dark3">
            We&apos;ll get back to you within a few business hours with a clear,
            transparent quote.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <i className="fa-solid fa-user-shield text-solarized-green mr-3 mt-1"></i>
        <div>
          <h4 className="font-bold">Expertise Guaranteed</h4>
          <p className="text-solarized-dark3">
            Your device will be handled by a passionate expert dedicated to
            quality work.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <i className="fa-solid fa-lock text-solarized-green mr-3 mt-1"></i>
        <div>
          <h4 className="font-bold">Your Privacy is Our Priority</h4>
          <p className="text-solarized-dark3">
            We respect your privacy and will never share your information with
            anyone.
          </p>
        </div>
      </li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Get Your Free Shipping Label 📬
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Fill out the form below to start your repair and receive your
                pre-paid shipping label via email.
              </p>
            </div>
          </AnimationWrapper>
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <WhyGetAQuote />
          </div>
          <div
            id="form-status"
            className="mt-6 text-center font-medium md:col-span-2"
          ></div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Pricing />
    </>
  );
}
