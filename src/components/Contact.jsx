import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { contactDetails } from "../data/siteData";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const recipientEmail = "christiandaledechavez4@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("Please fill in your name, email, and message before sending.");
      return;
    }

    const subject = `Portfolio inquiry from ${trimmedName}`;
    const body = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n");

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setStatus("Your email app is opening with a pre-filled message for Gmail.");
    setFormData(initialState);
  };

  return (
    <section className="section" id="contact">
      <SectionTitle
        eyebrow="CONTACT"
        title="Let’s build something useful"
        description="If you’re looking for a developer who enjoys clean interfaces, practical problem solving, and learning through real work, I’d love to connect."
      />

      <div className="contact-layout">
        <div className="contact-card">
          <div className="contact-list">
            {contactDetails.map((item) => (
              <div className="contact-item" key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <div className="contact-actions">
            <button className="button button-primary" type="submit">
              Send Message
            </button>
          </div>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
