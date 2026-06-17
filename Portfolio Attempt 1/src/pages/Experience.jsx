function Experience() {
  return (
    <section className="experience">
      <h2 className="heading">My <span>Experience</span></h2>

      {/* Timeline Container */}
      <div className="timeline">

        {/* Experience Item 4 - Most Recent */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="exp-header">
              <div className="exp-title">
                <h3><i className="fa-solid fa-laptop-code"></i> Frontend Developer &amp; Technical Writer</h3>
                <span className="exp-badge">OJT 2026</span>
              </div>
              <div className="exp-meta">
                <p className="exp-company"><i className="fa-solid fa-landmark"></i> Laguna Management Information Systems Office</p>
                <p className="exp-org"><i className="fa-solid fa-city"></i> Provincial Capitol of Laguna</p>
                <p className="exp-date"><i className="fa-solid fa-calendar-days"></i> February 2026 – April 2026</p>
              </div>
            </div>
            <div className="exp-details">
              <h4><i className="fa-solid fa-clipboard-list"></i> Duties and Responsibilities</h4>
              <ul className="exp-duties">
                <li>Designed and built an interactive, user-friendly frontend interface tailored for non-technical users, improving accessibility and overall usability of the system.</li>
                <li>Served as technical writer for the team: recorded meeting notes and produced user manuals to support documentation and knowledge transfer.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="exp-header">
              <div className="exp-title">
                <h3><i className="fa-solid fa-building"></i> Information Desk Assistant</h3>
                <span className="exp-badge">SPES 2025</span>
              </div>
              <div className="exp-meta">
                <p className="exp-company"><i className="fa-solid fa-landmark"></i> Public Employment Service Office – Pila</p>
                <p className="exp-org"><i className="fa-solid fa-city"></i> Provincial Government of Laguna</p>
                <p className="exp-date"><i className="fa-solid fa-calendar-days"></i> June 2 – July 2, 2025</p>
              </div>
            </div>
            <div className="exp-details">
              <h4><i className="fa-solid fa-clipboard-list"></i> Duties and Responsibilities</h4>
              <p className="exp-role-desc">Municipal Hall of Pila – Special Program for Employment of Students (SPES) 2025 Front Desk &amp; Information Desk Assistant</p>
              <ul className="exp-duties">
                <li>Served as the primary point of contact at the Municipal Hall Information Desk, assisting an average of 50–80 residents daily with inquiries, directions, and government services</li>
                <li>Provided clear guidance and directions to visitors navigating the Municipal Hall, ensuring a positive and efficient experience</li>
                <li>Managed staff movement protocol by monitoring and requiring outgoing personnel to sign pass slips during office hours</li>
                <li>Supported the Treasury Office during the End-of-Term Audit by counting scholarship stubs and computing paid tax records, contributing to accurate and timely financial reconciliation</li>
                <li>Demonstrated strong communication, patience, and customer-service skills while handling diverse visitor needs in a fast-paced government environment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="exp-header">
              <div className="exp-title">
                <h3><i className="fa-solid fa-building"></i> Assistant</h3>
                <span className="exp-badge">SPES 2024</span>
              </div>
              <div className="exp-meta">
                <p className="exp-company"><i className="fa-solid fa-landmark"></i> Business Permit and Licensing Office – Pila</p>
                <p className="exp-org"><i className="fa-solid fa-city"></i> Provincial Government of Laguna</p>
                <p className="exp-date"><i className="fa-solid fa-calendar-days"></i> July 22 – August 19, 2024</p>
              </div>
            </div>
            <div className="exp-details">
              <h4><i className="fa-solid fa-clipboard-list"></i> Duties and Responsibilities</h4>
              <p className="exp-role-desc">Business Permit and Licensing Office (BPLO) – Special Program for Employment of Students (SPES) 2024 Administrative Assistant to the BPLO Head &amp; Treasury Office Support</p>
              <ul className="exp-duties">
                <li>Served as direct administrative assistant to the Head of the Business Permit and Licensing Office (BPLO), managing daily tasks</li>
                <li>Handled confidential documents: received, sorted, and delivered permits, and applications between BPLO, Treasury Office, and Sectoral/Auditor&apos;s Office</li>
                <li>Encoded and verified paid land tax records in the Treasury Office Books</li>
                <li>Facilitated inter-department coordination by promptly routing documents to the Auditor&apos;s Office and other concerned units</li>
                <li>Performed various clerical and errand duties, including filing, photocopying, and records organization, contributing to faster processing of business permits and tax payments</li>
                <li>Worked effectively in a shared BPLO-Treasury office environment, flexibly supporting both units during peak periods</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Item 1 - Oldest */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="exp-header">
              <div className="exp-title">
                <h3><i className="fa-solid fa-building"></i> Data Encoder</h3>
                <span className="exp-badge">SPES 2023</span>
              </div>
              <div className="exp-meta">
                <p className="exp-company"><i className="fa-solid fa-landmark"></i> Public Employment Service Office – Pila</p>
                <p className="exp-org"><i className="fa-solid fa-city"></i> Provincial Government of Laguna</p>
                <p className="exp-date"><i className="fa-solid fa-calendar-days"></i> July 19 – August 15, 2023</p>
              </div>
            </div>
            <div className="exp-details">
              <h4><i className="fa-solid fa-clipboard-list"></i> Duties and Responsibilities</h4>
              <p className="exp-role-desc">Public Employment Service Office (PESO) – Special Program for Employment of Students (SPES) Data Encoder</p>
              <ul className="exp-duties">
                <li>Conducted door-to-door surveys in the barangay to identify residents actively seeking employment</li>
                <li>Interviewed job seekers and accurately collected personal, educational, and employment preference data</li>
                <li>Encoded and organized collected information into Google Sheets with high attention to detail and data accuracy</li>
                <li>Ensured timely submission of encoded data to the PESO office for uploading to the official job-matching website</li>
                <li>Collaborated with the PESO team and fellow student-workers to meet daily and weekly survey targets</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
