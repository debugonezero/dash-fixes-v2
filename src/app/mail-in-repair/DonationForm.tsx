"use client";
import { useState } from "react";

const DonationForm = () => {
  const [status, setStatus] = useState("");

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgvaqde", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus(
          "Thank you for your generosity! We've emailed your donation label.",
        );
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, "errors")) {
          setStatus(
            responseData["errors"]
              .map((error: { message: string }) => error["message"])
              .join(", "),
          );
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch {
      setStatus("Oops! There was a problem submitting your form.");
    }
  }

  return (
    <div data-aos="fade-left" data-aos-delay="100">
      <h3 className="text-2xl font-heading font-bold text-center mb-8">
        Request a Donation Label
      </h3>
      <form
        id="donation-form"
        onSubmit={handleFormSubmit}
        className="space-y-6 bg-white dark:bg-solarized-dark2 p-8 rounded-lg shadow-md"
      >
        <div>
          <label
            htmlFor="donor-name"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="donor-name"
            required
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          />
        </div>
        <div>
          <label
            htmlFor="donor-email"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="_replyto"
            id="donor-email"
            required
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          />
        </div>
        <div>
          <label
            htmlFor="device-description"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
          >
            What are you donating?
          </label>
          <textarea
            name="device-description"
            id="device-description"
            rows={3}
            required
            placeholder="e.g., 1x MacBook Pro 2015, 2x iPhone 8"
            className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-solarized-green text-white rounded-lg font-medium hover:bg-opacity-90 transition"
          >
            Email My Donation Label
          </button>
        </div>
      </form>
      {status && (
        <div
          id="donation-form-status"
          className={`mt-6 text-center font-medium ${status.startsWith("Oops") ? "text-solarized-red" : "text-solarized-green"}`}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default DonationForm;
