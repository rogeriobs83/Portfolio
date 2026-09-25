import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";
import { useRef } from "react";

function Projects() {
  const projects = [
    {
      title: "🌿 Aura — Lifestyle Landing Page",
      description:
        "Aura is a clean, minimalist landing page focused on calm living and natural balance. It presents a lifestyle concept through simple design, soft visuals, and a clear message of well-being.",
      image: "/Copilot-1.png",
      link: "https://aura.rogeriobs.dev/",
    },
    {
      title: "☕ Roast & Beans — Artisan Coffee Website ",
      description: "A cozy multi‑page coffee website featuring handcrafted blends, a curated menu, and a warm, modern brand experience.",
      image: "/src/assets/Copilot_20260814_195822.jpeg",
      link: "https://coffee-shop-160.pages.dev/",
    },
    {
      title: "🍋🇮🇹 Sicilian Restaurant — Authentic Mediterranean Dining",
      description: "A Sicilian restaurant website offering an authentic Mediterranean dining experience with a focus on traditional flavors and modern design.",
      image: "/Pane&Braci.webp",
      link: "https://rogeriobs.dev/",
    },
    {
      title: "🖤 NOIR — Casual Wear Mini E‑commerce",
      description: "NOIR is a casual wear mini e-commerce store offering a curated selection of stylish and comfortable clothing.",
      image: "/NOIR.webp",
      link: "https://noir-7aa.pages.dev/",
    },
    {
      title: "🏋️‍♂️ Fitness Tracker App — Daily Progress & Training UI",
      description: "A comprehensive fitness app experience, tracking daily progress and providing training UI for users.",
      image: "/fundobg.png",
      link: "https://fitness-tracker.example.com",
    },
    {
      title: "Portfolio Site",
      description: "Design moderno para site de portfólio.",
      image: "/fundo.png",
      link: "https://portfolio.example.com",
    },
  ];

  const sliderRef = useRef(null);

  function scrollLeft() {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }

  return (
    <section className="projects" id="Projects">
      <h2>Projects</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>

        <div className="carousel" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </section>
  );
}

export default Projects;
