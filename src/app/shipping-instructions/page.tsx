export const runtime = 'edge';

import AnimationWrapper from '@/app/AnimationWrapper';
import { Package, Printer, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function ShippingInstructionsPage() {
  return (
    <div className="min-h-screen bg-solarized-light dark:bg-solarized-dark">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimationWrapper>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-solarized-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Ship Your Device for Repair
            </h1>
            <p className="text-lg text-solarized-dark3 dark:text-solarized-light3 max-w-2xl mx-auto">
              Thanks for your repair request! Here's how to ship your device to us.
            </p>
          </div>
        </AnimationWrapper>

        <div className="bg-white dark:bg-solarized-dark2 rounded-xl shadow-lg p-8 mb-8">
          <AnimationWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-solarized-dark2 dark:text-solarized-light">
                  Shipping Steps
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-solarized-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-solarized-dark2 dark:text-solarized-light">Prepare Your Device</h3>
                      <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-1">
                        Remove accessories and package securely
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ExternalLink className="w-6 h-6 text-solarized-blue mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-solarized-dark2 dark:text-solarized-light">Generate Label</h3>
                      <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-1">
                        Click the button below to create your shipping label
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Printer className="w-6 h-6 text-solarized-orange mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-solarized-dark2 dark:text-solarized-light">Print & Ship</h3>
                      <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-1">
                        Print the label and attach it to your package
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-solarized-purple mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-solarized-dark2 dark:text-solarized-light">Drop Off</h3>
                      <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-1">
                        Take to any USPS location or authorized drop-off
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address & Action */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-solarized-dark2 dark:text-solarized-light">
                  Ship To Address
                </h2>

                <div className="bg-solarized-light2 dark:bg-solarized-dark rounded-lg p-6 mb-6">
                  <div className="font-semibold text-solarized-dark2 dark:text-solarized-light mb-2">Dash Fixes</div>
                  <div className="text-solarized-dark3 dark:text-solarized-light3">
                    123 E Colorado Blvd<br />
                    Pasadena, CA 91101<br />
                    United States
                  </div>
                </div>

                <div className="bg-solarized-blue bg-opacity-10 border border-solarized-blue rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-solarized-blue mb-2">💡 Pro Tips</h3>
                  <ul className="text-sm text-solarized-dark3 dark:text-solarized-light3 space-y-1">
                    <li>• Use Priority Mail for faster delivery (2-3 days)</li>
                    <li>• Insure valuable devices for peace of mind</li>
                    <li>• Include a note with your contact info</li>
                  </ul>
                </div>

                <a
                  href="https://www.usps.com/ship/click-n-ship.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-solarized-blue text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-opacity-90 transition flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Generate Shipping Label on USPS
                </a>

                <p className="text-xs text-solarized-dark3 dark:text-solarized-light3 mt-3 text-center">
                  Opens USPS Click-N-Ship in a new tab
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* No Printer Section */}
        <AnimationWrapper delay={0.2}>
          <div className="bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8">
            <div className="text-center mb-6">
              <Printer className="w-12 h-12 text-solarized-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-solarized-dark2 dark:text-solarized-light">
                Don't Have a Printer?
              </h3>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mt-2">
                No problem! Here are several options to get your label printed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-solarized-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-solarized-dark2 dark:text-solarized-light mb-2">USPS Post Office</h4>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  Take your device and label PDF to any USPS location. They'll print and apply for free.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-solarized-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-solarized-dark2 dark:text-solarized-light mb-2">Print Shops</h4>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  FedEx Office, UPS Store, Staples (usually $1-2)
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-solarized-purple rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-solarized-dark2 dark:text-solarized-light mb-2">Grocery Stores</h4>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  Many Walgreens, CVS, Walmart have printing kiosks
                </p>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        {/* Contact Info */}
        <AnimationWrapper delay={0.3}>
          <div className="text-center mt-8">
            <div className="bg-solarized-yellow bg-opacity-10 border border-solarized-yellow rounded-lg p-4 inline-block">
              <p className="text-solarized-dark2 dark:text-solarized-light font-semibold">
                Questions? Contact us at (626) 622-0196 or reply to your confirmation email
              </p>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
}