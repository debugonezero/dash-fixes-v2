"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceType: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget as HTMLFormElement;
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
        form.reset();
        window.location.href = "/mail-in-thank-you"; // Assuming a Next.js route
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
  };

  return (
    <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-textDark mb-2"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-textDark mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="_replyto"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="deviceType"
            className="block text-sm font-medium text-textDark mb-2"
          >
            Device Type
          </label>
          <select
            id="deviceType"
            name="device-type"
            required
            value={formData.deviceType}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"
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
        </div>
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-textDark mb-2"
          >
            Service Needed
          </label>
          <select
            id="serviceType"
            name="service-type"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"
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
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-textDark mb-2"
        >
          Describe the Issue
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide the model of your device (e.g., iPhone 14 Pro) and any other details about the problem."
          className="block w-full px-4 py-3 rounded-lg bg-lightOrange-dark border border-textSubtleDark focus:ring-accentBlue focus:border-accentBlue transition"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-accentBlue text-textLight rounded-lg font-medium text-center hover:bg-opacity-90 transition"
      >
        Send Request
      </button>
      {status && (
        <div
          id="form-status"
          className={`mt-6 text-center font-medium ${status.startsWith("Oops") ? "text-accentMagenta" : "text-accentGreen"}`}
        >
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
