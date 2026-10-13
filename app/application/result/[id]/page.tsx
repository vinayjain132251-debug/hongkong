import { demoApplicants } from "@/lib/demoApplicants";

export default async function DemoResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const applicant =
    demoApplicants[id as keyof typeof demoApplicants];

  // Agar ID nahi mili
  if (!applicant) {
    return (
      <main className="app-status-page">
        <div className="imm-container">
          <div className="result-box">
            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h2>找不到示範記錄</h2>
              <p>此示範記錄不存在。</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="app-status-page">

      <div className="imm-container">

        <div className="status-layout">

          <div className="result-box">

            {/* DEMO NOTICE */}
            <div
              style={{
                padding: "12px 15px",
                marginBottom: "25px",
                border: "2px solid #b00000",
                fontWeight: "700",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              示範資料－非官方
            </div>

            {/* HEADING */}
            <div className="result-heading">
              申請資料
            </div>

            {/* RESULT CONTENT */}
            <div className="result-content">

              <p>
                <strong>姓名：</strong>
                {applicant.name}
              </p>

              <p>
                <strong>護照號碼：</strong>
                {applicant.passport}
              </p>

              <p>
                <strong>出生日期：</strong>
                {applicant.dob}
              </p>

              <p>
                <strong>申請參考編號：</strong>
                {applicant.applicationNo}
              </p>

              <p>
                <strong>國籍：</strong>
                {applicant.nationality}
              </p>

              <p>
                <strong>公司名稱：</strong>
                The Charter House Cals Bay Hong Kong
              </p>

              <p>
                <strong>職位：</strong>
                餐飲部助理
              </p>

              <p>
                <strong>批准類別：</strong>
                就業許可
              </p>

              <p>
                <strong>僱傭合約期限：</strong>
                2年
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}