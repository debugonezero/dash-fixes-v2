import AnimationWrapper from "../AnimationWrapper";
import { Shield, Lock, Eye, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dash Fixes",
  description: "Learn about how Dash Fixes protects your privacy and handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-solarized-dark min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg flex-grow flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimationWrapper>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 text-solarized-dark3 dark:text-solarized-light">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-solarized-dark3 dark:text-solarized-light3 mb-8">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Introduction */}
            <AnimationWrapper>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-solarized-blue" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    Our Commitment to Privacy
                  </h2>
                </div>
                <p className="text-solarized-dark3 dark:text-solarized-light3 leading-relaxed">
                  At Dash Fixes, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This privacy policy explains how we collect, use, and protect your data when you use our services.
                </p>
              </div>
            </AnimationWrapper>

            {/* Information We Collect */}
            <AnimationWrapper delay={0.1}>
              <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-8 h-8 text-solarized-green" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-solarized-dark3 dark:text-solarized-light mb-2">
                      Personal Information
                    </h3>
                    <p className="text-solarized-dark3 dark:text-solarized-light3">
                      When you request a repair or contact us, we may collect: your name, email address, phone number,
                      shipping address, and device information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-solarized-dark3 dark:text-solarized-light mb-2">
                      Payment Information
                    </h3>
                    <p className="text-solarized-dark3 dark:text-solarized-light3">
                      Payment information is processed securely through Stripe. We do not store your credit card details.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-solarized-dark3 dark:text-solarized-light mb-2">
                      Technical Information
                    </h3>
                    <p className="text-solarized-dark3 dark:text-solarized-light3">
                      We automatically collect basic technical information like your IP address, browser type, and
                      device information for security and service improvement purposes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* How We Use Your Information */}
            <AnimationWrapper delay={0.2}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="w-8 h-8 text-solarized-orange" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    How We Use Your Information
                  </h2>
                </div>
                <ul className="space-y-3 text-solarized-dark3 dark:text-solarized-light3">
                  <li className="flex items-start gap-3">
                    <span className="text-solarized-green mt-1">•</span>
                    <span>Process and fulfill your repair requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-solarized-green mt-1">•</span>
                    <span>Communicate with you about your service requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-solarized-green mt-1">•</span>
                    <span>Send shipping labels and tracking information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-solarized-green mt-1">•</span>
                    <span>Process secure payments through our payment processor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-solarized-green mt-1">•</span>
                    <span>Improve our services and website functionality</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            {/* Data Security */}
            <AnimationWrapper delay={0.3}>
              <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-solarized-blue" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    Data Security
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-solarized-dark3 dark:text-solarized-light3">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="space-y-3 text-solarized-dark3 dark:text-solarized-light3">
                    <li className="flex items-start gap-3">
                      <span className="text-solarized-green mt-1">🔒</span>
                      <span>All data is encrypted in transit and at rest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-solarized-green mt-1">🔒</span>
                      <span>Secure payment processing through Stripe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-solarized-green mt-1">🔒</span>
                      <span>Limited access to personal data on a need-to-know basis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-solarized-green mt-1">🔒</span>
                      <span>Regular security audits and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationWrapper>

            {/* Cookies */}
            <AnimationWrapper delay={0.4}>
              <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-solarized-magenta" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    Cookies and Tracking
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-solarized-dark3 dark:text-solarized-light3">
                    <strong>Essential Cookies Only:</strong> We use only essential cookies necessary for our website to function properly and to process your repair requests securely.
                  </p>
                  <p className="text-solarized-dark3 dark:text-solarized-light3">
                    <strong>No Tracking Cookies:</strong> We do not use analytics, advertising, or tracking cookies. We do not collect data for marketing purposes or share your information with third parties.
                  </p>
                  <p className="text-solarized-dark3 dark:text-solarized-light3">
                    <strong>Your Control:</strong> You can control cookie preferences through your browser settings, though disabling essential cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Contact Information */}
            <AnimationWrapper delay={0.5}>
              <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 border border-solarized-light3 dark:border-solarized-dark3 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Mail className="w-8 h-8 text-solarized-blue" />
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    Questions About Privacy?
                  </h2>
                </div>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-6">
                  If you have any questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <a
                    href="tel:626-622-0196"
                    className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
                  >
                    📞 (626) 622-0196
                  </a>
                  <a
                    href="mailto:contact@dashfixes.com"
                    className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
                  >
                    ✉️ contact@dashfixes.com
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}