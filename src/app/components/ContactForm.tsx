"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgvaqde");

  if (state.succeeded) {
    return (
      <div className="bg-white dark:bg-solarized-dark p-6 rounded-lg shadow-md text-center">
        <p className="text-solarized-green text-lg font-medium mb-4">Thanks for your submission!</p>
        <p className="text-solarized-dark3 dark:text-solarized-light3">We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-solarized-dark p-6 rounded-lg shadow-md">
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
          <ValidationError prefix="Name" field="name" errors={state.errors} />
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
              Device Type
            </label>
            <div className="relative">
              <select
                id="deviceType"
                name="device-type"
                required
                className="block w-full px-4 py-3 pr-10 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition appearance-none"
              >
                <option value="" disabled>
                  Select your device
                </option>
                <option value="iPhone">iPhone</option>
                <option value="Google Pixel">Google Pixel</option>
                <option value="Samsung Galaxy">Samsung Galaxy</option>
                <option value="Tablet / iPad">Tablet / iPad</option>
                <option value="Laptop">Laptop</option>
                <option value="Game Console">Game Console</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-solarized-dark3 dark:text-solarized-light3" />
              </div>
            </div>
            <ValidationError prefix="Device Type" field="deviceType" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
              Service Needed
            </label>
            <div className="relative">
              <select
                id="serviceType"
                name="service-type"
                required
                className="block w-full px-4 py-3 pr-10 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition appearance-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Screen Repair">Screen Repair</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="Charging Port">Charging Port Issue</option>
                <option value="Data Recovery">Data Recovery</option>
                <option value="Water Damage">Water Damage</option>
                <option value="Diagnostics">Diagnostics / Not Sure</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-solarized-dark3 dark:text-solarized-light3" />
              </div>
            </div>
            <ValidationError prefix="Service Type" field="serviceType" errors={state.errors} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2">
            Describe the Issue
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Please provide the model of your device (e.g., iPhone 14 Pro) and any other details about the problem."
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Request"}
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}