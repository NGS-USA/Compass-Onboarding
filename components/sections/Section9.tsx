"use client";

import { useState } from "react";

const uploadFields = [
  { key: "roster", label: "Provider Roster", formats: ".xlsx, .csv, .pdf" },
  { key: "insurance", label: "Insurance Participation List", formats: ".xlsx, .csv, .pdf" },
  { key: "patients", label: "Patient Export Sample", formats: ".xlsx, .csv" },
  { key: "schedule", label: "Scheduling Export Sample", formats: ".xlsx, .csv" },
  { key: "intake", label: "Intake Forms", formats: ".pdf, .docx" },
  { key: "consent", label: "Consent Forms", formats: ".pdf, .docx" },
  { key: "fees", label: "Fee Schedule", formats: ".xlsx, .pdf" },
  { key: "branding", label: "Office Branding / Logo Files", formats: ".png, .svg, .pdf" },
  { key: "workflow", label: "Workflow Documentation", formats: ".pdf, .docx" },
  { key: "templates", label: "Existing Forms or Templates", formats: "Any format" },
];

export default function Section9() {
  const [uploaded, setUploaded] = useState<Record<string, string>>({});

  const handleFile = (key: string, file: File | null) => {
    if (file) {
      setUploaded((prev) => ({ ...prev, [key]: file.name }));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {uploadFields.map((field) => {
          const isDone = !!uploaded[field.key];
          return (
            <div key={field.key}>
              <label className="block text-xs font-medium text-compass-text mb-1">
                {field.label}
              </label>
              <label
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors ${
                  isDone
                    ? "border-compass-green bg-green-50"
                    : "border-compass-border hover:border-compass-blue hover:bg-blue-50"
                }`}
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFile(field.key, e.target.files?.[0] ?? null)}
                />
                {isDone ? (
                  <>
                    <span className="text-compass-green text-lg mb-1">✓</span>
                    <span className="text-xs text-compass-green font-medium text-center break-all">
                      {uploaded[field.key]}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-compass-muted text-2xl mb-1">↑</span>
                    <span className="text-xs font-medium text-compass-blue">Click to upload</span>
                    <span className="text-xs text-compass-muted mt-0.5">{field.formats}</span>
                  </>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}