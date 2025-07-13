import styles from "./DeveloperStyles.module.css";
import devImg from "../../assets/Me.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/Resume.pdf";

function Developer() {
  return (
    <section id="developer" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={devImg}
          alt="Profile picture of William Uvlin"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          William <br /> Uvlin
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Willuv" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/william-uvlin" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          With a passtion for developing modern React web apps for commercial
          business
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Developer;
