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
          p="Gender classification using OpenCV face detection and PCA/SVM, deployed as a Flask app for real-time prediction."
          h4="Pyhton, Flask, OpenCV, scikit-learn, NumPy, Pickle, matplotlib, pandas"
        />
        <ProjectCard
          src={todayILearned}
          link="https://github.com/Willuv/Today-I-Learned"
          h3="Today I Learned"
          p="Full-stack React app with Supabase/Postgres, optimized CRUD for fast, scalable real-time data."
          h4="Javascript, React, HTML, CSS, Supsabase API, Netlify"
        />
        <ProjectCard
          src={stockMarketWebApp}
          link="https://github.com/Willuv/Stock-Market-App"
          h3="Stock Market Web App"
          p="Django REST app using Tiingo API for real-time market data, with responsive CSS charts."
          h4=" Python, Django, RESTful API, Tiingo API, CSS"
        />
        <ProjectCard
          src={personalPortfolio}
          link="https://github.com/Willuv/PersonalPortfolio"
          h3="WilliamUvlin.com"
          p="Personal portfolio built with React and Vite, optimized for mobile and usability."
          h4="React, JavaScript, HTML, CSS, Netlify, Vite"
        />
      </div>
    </section>
  );
}

export default Projects;
