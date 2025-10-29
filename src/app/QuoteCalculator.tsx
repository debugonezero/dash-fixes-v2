"use client";

import { useState } from "react";
import AnimationWrapper from "./AnimationWrapper";

const QuoteCalculator = () => {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const devices = [
    { value: "iphone", label: "iPhone" },
    { value: "android", label: "Android Phone" },
    { value: "macbook", label: "MacBook" },
    { value: "laptop", label: "Windows/Linux Laptop" },
    { value: "console", label: "Gaming Console" },
  ];

  const issues = {
    iphone: [
      { value: "screen", label: "Screen Replacement", price: 150 },
      { value: "battery", label: "Battery Replacement", price: 80 },
      { value: "charging", label: "Charging Port", price: 100 },
      { value: "water", label: "Water Damage", price: 200 },
    ],
    android: [
      { value: "screen", label: "Screen Replacement", price: 120 },
      { value: "battery", label: "Battery Replacement", price: 60 },
      { value: "charging", label: "Charging Port", price: 90 },
      { value: "water", label: "Water Damage", price: 180 },
    ],
    macbook: [
      { value: "screen", label: "Screen Replacement", price: 300 },
      { value: "keyboard", label: "Keyboard Replacement", price: 200 },
      { value: "battery", label: "Battery Replacement", price: 150 },
      { value: "logic", label: "Logic Board Repair", price: 400 },
    ],
    laptop: [
      { value: "screen", label: "Screen Replacement", price: 250 },
      { value: "keyboard", label: "Keyboard Replacement", price: 150 },
      { value: "battery", label: "Battery Replacement", price: 120 },
      { value: "motherboard", label: "Motherboard Repair", price: 350 },
    ],
    console: [
      { value: "hdmi", label: "HDMI Port Repair", price: 80 },
      { value: "controller", label: "Controller Repair", price: 60 },
      { value: "cleaning", label: "Internal Cleaning", price: 50 },
      { value: "power", label: "Power Supply", price: 100 },
    ],
  };

  const calculateEstimate = () => {
    if (device && issue) {
      const deviceIssues = issues[device as keyof typeof issues];
      const selectedIssue = deviceIssues.find((i) => i.value === issue);
      setEstimate(selectedIssue ? selectedIssue.price : null);
    }
  };

  return (
    <AnimationWrapper>
      <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md">
        <h3 className="text-xl font-heading font-bold mb-4 text-solarized-dark2 dark:text-solarized-light">
          Quick Quote Calculator
        </h3>
        <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mb-6">
          Get an instant estimate for your repair. Actual prices may vary based on specific model and condition.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-solarized-dark2 dark:text-solarized-light mb-2">
              Select Device Type
            </label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="w-full p-3 border border-solarized-light3 dark:border-solarized-dark3 rounded-lg bg-solarized-light dark:bg-solarized-dark text-solarized-dark2 dark:text-solarized-light"
            >
              <option value="">Choose device...</option>
              {devices.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          {device && (
            <div>
              <label className="block text-sm font-medium text-solarized-dark2 dark:text-solarized-light mb-2">
                Select Issue
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full p-3 border border-solarized-light3 dark:border-solarized-dark3 rounded-lg bg-solarized-light dark:bg-solarized-dark text-solarized-dark2 dark:text-solarized-light"
              >
                <option value="">Choose issue...</option>
                {issues[device as keyof typeof issues].map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label} - ${i.price}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={calculateEstimate}
            disabled={!device || !issue}
            className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-semibold hover:bg-solarized-blue-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Estimate
          </button>
          {estimate !== null && (
            <div className="mt-4 p-4 bg-solarized-green bg-opacity-10 border border-solarized-green rounded-lg">
              <p className="text-lg font-semibold text-solarized-green">
                Estimated Cost: ${estimate}
              </p>
              <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mt-2">
                This is a rough estimate. Contact us for a precise quote based on your specific device.
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default QuoteCalculator;