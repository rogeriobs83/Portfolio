import { useState } from "react";
import "./skills.css";

function Skills() {
  const skills = [
    {
      icon: "fa-html5",
      family: "fa-brands",
      name: "HTML5",
      category: "Structure & Semantics",
      description: "Building responsive and accessible web layouts using modern semantic tags, ensuring proper document structure and SEO best practices."
    },
    {
      icon: "fa-css3-alt",
      family: "fa-brands",
      name: "CSS3 / Tailwind",
      category: "Styling & Layouts",
      description: "Creating modern, adaptive designs with Flexbox, CSS Grid, media queries, and utility-first frameworks like Tailwind CSS for clean user interfaces."
    },
    {
      icon: "fa-js",
      family: "fa-brands",
      name: "JavaScript",
      category: "Logic & Interactivity",
      description: "Implementing ES6+ features, DOM manipulation, asynchronous programming (Promises/Fetch), and handling application states dynamically."
    },
    {
      icon: "fa-react",
      family: "fa-brands",
      name: "React",
      category: "Front-End Framework",
      description: "Developing single-page applications (SPAs) with reusable components, managing state via hooks (useState, useEffect), and building modular architectures."
    },
    {
      icon: "fa-pencil-ruler",
      family: "fa-solid",
      name: "UX/UI Design",
      category: "User Experience",
      description: "Focusing on user-centered design principles, intuitive navigation flows, visual hierarchy, and smooth micro-interactions."
    },
  ];

  const [modalSkill, setModalSkill] = useState(null);
  const [closing, setClosing] = useState(false);

  function openModal(skill) {
    setModalSkill(skill);
    setClosing(false);
  }

  function closeModal() {
    setClosing(true);

    setTimeout(() => {
      setModalSkill(null);
    }, 300); // Animation out duration
  }

  return (
    <>
      <section className="skills" id="Skills">
        <h2>Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onClick={() => openModal(skill)}
            >
              <i className={`${skill.family} ${skill.icon}`}></i>
              <p>{skill.name}</p>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </section>

      {modalSkill && (
        <div className="modal" onClick={closeModal}>
          <div
            className={`modal-content ${closing ? "closing" : "opening"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">{modalSkill.name}</h2>
            <span className="modal-subtitle">{modalSkill.category}</span>
            <p>{modalSkill.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;