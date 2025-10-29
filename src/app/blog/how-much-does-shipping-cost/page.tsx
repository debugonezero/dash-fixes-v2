import Link from "next/link";
import AnimationWrapper from "../../AnimationWrapper";
import { ArrowLeft, Calendar, User, Truck, Shield, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does Shipping Cost? | Dash Fixes",
  description: "Learn about our affordable $9.99 flat-rate shipping for device repairs. Pre-paid labels, insured shipping, and nationwide coverage explained.",
};

const BlogPost = () => {
  return (
    <section className="section-spacing bg-solarized-light2 dark:bg-solarized-dark2">
      <div className="max-w-4xl mx-auto">
        <AnimationWrapper>
          <nav className="mb-8 text-sm text-solarized-dark3 dark:text-solarized-light3">
            <Link href="/" className="hover:text-solarized-blue">Home</Link> &gt; <Link href="/blog" className="hover:text-solarized-blue">Blog</Link> &gt; How Much Does Shipping Cost
          </nav>
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-solarized-blue hover:text-solarized-blue-dark transition">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          <article>
            <header className="mb-8">
              <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{new Date('2024-10-30').toLocaleDateString()}</span>
                <User className="w-4 h-4 mr-1" />
                <span>Dash Fixes Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-solarized-dark2 dark:text-solarized-light">
                How Much Does Shipping Cost for Device Repairs?
              </h1>
              <p className="text-xl text-solarized-dark3 dark:text-solarized-light3">
                Everything you need to know about our affordable shipping rates and why we keep it simple.
              </p>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                When it comes to getting your device repaired, shipping costs shouldn't be a barrier. At Dash Fixes, we believe in transparent, affordable pricing that makes mail-in repairs accessible to everyone across the United States.
              </p>

              <h2>Our Simple Shipping Rate: $9.99 Flat</h2>
              <p>
                We charge a flat rate of <strong>$9.99</strong> for round-trip shipping. This covers both sending your device to us and returning it to you after the repair is complete. No hidden fees, no surprises—just one straightforward price.
              </p>

              <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-6 my-8 border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center mb-4">
                  <Truck className="w-6 h-6 text-solarized-blue mr-3" />
                  <h3 className="text-xl font-bold text-solarized-dark2 dark:text-solarized-light">What's Included</h3>
                </div>
                <ul className="space-y-2 text-solarized-dark3 dark:text-solarized-light3">
                  <li className="flex items-center">
                    <span className="text-solarized-green mr-2">✓</span>
                    Pre-paid shipping label to send your device to us
                  </li>
                  <li className="flex items-center">
                    <span className="text-solarized-green mr-2">✓</span>
                    Fully insured return shipping back to you
                  </li>
                  <li className="flex items-center">
                    <span className="text-solarized-green mr-2">✓</span>
                    Tracking information for both legs of the journey
                  </li>
                </ul>
              </div>

              <h2>Why We Use Pre-Paid Labels</h2>
              <p>
                After you request a quote and we provide a final estimate, we email you a pre-paid shipping label. This eliminates any upfront costs and ensures your device is shipped correctly the first time.
              </p>

              <p>
                The label includes our secure P.O. Box address in Pasadena, CA, and all necessary tracking information. Simply print the label, attach it to your packaged device, and drop it off at any UPS location.
              </p>

              <h2>Insurance and Security</h2>
              <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-6 my-8 border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-solarized-blue mr-3" />
                  <h3 className="text-xl font-bold text-solarized-dark2 dark:text-solarized-light">Your Device is Protected</h3>
                </div>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  All shipments are fully insured against loss or damage during transit. We use UPS for reliable, secure delivery with signature confirmation for added peace of mind.
                </p>
              </div>

              <h2>What If You Decline the Repair?</h2>
              <p>
                If you receive our final quote and decide not to proceed with the repair, we'll ship your device back to you. In this case, a small $25 diagnostic fee may apply to cover our technician's time and the return shipping costs.
              </p>

              <h2>Timeline and Tracking</h2>
              <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-6 my-8 border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-solarized-blue mr-3" />
                  <h3 className="text-xl font-bold text-solarized-dark2 dark:text-solarized-light">Typical Shipping Timeline</h3>
                </div>
                <ul className="space-y-2 text-solarized-dark3 dark:text-solarized-light3">
                  <li><strong>Day 1:</strong> You receive pre-paid label via email</li>
                  <li><strong>Day 2-3:</strong> Device arrives at our facility</li>
                  <li><strong>Day 3-7:</strong> Repair completed and shipped back</li>
                  <li><strong>Day 8-10:</strong> Device delivered to you</li>
                </ul>
              </div>

              <p>
                You'll receive tracking updates via email throughout the entire process, so you always know where your device is.
              </p>

              <h2>Nationwide Coverage</h2>
              <p>
                Our flat-rate shipping applies to all 50 states. Whether you're in California, New York, or anywhere in between, the $9.99 rate remains the same. No regional surcharges or distance-based pricing.
              </p>

              <h2>Get Started Today</h2>
              <p>
                Ready to get your device repaired? Our transparent shipping policy is just one way we make the process simple and stress-free. <Link href="/services" className="text-solarized-blue hover:underline">View our services</Link> or <Link href="/contact" className="text-solarized-blue hover:underline">contact us</Link> today to get started with your repair quote.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/mail-in-repair">
                  <button className="px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-semibold hover:bg-solarized-blue-dark transition">
                    Start Mail-in Repair
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 py-3 border border-solarized-blue text-solarized-blue rounded-lg font-semibold hover:bg-solarized-blue hover:bg-opacity-10 transition">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default BlogPost;