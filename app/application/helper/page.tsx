"use client";

import { useState } from "react";

export default function HelperPage() {
  const [helperType, setHelperType] = useState("");
  const [error, setError] = useState("");

  return (
    <main className="app-status-page">

      {/* HEADER */}
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
          <div className="imm-lang">
            繁&nbsp;&nbsp;&nbsp;簡
          </div>

          <a href="/" className="imm-exit">
            Exit X
          </a>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="imm-container">

        <div className="status-title">
          Application Status Enquiry
        </div>

        <div className="status-layout">

          {/* LEFT SIDE */}
          <aside className="support-box">
            <span className="support-arrow">➜</span>
            Technical Support Hotline
          </aside>

          {/* RIGHT SIDE */}
          <section className="status-content">

            <div className="select-box">

              <div className="select-heading">
                ▣ &nbsp; Please select the Type of Application you wish to enquire about
              </div>

              <div className="select-body">

                {/* FIRST OPTION */}
                <label className="application-option">
                  <span className="required">*</span>

                  <input
                    type="radio"
                    name="helperType"
                    value="same-employer"
                    checked={helperType === "same-employer"}
                    onChange={() => {
                      setHelperType("same-employer");
                      setError("");
                    }}
                  />

                  <span>
  Applications under Same Employer (Contract Renewal / Completion of Remaining
  Period of Current Contract / Deferral of Home Leave)
</span>
</label>

                {/* SECOND OPTION */}
                <label className="application-option">
                  <span className="required">*</span>

                  <input
                    type="radio"
                    name="helperType"
                    value="new-helper"
                    checked={helperType === "new-helper"}
                    onChange={() => {
                      setHelperType("new-helper");
                      setError("");
                    }}
                  />

                  <span>
  Entry Visa for New Foreign Domestic Helper/ Change of Employer/ Extension of
  Stay on Visitor Status
</span>
                </label>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="button-row">

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
  if (helperType === "new-helper") {
    window.location.href = "/application/helper-details";
  } else {
    setError(
      "Please select Entry Visa for New Foreign Domestic Helper / Change of Employer / Extension of Stay on Visitor Status to continue."
    );
  }
}}
              >
                Continue
              </button>

            </div>

            {/* ERROR */}
            {error && (
              <div className="application-error">
                {error}
              </div>
            )}

          </section>
        </div>
      </div>


    </main>
  );
}