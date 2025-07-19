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
            <h3>Software Engineer Intern</h3>
            <h4>Marathon Petroleum Company - May 2025 to Aug 2025</h4>
            <p>
              <ul>
                Refactored backend services for unit testing, implemented API
                health checks.
              </ul>
              <ul>
                Created a Blazor dashboard to visualize CI/CD, code quality, and
                security metrics.
              </ul>
              <ul>
                Won company hackathon with a Blazor-based drone mission
                ticketing system.
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
            <h3>Software Developer Intern</h3>
            <h4>The J.M. Smucker Co. — May 2024 to Aug 2024</h4>
            <p>
              <ul>
                Built an inventory system to track machine parts across plants
                using SQL.
              </ul>
              <ul>
                Wrote optimized scripts for fast part transfers and reduced
                downtime.
              </ul>
              <ul>
                Automated reporting to support real-time maintenance decisions.
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
            <h3>Software Developer Intern</h3>
            <h4>Orbytel Printing and Packaging — May 2023 - August 2023</h4>
            <p>
              <ul>
                Built a system for dynamic scheduling, resource allocation, and
                tracking.
              </ul>
              <ul>
                Integrated ERP and printer APIs to enable seamless, real-time
                data flow.
              </ul>
              <ul>
                Added error handling and alerts to reduce downtime and improve
                reliability.
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
