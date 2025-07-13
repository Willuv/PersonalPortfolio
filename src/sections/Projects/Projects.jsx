import React from "react";
import styles from "./ProjectsStyles.module.css";
import facialRecognition from "../../assets/Facial_Recognition.png";
import todayILearned from "../../assets/TodayILearned.png";
import stockMarketWebApp from "../../assets/StockMarketWebApp.png";
import personalPortfolio from "../../assets/Portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={facialRecognition}
          link="https://github.com/Willuv/Facial-Recognition-Program"
          h3="Facial Recognition Program"
          p=" Trained gender classification ML model with OpenCV for face detection and scikit-learn PCA/SVM for high accuracy. Deployed Flask app with custom SVM for real-time gender prediction, using OpenCV for precise facial analysis. "
          h4="Pyhton, Flask, OpenCV, scikit-learn, NumPy, Pickle, matplotlib, pandas"
        />
        <ProjectCard
          src={todayILearned}
          link="https://github.com/Willuv/Today-I-Learned"
          h3="Today I Learned"
          p="Built full-stack “Today I Learned” app with React hooks, Supabase, and Postgres for a scalable real-time backend. Optimized Supabase API CRUD with indexing/query tuning for fast data retrieval and smooth user content flow. "
          h4="Javascript, React, HTML, CSS, Supsabase API, Netlify"
        />
        <ProjectCard
          src={stockMarketWebApp}
          link="https://github.com/Willuv/Stock-Market-App"
          h3="Stock Market Web App"
          p="Built Django app with RESTful endpoints, async fetching, caching, and IEX Tiingo API for real-time market data. Styled responsive frontend in CSS to visualize JSON stock data live, creating clear charts for user insight."
          h4=" Python, Django, RESTful API, Tiingo API, CSS"
        />
        <ProjectCard
          src={personalPortfolio}
          link="https://github.com/Willuv/PersonalPortfolio"
          h3="WilliamUvlin.com"
          p="My personal portfolio web application, showcasing my experience, skills, and projects. Leveraging React JS and Vite to ensure a mobile-friendly, and use friendly expereince."
          h4="React, JavaScript, HTML, CSS, Netlify, Vite"
        />
      </div>
    </section>
  );
}

export default Projects;
