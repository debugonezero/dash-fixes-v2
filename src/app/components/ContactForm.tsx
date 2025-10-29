"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-solarized-dark p-6 rounded-lg shadow-md text-center">
        <p className="text-solarized-green text-lg font-medium mb-4">Thanks for your submission!</p>
        <p className="text-solarized-dark3 dark:text-solarized-light3">We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-solarized-dark p-6 rounded-lg shadow-md">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
            placeholder="Tell us about your inquiry..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-solarized-blue hover:bg-solarized-blue/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}