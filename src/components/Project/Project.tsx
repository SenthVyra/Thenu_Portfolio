import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/athenu11" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HND Portal Student Management System</h3>
              <p>
                A web-based student management system designed to streamline academic administration and improve student engagement. Developed with React.js, Node.js, and MySQL.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/athenu11" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" />
                </a>
                <a href="https://mom-x-assist.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Health Assistant System for Pregnancy Support</h3>
              <p>
                An AI-powered system designed to provide pregnancy support and detect critical conditions. Built with machine learning, React.js, and Flask.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Machine Learning</li>
                <li>Flask</li>
                <li>React.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/athenu11" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Rural Area Transport Management System</h3>
              <p>
                A transportation management web application for optimizing rural transport networks, developed using React.js, Spring Boot, and PostgreSQL.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Spring Boot</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/athenu11" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-School Management Web Application</h3>
              <p>
                A platform for managing school activities, assignments, and student records. Developed with Java, JSP, and MySQL.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>JSP</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
