"use client";

import { useState } from "react";
import { demoUsers } from "@/lib/demoUsers";

export default function HelperDetailsPage() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

 const handleContinue = () => {
  const reference = referenceNumber.trim().toUpperCase();
  const password = verificationCode.trim().toUpperCase();

  console.log("REFERENCE:", reference);
  console.log("PASSWORD:", password);
  console.log("USERS:", demoUsers);

  const user =
    demoUsers[reference as keyof typeof demoUsers];

  console.log("MATCHED USER:", user);

  if (user && user.password === password) {
    setError("");
   window.location.href = `/application/visa-results/${user.slug}`;
  } else {
    setError(
      "The application reference number or password is incorrect."
    );
  }
};
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
          <div className="imm-lang">
            繁&nbsp;&nbsp;&nbsp;簡
          </div>

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

            <div className="details-box">

              <div className="details-heading">
                ▣ &nbsp; Please enter the application reference number.
              </div>

              {/* REFERENCE NUMBER */}
              <div className="details-row">
                <label>
                  <span className="required">*</span>
                  Application Reference Number
                </label>

                <input
                  type="text"
                  className="details-input"
                  placeholder="XXXX-9999999-99"
                  value={referenceNumber}
                  onChange={(e) => {
                    setReferenceNumber(e.target.value);
                    setError("");
                  }}
                  autoComplete="off"
                />
              </div>

              {/* PASSWORD */}
              <div className="details-row">
                <label>
                  <span className="required">*</span>
                  Password
                </label>

                <input
                  type="text"
                  className="details-input"
                  placeholder="Enter demo verification code"
                  value={verificationCode}
                  onChange={(e) => {
                    setVerificationCode(e.target.value);
                    setError("");
                  }}
                  autoComplete="off"
                />
              </div>

            </div>

            {/* ERROR */}
            {error && (
              <div
                style={{
                  color: "#cc0000",
                  marginTop: "12px",
                  marginBottom: "5px",
                  fontSize: "15px",
                }}
              >
                {error}
              </div>
            )}

            {/* CONTINUE */}
            <button
              type="button"
              className="start-btn"
              onClick={handleContinue}
            >
              Continue
            </button>

          </section>
        </div>
      </div>

    </main>
  );
}