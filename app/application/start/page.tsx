"use client";

import { useState } from "react";

export default function StartPage() {
  const [agreed, setAgreed] = useState(false);
  const [started, setStarted] = useState(false);

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

            <div className="copyright-box">

              <div className="copyright-title">
                Copyright Notice, Privacy Policy, Statement of Purpose and Disclaimer for GovHK
              </div>

              <div className="copyright-scroll">

                <strong>Copyright Notice</strong>

                <p>
                  By accessing GovHK (www.hongkongworkvisa.info) ("GovHK") or any of its webpages,
                  you unconditionally agree to the terms of this Copyright Notice
                  and as they may be modified and/or supplemented from time to time
                  by the Government without prior notice to you.
                </p>

                <strong>Scope of Copyright Ownership</strong>

                <p>
                  Unless otherwise indicated, the contents found on GovHK are
                  subject to copyright owned by the Government.
                </p>

                <strong>Non-text Contents on GovHK</strong>

                <p>
                  Prior written consent of the Government is required if you
                  intend to reproduce, distribute or otherwise use any non-text
                  contents including photographs, graphics, drawings, diagrams,
                  audio files and video files.
                </p>

              </div>
            </div>

            <div className="declaration">
              <strong>Declaration</strong>

              <label>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />

                <span>
                  I have read and agree to the above Copyright Notice, Privacy
                  Policy, Statement of Purpose and Disclaimer.
                </span>
              </label>
            </div>

            <button
  type="button"
  className="start-btn"
  disabled={!agreed}
  onClick={() => {
    if (agreed) {
      window.location.href = "/application/enquiry";
    }
  }}
>
  Start
</button>

          </section>
        </div>
      </div>
    </main>
  );
}