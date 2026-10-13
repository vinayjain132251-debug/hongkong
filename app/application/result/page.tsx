"use client";
export default function ResultPage() {
  return (
    <main className="app-status-page">

      {/* SAME HEADER */}
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

        {/* SAME HEADING */}
        <div className="status-title">
          Application Status Enquiry
        </div>

        <div className="status-layout">

          {/* SAME LEFT BUTTON */}
          <aside className="support-box">
            <span className="support-arrow">➜</span>
            Technical Support Hotline
          </aside>

          {/* RESULT CONTENT */}
          <section className="status-content">

            <div className="result-box">

              <div className="result-heading">
                ▣ &nbsp; Application Status
              </div>

              <div className="result-content">

            

<h2>
  Hi Sukh Singh, your Helper Visa has been approved.
</h2>

<p>
  This demonstration shows an approved Foreign Domestic Helper
  visa application result.
</p>

<p>
  Please refer to the official immigration service for the actual
  visa decision, validity period, visa conditions and further
  instructions.
</p>

<p>
  This demo result is not an official immigration record or proof
  of visa approval.
</p>

              </div>
            </div>

            <a
  href="/documents/sukh.pdf"
  download="sukh.pdf"
  className="start-btn"
>
  Download Visa
</a>

          </section>

        </div>
      </div>

    </main>
  );
}