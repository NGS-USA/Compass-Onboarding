"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import Section6 from "@/components/sections/Section6";
import Section7 from "@/components/sections/Section7";
import Section8 from "@/components/sections/Section8";
import Section9 from "@/components/sections/Section9";

const sectionTitles = [
  "Practice Information",
  "Location Information",
  "Provider Information",
  "Patient Identification",
  "Scheduling Workflow",
  "Insurance & Billing",
  "Technical & EHR",
  "User Access & Roles",
  "Documents & Uploads",
];

const sectionSources = [
  "Office Manager / Practice Administrator",
  "Office Manager / Scheduling Staff",
  "Office Manager / Clinical Staff",
  "EHR SME / Office Manager / IT Support",
  "Scheduling Staff / Office Manager",
  "Billing Department / Billing Vendor",
  "Internal IT / MSP / EHR SME",
  "Office Manager / Practice Administrator",
  "Multiple Departments",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const progress = Math.round((completed.length / 9) * 100);

  const markComplete = () => {
    if (!completed.includes(current)) {
      setCompleted((prev) => [...prev, current]);
    }
    if (current < 8) {
      setCurrent(current + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleNavigate = (i: number) => {
    setCurrent(i);
  };

  const renderSection = () => {
    switch (current) {
      case 0: return <Section1 />;
      case 1: return <Section2 />;
      case 2: return <Section3 />;
      case 3: return <Section4 />;
      case 4: return <Section5 />;
      case 5: return <Section6 />;
      case 6: return <Section7 />;
      case 7: return <Section8 />;
      case 8: return <Section9 />;
      default: return null;
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopNav progress={100} />
        <div className="flex flex-1 items-center justify-center bg-compass-bg">
          <div className="bg-white border border-compass-border rounded-2xl p-12 max-w-md text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-compass-green text-3xl">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-compass-navy mb-2">
              Onboarding Submitted!
            </h2>
            <p className="text-sm text-compass-muted mb-6">
              Thank you for completing the Compass practice intake. The Integrated Allergy team will review your submission and reach out within 2 business days.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrent(0);
                setCompleted([]);
              }}
              className="text-sm text-compass-blue hover:underline"
            >
              Start a new submission
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav progress={progress} />
      <div className="flex flex-1">
        <Sidebar
          current={current}
          completed={completed}
          onNavigate={handleNavigate}
        />
        <main className="flex-1 p-8 max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-semibold text-compass-navy">
                {sectionTitles[current]}
              </h1>
              {completed.includes(current) && (
                <span className="text-xs bg-green-100 text-compass-green font-medium px-2 py-0.5 rounded-full">
                  Complete
                </span>
              )}
            </div>
            <p className="text-xs text-compass-muted">
              Source: {sectionSources[current]}
            </p>
          </div>

          <div className="bg-white border border-compass-border rounded-xl p-6">
            {renderSection()}

            <div className="flex justify-between items-center mt-8 pt-5 border-t border-compass-border">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="text-sm text-compass-muted hover:text-compass-navy disabled:opacity-30 transition-colors"
              >
                ← Previous
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-compass-muted">
                  {current + 1} of 9
                </span>
                <button
                  onClick={markComplete}
                  className="bg-compass-green text-white text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {current === 8
                    ? "Submit Onboarding ✓"
                    : completed.includes(current)
                    ? "Next Section →"
                    : "Mark Complete & Continue →"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-6 bg-compass-navy"
                    : completed.includes(i)
                    ? "w-1.5 bg-compass-green"
                    : "w-1.5 bg-compass-border"
                }`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}