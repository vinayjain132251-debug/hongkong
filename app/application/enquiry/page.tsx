"use client";

import { useState } from "react";

export default function EnquiryPage() {
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");

  return (
    <main className="app-status-page">

      <header className="imm-header">
        <div className="imm-brand">
          <img
            src="/images/hong.webp"
            alt="Department logo"
            className="imm-logo-img"
          />

          <div>
            <div className="imm-title">Immigration Department</div>
            <div className="imm-subtitle">
              The Government of the Hong Kong Special Administrative Region
            </div>
          </div>
        </div>

        <div className="imm-tools">
          <div className="imm-lang">繁&nbsp;&nbsp;&nbsp;簡</div>
          <a href="/" className="imm-exit">
            Exit X
          </a>
        </div>
      </header>

      <div className="imm-container">

        <div className="status-title">
          Application Status Enquiry
        </div>

        <div className="status-layout">

          <aside className="support-box">
            <span className="support-arrow">➜</span>
            Technical Support Hotline
          </aside>

          <section className="status-content">

            <div className="select-box">

              <div className="select-heading">
                ▣ &nbsp; Please select the type of application
              </div>

              <div className="select-body">

                <strong>Type of Application:</strong>

                <label className="application-option">
                  <span className="required">*</span>
                  <input
  type="radio"
  name="applicationType"
  value="foreign-helper"
  checked={selectedType === "foreign-helper"}
  onChange={() => {
    setSelectedType("foreign-helper");
    setError("");
  }}
/>
                  Application of Visa for Foreign Domestic Helper
                </label>

                <label className="application-option">
                  <span className="required">*</span>
                  <input
                    type="radio"
                    name="applicationType"
                    value="other-visa"
                  />
                  Application of Visa / Entry Permit under other Policies and
                  Schemes (except Foreign Domestic Helper)
                </label>

                <label className="application-option">
                  <span className="required">*</span>
                  <input
                    type="radio"
                    name="applicationType"
                    value="permanent-id"
                  />
                  Verification of Eligibility for Permanent Identity Card
                </label>

                <label className="application-option">
                  <span className="required">*</span>
                  <input
                    type="radio"
                    name="applicationType"
                    value="nationality"
                  />
                  Application relating to Chinese Nationality
                </label>

                <label className="application-option">
                  <span className="required">*</span>
                  <input
                    type="radio"
                    name="applicationType"
                    value="personal-data"
                  />
                  Application for Personal Data / Information of Immigration
                  Department
                </label>

              </div>
            </div>

            <div className="select-actions">

              <button
                type="button"
                className="start-btn"
                onClick={() => window.history.back()}
              >
                Back
              </button>

              <button
  type="button"
  className="start-btn"
  onClick={() => {
    if (selectedType === "foreign-helper") {
      window.location.href = "/application/helper";
    } else {
      setError(
        "This service is currently available only for Application of Visa for Foreign Domestic Helper."
      );
    }
  }}
>
  Continue
</button>
{error && (
  <div className="application-error">
    {error}
  </div>
)}

            </div>

          </section>

        </div>
      </div>

    </main>
  );
}