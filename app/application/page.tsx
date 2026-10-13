"use client";

import { useState } from "react";

export default function ApplicationPage() {
  const [agreed, setAgreed] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <main className="app-status-page">
      

      <header className="imm-header">
        <div className="imm-brand">
          <img
  src="images/hong.webp"
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
          <a href="/" className="imm-exit">Exit X</a>
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
            <div className="info-box">
              You may use this service to enquire the application status of
              applications relating to Hong Kong Visas (applicable to applications
              submitted on or after 27 December 2008), Verification of Eligibility
              for Permanent Identity Card, Request for Personal Data / Information
              of Immigration Department and Chinese Nationality (application status
              to be updated daily at 8 am).
            </div>

            <div className="announcement">
              <div className="announcement-title">
                Important Announcement
              </div>

              <div className="announcement-body">
                <p>
                  To facilitate the system update, this service will be temporarily
                  suspended during the following period(s):
                </p>

                <p>
                  03-10-2026 (Saturday) 2 pm to 03-10-2026 (Saturday) 7:30 pm
                </p>

                <p>
                  If you need assistance, you can call the Immigration e-Services
                  Technical Support Hotline at (852) 3128 8668 between 7 am and
                  11 pm (HK Time) daily.
                </p>
              </div>
            </div>

            <div className="printer-box">
              <div className="printer-heading">
                The following item may be required to print the enquiry result:
              </div>

              <div className="printer-row">
                <div className="printer-icon">▤</div>
                <strong>Printer</strong>
              </div>
            </div>

            <a href="/application/start" className="start-btn">
              Start
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
