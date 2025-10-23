"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ContactForm = () => {
  // const [state, handleSubmit] = useForm("xkgvaqde");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceType: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    deviceType: "",
    serviceType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "deviceType":
        if (!value) error = "Please select a device type";
        break;
      case "serviceType":
        if (!value) error = "Please select a service type";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key as keyof typeof formData]);
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fix the errors above");
      return;
    }
    setStatus("Sending...");
    const form = e.currentTarget;
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
        setFormData({
          name: "",
          email: "",
          deviceType: "",
          serviceType: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          deviceType: "",
          serviceType: "",
          message: "",
        });
        window.location.href = "/mail-in-thank-you";
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, "errors")) {
          setStatus(
            responseData.errors
              .map((error: { message: string }) => error.message)
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
    <div className="bg-white dark:bg-solarized-dark p-6 rounded-lg shadow-md">
      <form id="contact-form" className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
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
            className={`block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border focus:ring-solarized-blue focus:border-solarized-blue transition ${
              errors.name
                ? "border-solarized-red"
                : "border-solarized-light3 dark:border-solarized-dark3"
            }`}
          />
          {errors.name && (
            <p className="text-solarized-red text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
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
            className={`block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border focus:ring-solarized-blue focus:border-solarized-blue transition ${
              errors.email
                ? "border-solarized-red"
                : "border-solarized-light3 dark:border-solarized-dark3"
            }`}
          />
          {errors.email && (
            <p className="text-solarized-red text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="deviceType"
              className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
            >
              Device Type
            </label>
            <div className="relative">
              <select
                id="deviceType"
                name="device-type"
                required
                value={formData.deviceType}
                onChange={handleChange}
                className={`block w-full px-4 py-3 pr-10 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border focus:ring-solarized-blue focus:border-solarized-blue transition appearance-none ${
                  errors.deviceType
                    ? "border-solarized-red"
                    : "border-solarized-light3 dark:border-solarized-dark3"
                }`}
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
            {errors.deviceType && (
              <p className="text-solarized-red text-sm mt-1">
                {errors.deviceType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="serviceType"
              className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
            >
              Service Needed
            </label>
            <div className="relative">
              <select
                id="serviceType"
                name="service-type"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className={`block w-full px-4 py-3 pr-10 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border focus:ring-solarized-blue focus:border-solarized-blue transition appearance-none ${
                  errors.serviceType
                    ? "border-solarized-red"
                    : "border-solarized-light3 dark:border-solarized-dark3"
                }`}
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
            {errors.serviceType && (
              <p className="text-solarized-red text-sm mt-1">
                {errors.serviceType}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light3 mb-2"
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
            className={`block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark2 border focus:ring-solarized-blue focus:border-solarized-blue transition ${
              errors.message
                ? "border-solarized-red"
                : "border-solarized-light3 dark:border-solarized-dark3"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-solarized-red text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition"
        >
          Send Request
        </button>

        {status && (
          <div
            id="form-status"
            className={`mt-6 text-center font-medium ${
              status.startsWith("Oops")
                ? "text-solarized-red"
                : "text-solarized-green"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
