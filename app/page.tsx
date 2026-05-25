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

  const progress = Math.round((completed.length / 9) * 100);

  const markComplete = () => {
    if (!completed.includes(current)) {
      setCompleted([...completed, current]);
    }
    if (current < 8) setCurrent(current + 1);
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

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav progress={progress} />
      <div className="flex flex-1">
        <Sidebar current={current} completed={completed} onNavigate={setCurrent} />
        <main className="flex-1 p-8 max-w-4xl">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-compass-navy mb-1">
              {sectionTitles[current]}
            </h1>
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
              <button
                onClick={markComplete}
                className="bg-compass-green text-white text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                {current === 8 ? "Submit Onboarding ✓" : "Mark Complete & Continue →"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}