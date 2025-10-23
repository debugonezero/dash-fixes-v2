'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimationWrapper from '@/app/AnimationWrapper';
import { Search, AlertCircle } from 'lucide-react';
import { isValidServiceNumber, normalizeServiceNumber } from '@/app/lib/service-number';

export default function TrackPage() {
  const [serviceNumber, setServiceNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const normalizedNumber = normalizeServiceNumber(serviceNumber);

    if (!isValidServiceNumber(normalizedNumber)) {
      setError('Please enter a valid 8-character service number (e.g., ABCD1234)');
      setIsLoading(false);
      return;
    }

    // Redirect to the tracking page
    router.push(`/track/${normalizedNumber}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    // Only allow valid characters
    const filtered = value.replace(/[^A-HJ-KMNP-Z2-9]/g, '');
    setServiceNumber(filtered);

    // Clear error when user starts typing
    if (error) setError('');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-solarized-light dark:bg-solarized-dark flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Track Your Repair
            </h1>
            <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
              Enter your 8-character service number to check the status of your repair
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={0.1}>
          <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="serviceNumber" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
                  Service Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="serviceNumber"
                    value={serviceNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., ABCD1234"
                    maxLength={8}
                    className="block w-full px-4 py-3 pr-12 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition text-center text-2xl font-mono tracking-wider"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="w-5 h-5 text-solarized-dark3 dark:text-solarized-light3" />
                  </div>
                </div>
                <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-2">
                  Your service number was provided in your confirmation email
                </p>
              </div>

              {error && (
                <div className="flex items-center p-4 bg-solarized-red/10 border border-solarized-red/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-solarized-red mr-3 flex-shrink-0" />
                  <p className="text-solarized-red text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || serviceNumber.length !== 8}
                className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-solarized-light mr-2"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track Repair
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={0.2}>
          <div className="mt-12 text-center">
            <h3 className="text-lg font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Need Help?
            </h3>
            <p className="text-solarized-dark3 dark:text-solarized-light3 mb-6">
              Cannot find your service number? Contact us and we will help you locate it.
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
    </section>
  );
}