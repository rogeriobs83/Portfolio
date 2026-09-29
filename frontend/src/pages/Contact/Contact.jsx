import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_hmb689i",
    "template_na54e7u",
    e.target,
    "na6ieFRIY8aGpRDp3"
  ).then(() => {
    alert("Mensagem enviada com sucesso!");
  }).catch(() => {
    alert("Erro ao enviar mensagem.");
  });
};
  return (
    <section id="Contact">
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out for opportunities, projects, or collaboration. Send me a message.
        </p>

        <form className="contact-form" onSubmit={sendEmail}>
  <input type="text" name="user_name" placeholder="Your name" required />
  <input type="email" name="user_email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" required></textarea>
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
