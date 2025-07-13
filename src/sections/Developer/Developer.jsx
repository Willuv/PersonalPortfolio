import styles from "./DeveloperStyles.module.css";
import devImg from "../../assets/Me.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Developer() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedInDark;

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
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          William <br /> Uvlin
        </h1>
        <h2>Aspiring Computer Scientist</h2>
        <span>
          <a href="https://github.com/Willuv" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/william-uvlin" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.desctription}>My name is William Uvlin</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Developer;
