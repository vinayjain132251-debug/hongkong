"use client";

import { useEffect, useState } from "react";

const sideMenu = [
  "Identity Cards and Right of Abode",
  "HKSAR Travel Documents",
  "Births, Deaths and Marriage Registration",
  "Services for Non-permanent Residents",
  "Immigration Control",
  "Assistance Outside Hong Kong",
  "Chinese Nationality",
  "Application for Personal Data / Information of Immigration Department",
];

const sections = [
  "Foreign Domestic Helpers Section",
  "Quality Migrants and Mainland Residents Section",
  "Employment and Visit Visas Section",
  "Extension Section",
  "Other Visas and Permits Section",
  "Certificate of Entitlement Section (only applicable to applications relating to Admission Scheme for the Second Generation of Chinese Hong Kong Permanent Residents)",
  "Admission of Labour Section",
  "Top Talent Pass Scheme Unit",
];

const related = [
  "Book Appointment to Apply for Hong Kong Smart Identity Card",
  "Book Appointment to Apply for Travel Documents",
  "Book Appointment for Giving of Notice of Intended Marriage",
  "Apply for HKSAR Passport",
  "Apply for Search / Certified Copy of Birth / Death / Marriage Record",
  "More  >",
];

const Search = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#c84b00" strokeWidth="4" strokeLinecap="round">
    <circle cx="12" cy="12" r="8.5" />
    <line x1="18.5" y1="18.5" x2="27" y2="27" />
  </svg>
);

const Globe = () => (
  <svg width="38" height="40" viewBox="0 0 38 40" aria-hidden="true">
    <circle cx="16" cy="24" r="14.5" fill="#c84b00" />
    <path d="M6 19c2-3 5-4 7-3 1 1 0 3 2 3s2-3 4-3 4 2 3 4-3 2-3 4 2 3 1 5-3 2-4 0-1-4-3-5-3-1-4-3-1-2-1-2zM22 28c2 0 4 1 4 3s-2 3-3 2-2-3-1-5z" fill="#fff" />
    <path d="M28.500 1.500a6.500 6.500 0 0 1 6.500 6.500c0 4.500-6.500 11-6.500 11S22 12.500 22 8a6.500 6.500 0 0 1 6.500-6.500z" fill="#c84b00" />
    <circle cx="28.500" cy="8" r="3" fill="#fff" />
  </svg>
);

const Social = () => (
  <>
    <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#3b5998" /><path d="M16.5 24v-9h3l.5-3.5h-3.5V9.3c0-1 .3-1.7 1.8-1.7H20V4.4C19.600 4.400 18.600 4.300 17.400 4.300c-2.600 0-4.400 1.600-4.400 4.500v2.700H10V15h3v9z" fill="#fff" /></svg>
    <svg width="26" height="22" viewBox="0 0 24 20"><path d="M24 2.400a10 10 0 0 1-2.800.8A5 5 0 0 0 23.300.5a10 10 0 0 1-3.100 1.200 4.900 4.900 0 0 0-8.400 4.500A14 14 0 0 1 1.700 1 4.900 4.900 0 0 0 3.200 7.600 4.900 4.900 0 0 1 1 7v.1a4.900 4.900 0 0 0 3.900 4.800 5 5 0 0 1-2.200.1 4.900 4.900 0 0 0 4.600 3.400A9.900 9.900 0 0 1 0 17.400 14 14 0 0 0 7.500 19.600c9 0 14-7.500 14-14v-.6A10 10 0 0 0 24 2.400z" fill="#2aa9e0" /></svg>
    <svg width="26" height="24" viewBox="0 0 26 24"><ellipse cx="12" cy="14" rx="10" ry="8" fill="none" stroke="#e6162d" strokeWidth="3" /><circle cx="11" cy="14" r="3.500" fill="#e6162d" /><path d="M17 4c4-1 8 1 7 6" stroke="#f5a100" strokeWidth="2.500" fill="none" strokeLinecap="round" /></svg>
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#25d366" /><path d="M6 18l1-3.500A6 6 0 1 1 9.500 17z" fill="none" stroke="#fff" strokeWidth="1.800" /></svg>
    <svg width="26" height="24" viewBox="0 0 26 24"><rect width="26" height="22" rx="8" fill="#06c755" /><text x="13" y="15" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">LINE</text></svg>
    <svg width="26" height="24" viewBox="0 0 26 24"><rect width="26" height="24" rx="4" fill="#09b83e" /><ellipse cx="10" cy="10" rx="6" ry="5" fill="#fff" /><ellipse cx="17" cy="14.500" rx="5" ry="4" fill="#fff" stroke="#09b83e" strokeWidth="1" /></svg>
  </>
);

const Arrow = () => (
  <svg width="16" height="26" viewBox="0 0 16 26" fill="none" stroke="#fff" strokeWidth="3"><path d="M3 2l10 11L3 24" /></svg>
);

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* HEADER */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap">
          <div className="top-tools">
            <span>Text Size</span>
            <span className="sep" />
            <span className="lang">繁</span>
            <span className="lang">简</span>
            <span>Other languages</span>
            <span className="caret" />
          </div>
          <a href="#" className="logo" aria-label="GovHK 香港政府一站通">
            <span className="gov">Gov</span>
            <span className="hk">HK</span>
            <span className="cn1">香港政府</span>
            <span className="cn2">一站通</span>
          </a>
          <nav className="nav">
            <a href="#" className="active">Residents</a>
            <a href="#">Business &amp; Trade</a>
            <a href="#">Non-Residents</a>
            <a href="#" aria-label="Search"><Search /></a>
          </nav>
        </div>
      </header>

      <div className="wrap">
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <a href="#">Home</a><span className="gt">&gt;</span>
          <a href="#">Residents</a><span className="gt">&gt;</span>
          <a href="#">Immigration Services</a><span className="gt">&gt;</span>
          <a href="#">Services for Non-permanent Residents</a><span className="gt">&gt;</span>
          <span>Online Application Status Enquiry</span>
        </div>

        <div className="layout">
          {/* SIDEBAR */}
          <aside className="side">
            <ul className="menu">
              {sideMenu.map((m) => (
                <li key={m} className={m.startsWith("Services for") ? "active" : ""}>{m}</li>
              ))}
            </ul>
            <div className="carousel">
  <div className="img travel-alert">
    <img
      src="/images/travel-alert.png"
      alt="Outbound Travel Alert"
    />
  </div>
              <div className="ctrl">
                <span>❚❚</span><span>‹</span>
                <span className="bar on" /><span className="bar" /><span className="bar" /><span className="bar" />
                <span>›</span>
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main className="main">
            <h1>Online Application Status Enquiry <Globe /></h1>
            <div className="share"><span>Share:</span><Social /></div>

            <div className="card">
              <p>
                If you have submitted an application related to a visa/entry permit (including applications for an entry visa/permit, extension of stay or change of status, etc.), verification of eligibility for permanent identity card, Request for Personal Data / Information of Immigration Department or Chinese nationality to the Immigration Department, you can enquire online about the status of that application. This page will tell you who can use the service, how to use it and how to obtain further information.
              </p>

              <h2>Who Can Use This Service</h2>
              <p style={{ marginBottom: 28 }}>You can use the service to enquire about the status of applications related to visas/entry permits submitted to the:</p>
              <ul>
                {sections.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <p style={{ marginTop: 26 }}>
                The service can also be used if you have submitted an application related to Verification of Eligibility for Permanent Identity Card (Right of Abode Section), Request for Personal Data / Information of Immigration Department or Chinese nationality.
              </p>

              <h2>How to Make an Enquiry Online</h2>
              <p>
                You can access the service through the link below. When you have done so, you will need to enter the application reference number and your date of birth. If the information matches the Immigration Department’s records, the application status will be shown.
              </p>
              <p>
                If your application has been closed or finalised for 1 month, the record will be purged from the system and you will not be able to enquire about its status.
              </p>
              <a href="/application" className="btn">Online application status enquiry <Arrow /></a>

              <p>
                The application status enquiry service is also available on “iAM Smart” for applications related to a visa / entry permit, verification of eligibility for permanent identity card or Chinese nationality submitted on or after 1 January 2026. By registering for an “iAM Smart” account and providing user authorisation, you can view the application status under “Status” of the “Personal Assistant” page.
              </p>
              <p>
                Please click <a href="#" className="link-red">here</a> for details on using “Personal Assistant” of “iAM Smart” and how to provide user authorisation.
              </p>

              <h2>Enquiries by Phone</h2>
              <p>
                Apart from using the online service, you can enquire about the status of your application through the 24-hour telephone enquiry system at (852) 3160 8663.
              </p>

              <h2>Assistance and Further Information</h2>
              <p>
                If you need technical assistance in using the online service, you can call the Immigration e-Services Hotline at (852) 3128 8668 between 7 am and 11 pm daily.
              </p>
              <p style={{ fontSize: 16, lineHeight: "26px", marginBottom: 0 }}>
                For general enquiries, please call (852) 2824 6111 during office hours (from 8:45 am to 5:15 pm, Monday to Friday, from 9 am to 12 noon on Saturday, except public holidays), send a fax to (852) 2877 7711 or send an email to{" "}
                <a href="mailto:enquiry@immd.gov.hk" className="link-red">enquiry@immd.gov.hk</a>.
              </p>
            </div>
          </main>
        </div>

        <div className="helpful">
          <div className="box">
            Found this page helpful?

            <span className="radio" />

            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#fff" stroke="#3aaa35" strokeWidth="2.5" />
              <path
                d="M9 13q3-3 6 0M17 13q3-3 6 0M9 19q7 7 14 0"
                stroke="#3aaa35"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <span className="radio" style={{ marginLeft: 14 }} />

            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#fff" stroke="#f5a100" strokeWidth="2.5" />
              <path
                d="M9 13h5M18 13h5M10 21h12"
                stroke="#f5a100"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>

            <span className="radio" style={{ marginLeft: 14 }} />

            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#fff" stroke="#e6162d" strokeWidth="2.5" />
              <path
                d="M9 12l5 2M23 12l-5 2M10 23q6-6 12 0"
                stroke="#e6162d"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="rev">
            Last revision date: October 2026
          </div>
        </div>

        <hr className="div" />

        {/* RELATED LINKS */}
        <section className="related">
          <div className="tabs">
            <div className="tab">
              <span>Related Links</span>
              <svg width="18" height="26" viewBox="0 0 18 26" fill="none" stroke="#999" strokeWidth="3"><path d="M3 3l11 10L3 23" /></svg>
            </div>
            <div className="tab on"><span>Top Online Services</span></div>
          </div>
          <ul>
            {related.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <a href="#top" className="backtop">
            Back To Top
            <svg width="16" height="22" viewBox="0 0 16 22" fill="#888"><path d="M8 0l8 9h-5v13H5V9H0z" /></svg>
          </a>
          <div className="flinks">
            <div className="row">
              <a href="#">About Us</a><a href="#">About Hong Kong</a><a href="#">Accessibility</a><a href="#">Help</a><a href="#">Linking to GovHK</a>
            </div>
            <div className="row">
              <a href="#">Copyright Notice</a><a href="#">Disclaimer</a><a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="badges">
            <div className="wai"><div className="w">W3C</div><div className="t">WAI-AA<br />WCAG</div></div>
            <img
  src="/images/ipv6.png"
  alt="IPv6"
  className="ipv6-logo"
/>
            <svg className="hkbrand" viewBox="0 0 180 75">

  <text
    x="120"
    y="15"
    fontSize="12"
    fontWeight="700"
    fill="#d8151f"
  >
    HONG
  </text>

  <text
    x="120"
    y="28"
    fontSize="12"
    fontWeight="700"
    fill="#d8151f"
  >
    KONG
  </text>

  <path
    d="M2 51c20-18 35 6 52-8s30 2 50-6 35 14 70 4"
    stroke="#7a3fb0"
    strokeWidth="3"
    fill="none"
  />

  <path
    d="M2 56c20-14 35 8 52-4s32 4 50-2 36 12 70 4"
    stroke="#2aa9e0"
    strokeWidth="3"
    fill="none"
  />

  <path
    d="M10 61c20-10 40 6 60-4s36 4 72-2"
    stroke="#3aaa35"
    strokeWidth="3"
    fill="none"
  />

  <path
    d="M40 43c15-14 30 0 45-10s30 4 48-2"
    stroke="#f5a100"
    strokeWidth="3"
    fill="none"
  />

</svg>
          </div>
        </div>
      </footer>
    </>
  );
}
