import "./Contact.css";

function Contact() {
  return (
    <section id="Contact">
      <section id="contact" className="contact-section">
        <h2>Entre em Contato</h2>
        <p>
          Feel free to reach out for opportunities, projects, or collaboration. Send me a message.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-links">
          <a href="mailto:seuemail@gmail.com">Email</a>
          <a href="https://github.com/rogeriobs83" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rogerio-silva-5292153a7/" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}

export default Contact;
