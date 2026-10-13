import { demoResultUsers } from "@/lib/demoResultUsers";

export default async function VisaResultPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const idToSlug = {
  "1355": "manger-thapa-prena",
  "1356": "rai-silash",
  "1357": "dukpa-pemba",
  "1358": "rai-nobita-sampang",
  "1359": "tamang-bidur",
  "1360": "tamang-sarmila",
  "1361": "thapa-navin",
  "1362": "lamagaday-sachin",
  "1363": "chhetri-bishal",
  "1364": "chhetri-tusshar",
  "1365": "tamang-ronit",
  "1366": "rai-nirupa",
  "1367": "chhetri-ritesh",
  "1368": "jaiswal-sudip-prasad",
  "1369": "bhutia-kalzang-ongmu",
  "1370": "rai-thapa-amita",
  "1371": "subba-tiran",
  "1372": "rai-sharmila",
  "1373": "alley-saphal",
} as const;

const finalSlug =
  idToSlug[slug as keyof typeof idToSlug] || slug;

const user =
  demoResultUsers[finalSlug as keyof typeof demoResultUsers];

  if (!user) {
    return (
      <main className="app-status-page">
        <div className="imm-container">
          <div
            style={{
              marginTop: "40px",
              padding: "25px",
              border: "1px solid #ccc",
            }}
          >
            <h2>Demo record not found</h2>
            <p>This demonstration record does not exist.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="app-status-page">

      

      {/* HEADER */}
      <header className="imm-header">
  <div className="imm-brand">
    <img
      src="/images/hong.webp"
      alt="Demo emblem"
      className="imm-logo-img"
    />

    <div>
      <div className="imm-title">
        Immigration Department
      </div>

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

          {/* LEFT SIDE */}
          <aside className="support-box">
            <span className="support-arrow">➜</span>
            Technical Support
          </aside>

          {/* RIGHT SIDE */}
          <section className="status-content">

            <div className="result-box">

              <div className="result-heading">
                ▣ &nbsp; Application Status
              </div>

              <div className="result-content">

                {/* NAME AUTO CHANGES HERE */}
                <h2>
                  Hi {user.name} your application result is available.
                </h2>


                <p>
                  We are pleased to inform you that your F&B Helper visa application has been approved. All formal processing has been completed successfully. Please reach out to receive further instructions regarding your upcoming travel and onboarding schedule.
                </p>

            

              </div>
            </div>

            {/* EACH PERSON GETS THEIR OWN PDF */}
            <a
              href={user.pdf}
              download
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