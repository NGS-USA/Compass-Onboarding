"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const progress = Math.round((completed.length / 9) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav progress={progress} />
      <div className="flex flex-1">
        <Sidebar
          current={current}
          completed={completed}
          onNavigate={setCurrent}
        />
        <main className="flex-1 p-8">
          <h1 className="text-xl font-semibold text-compass-navy mb-1">
            Practice Onboarding
          </h1>
          <p className="text-sm text-compass-muted mb-6">
            Complete all 9 sections to configure your Compass environment.
          </p>
          <div className="bg-white border border-compass-border rounded-xl p-6 text-compass-muted text-sm">
            Section {current + 1} content goes here.
          </div>
        </main>
      </div>
    </div>
  );
}