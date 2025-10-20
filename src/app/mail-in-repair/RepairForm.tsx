"use client";
import { useState } from 'react';

const RepairForm = () => {
  const [status, setStatus] = useState('');

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgvaqde", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus("Thanks! We'll email your quote and shipping label shortly.");
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, 'errors')) {
          setStatus(responseData["errors"].map((error: { message: string }) => error["message"]).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch {
      setStatus("Oops! There was a problem submitting your form.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-16" data-aos="fade-up" data-aos-delay="500">
      <h3 className="text-2xl font-heading font-bold text-center mb-8">Start Your Repair Request</h3>
      <form id="repair-form" onSubmit={handleFormSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-textDark mb-2">Name</label>
          <input type="text" name="name" id="name" required className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-textDark mb-2">Email</label>
          <input type="email" name="_replyto" id="email" required className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition" />
        </div>
        <div>
          <label htmlFor="device" className="block text-sm font-medium text-textDark mb-2">Device (e.g., iPhone 14 Pro)</label>
          <input type="text" name="device" id="device" required className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition" />
        </div>
        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-textDark mb-2">Describe the Issue</label>
          <textarea name="issue" id="issue" rows={4} required className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full px-6 py-3 bg-accentBlue text-white rounded-lg font-medium text-center hover:bg-opacity-90 transition">
            Get My Free Quote
          </button>
        </div>
      </form>
      {status && <div id="repair-form-status" className={`mt-6 text-center font-medium ${status.startsWith('Oops') ? 'text-accentMagenta' : 'text-accentGreen'}`}>{status}</div>}
    </div>
  );
};

export default RepairForm;
