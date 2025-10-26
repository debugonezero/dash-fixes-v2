import AnimationWrapper from "../AnimationWrapper";
import { CheckCircle, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <AnimationWrapper>
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-solarized-green mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Quote Request Received!
            </h1>
            <p className="text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8">
              Thank you for choosing Dash Fixes. We've received your repair request and will get back to you within 24 hours.
            </p>
          </div>
        </AnimationWrapper>

        <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-lg p-8 mb-8">
          <AnimationWrapper delay={0.2}>
            <h2 className="text-2xl font-heading font-bold mb-6 text-solarized-dark3 dark:text-solarized-light">
              What Happens Next?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <Mail className="w-12 h-12 text-solarized-blue mx-auto mb-3" />
                <h3 className="font-bold mb-2">We'll Email You</h3>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  Detailed quote with pricing and repair timeline
                </p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-solarized-orange mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  Usually within 24 hours during business days
                </p>
              </div>

              <div className="text-center">
                <Phone className="w-12 h-12 text-solarized-green mx-auto mb-3" />
                <h3 className="font-bold mb-2">Questions?</h3>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  Call us at (626) 622-0196 for immediate help
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        <AnimationWrapper delay={0.4}>
          <div className="bg-solarized-blue text-white rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Need Help Right Now?</h3>
            <p className="mb-4">
              For urgent repairs or questions, don't wait for email - call us directly!
            </p>
            <a
              href="tel:626-622-0196"
              className="inline-block bg-white text-solarized-blue px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              📞 Call (626) 622-0196
            </a>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-solarized-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition"
            >
              Return to Homepage
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 border border-solarized-blue text-solarized-blue rounded-lg font-medium hover:bg-solarized-blue hover:bg-opacity-10 transition"
            >
              View FAQ
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default ThankYouPage;