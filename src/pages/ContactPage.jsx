// ContactPage.js
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      <p>Hast du Fragen oder möchtest ein Projekt starten? Schreib mir einfach eine Nachricht!</p>
      
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactPage;
