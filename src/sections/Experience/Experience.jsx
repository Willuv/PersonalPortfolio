import styles from "./ExperienceStyles.module.css";

import MPC from "../../assets/MPC.png";
import Smuckers from "../../assets/Smuckers.png";
import Orbytel from "../../assets/Orbytel.png";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <img src={MPC} alt="Company Logo" className={styles.timelineImg} />
            <h3>Job Title</h3>
            <h4>Marathon Petroleum Company - May 2025 to Aug 2025</h4>
            <p>
              <ul>
                Collaborated on an Agile development team to refactor backend
                services using Entity Framework Core and the Repository Design
                Pattern, enabling robust xUnit testing and improving system
                modularity and reliability.
              </ul>
              <ul>
                Designed and integrated automated frontend health checks using
                ASP.NET middleware to monitor API availability and trigger
                developer alerts upon failure, improving system observability
                and reducing incident response time.
              </ul>
              <ul>
                {" "}
                Independently designed and developed a full-stack Blazor
                application that integrates with Azure DevOps, Snyk, and
                SonarQube REST APIs to visualize code quality, security, and
                CI/CD metrics across department repositories.
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <img
              src={Smuckers}
              alt="Company Logo"
              className={styles.timelineImg}
            />
            <h3>Job Title</h3>
            <h4>The J.M. Smucker Co. — May 2024 to Aug 2024</h4>
            <p>
              <ul>
                Developed a detailed inventory management system using complex
                SQL queries to track and maintain machine parts data across
                multiple nationwide manufacturing plants, ensuring high accuracy
                and real-time updates.
              </ul>
              <ul>
                Created and optimized SQL scripts to facilitate the rapid
                identification and intra-company transfer of machine parts,
                minimizing downtime and reducing operational costs by
                eliminating the need for external procurement.
              </ul>
              <ul>
                Automated the reporting process with advanced SQL functions,
                enabling swift decision-making for part transfers or purchases,
                thereby enhancing overall efficiency and cost-effectiveness in
                response to machine breakdowns.
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <img
              src={Orbytel}
              alt="Company Logo"
              className={styles.timelineImg}
            />
            <h3>Job Title</h3>
            <h4>Orbytel Printing and Packaging — May 2023 - August 2023</h4>
            <p>
              <ul>
                Designed a system for dynamic scheduling, resource allocation,
                and real-time tracking.
              </ul>
              <ul>
                Connected the system with ERP and printer APIs for smooth data
                flow and accurate updates.
              </ul>
              <ul>
                Implemented error detection, automatic resolution, and
                multi-channel notifications to reduce downtime.
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
