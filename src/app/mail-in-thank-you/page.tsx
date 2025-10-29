import Link from "next/link";
import AnimationWrapper from "../AnimationWrapper";
import { Send, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Thank You | Payment Received - Shipping Label Sent | Dash Fixes",
  description: "Thank you for your payment. Your shipping label has been emailed to you. Check your email for packaging instructions and tracking information.",
  keywords: "thank you, payment received, shipping label, mail-in repair confirmation, Dash Fixes shipping",
  openGraph: {
    title: "Thank You | Payment Received - Shipping Label Sent",
    description: "Thank you for your payment. Your shipping label has been emailed to you with packaging instructions.",
    url: "https://www.dashfixes.com/mail-in-thank-you",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thank You | Payment Received - Shipping Label Sent",
    description: "Thank you for your payment. Your shipping label has been emailed to you.",
  },
};

const ThankYouPage = () => {
  return (
    <section className="hero-bg flex-grow flex items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8">
      <AnimationWrapper>
        <div className="w-24 h-24 mx-auto rounded-full bg-solarized-green bg-opacity-10 flex items-center justify-center mb-6">
          <Send className="text-4xl text-solarized-green" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-2 max-w-2xl mx-auto">
          Your request has been received.
        </p>
        <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8 max-w-2xl mx-auto">
          Please check your email for your{" "}
          <strong>free pre-paid shipping label</strong> and packaging
          instructions. We will be in touch shortly to confirm your quote.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition"
        >
          &larr; Back to Homepage
        </Link>
        <div className="mt-12 pt-8 border-t border-solarized-light2 dark:border-solarized-dark2">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Find Your Nearest Drop-Off Location
          </h2>
          <p className="text-lg text-solarized-dark3 dark:text-solarized-light3 mb-6 max-w-2xl mx-auto">
            You can use the pre-paid label at any USPS or UPS location.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://tools.usps.com/find-location.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-solarized-blue text-solarized-blue rounded-lg font-medium text-center hover:bg-solarized-blue hover:bg-opacity-10 transition"
            >
              Find a USPS Location{" "}
              <ExternalLink className="inline ml-2 w-4 h-4" />
            </a>
            <a
              href="https://www.ups.com/dropoff/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-solarized-blue text-solarized-blue rounded-lg font-medium text-center hover:bg-solarized-blue hover:bg-opacity-10 transition"
            >
              Find a UPS Location{" "}
              <ExternalLink className="inline ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default ThankYouPage;
