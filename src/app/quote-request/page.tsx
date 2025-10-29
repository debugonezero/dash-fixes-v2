"use client";

import { useState } from "react";
import AnimationWrapper from "../AnimationWrapper";
import { Smartphone, Laptop, Gamepad2, Mail, Phone } from "lucide-react";

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: '',
    quality: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const deviceTypes = [
    { value: 'iphone', label: 'iPhone', icon: Smartphone },
    { value: 'android', label: 'Android Phone', icon: Smartphone },
    { value: 'macbook', label: 'MacBook', icon: Laptop },
    { value: 'laptop', label: 'Windows/Linux Laptop', icon: Laptop },
    { value: 'console', label: 'Gaming Console', icon: Gamepad2 }
  ];

  const issues = {
    iphone: [
      'Screen Replacement',
      'Battery Replacement',
      'Charging Port Repair',
      'Water Damage',
      'Camera Repair',
      'Other'
    ],
    android: [
      'Screen Replacement',
      'Battery Replacement',
      'Charging Port Repair',
      'Water Damage',
      'Camera Repair',
      'Other'
    ],
    macbook: [
      'Screen Replacement',
      'Keyboard Replacement',
      'Battery Replacement',
      'Logic Board Repair',
      'Hard Drive Replacement',
      'Other'
    ],
    laptop: [
      'Screen Replacement',
      'Keyboard Replacement',
      'Battery Replacement',
      'Motherboard Repair',
      'Hard Drive Replacement',
      'Other'
    ],
    console: [
      'HDMI Port Repair',
      'Controller Repair',
      'Power Supply Replacement',
      'Disc Drive Repair',
      'Other'
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would send the quote request
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-solarized-light dark:bg-solarized-dark flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <AnimationWrapper>
            <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3 text-center">
              <div className="w-16 h-16 bg-solarized-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-solarized-green" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
                Quote Request Sent!
              </h1>
              <p className="text-lg text-solarized-dark3 dark:text-solarized-light3 mb-6">
                Thank you for your quote request. We'll review your device details and send you a detailed quote within 24 hours.
              </p>
              <p className="text-solarized-dark3 dark:text-solarized-light3">
                Check your email for confirmation and our response.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-solarized-light dark:bg-solarized-dark">
      <div className="max-w-4xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Request a Free Quote
            </h1>
            <p className="text-lg text-solarized-dark3 dark:text-solarized-light3 max-w-2xl mx-auto">
              Tell us about your device and the issue you're facing. We'll research current part prices and provide you with an accurate quote.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={0.1}>
          <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  placeholder="(626) 555-0123"
                />
              </div>

              {/* Device Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                    Device Type *
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    required
                    value={formData.deviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  >
                    <option value="">Select device type</option>
                    {deviceTypes.map(device => (
                      <option key={device.value} value={device.value}>
                        {device.label}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.deviceType && (
                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                      Issue Type *
                    </label>
                    <select
                      id="issue"
                      name="issue"
                      required
                      value={formData.issue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                    >
                      <option value="">Select issue type</option>
                      {issues[formData.deviceType as keyof typeof issues]?.map(issue => (
                        <option key={issue} value={issue}>
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Part Quality Selection */}
              {formData.deviceType && formData.issue && (
                <div>
                  <label className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-3">
                    Part Quality *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="quality"
                        value="economy"
                        required
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="p-4 border-2 border-solarized-light3 dark:border-solarized-dark3 rounded-lg cursor-pointer peer-checked:border-solarized-blue peer-checked:bg-solarized-blue/5 transition">
                        <div className="font-semibold text-solarized-dark3 dark:text-solarized-light mb-1">Economy</div>
                        <div className="text-sm text-solarized-dark3 dark:text-solarized-light3">Cost-effective parts, reliable performance</div>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="quality"
                        value="standard"
                        required
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="p-4 border-2 border-solarized-light3 dark:border-solarized-dark3 rounded-lg cursor-pointer peer-checked:border-solarized-blue peer-checked:bg-solarized-blue/5 transition">
                        <div className="font-semibold text-solarized-dark3 dark:text-solarized-light mb-1">Standard</div>
                        <div className="text-sm text-solarized-dark3 dark:text-solarized-light3">Quality parts with good durability</div>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="quality"
                        value="premium"
                        required
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="p-4 border-2 border-solarized-light3 dark:border-solarized-dark3 rounded-lg cursor-pointer peer-checked:border-solarized-blue peer-checked:bg-solarized-blue/5 transition">
                        <div className="font-semibold text-solarized-dark3 dark:text-solarized-light mb-1">Premium</div>
                        <div className="text-sm text-solarized-dark3 dark:text-solarized-light3">Top-tier parts, maximum reliability</div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  placeholder="Please describe the issue in detail. Include model number, symptoms, when it started, etc."
                />
              </div>

              <div className="bg-solarized-blue/5 border border-solarized-blue/20 rounded-lg p-4">
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3">
                  <strong>Note:</strong> This is just a quote request. No payment or shipping information needed yet. We'll research current part prices and provide you with an accurate estimate.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-solarized-light mr-2"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Request Free Quote
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={0.2}>
          <div className="mt-12 bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Need Help?
            </h3>
            <p className="text-solarized-dark3 dark:text-solarized-light3 mb-6">
              Have questions about the quote process? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:626-622-0196"
                className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                (626) 622-0196
              </a>
              <a
                href="mailto:contact@dashfixes.com"
                className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@dashfixes.com
              </a>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}