import { useState } from "react";
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: { [key: string]: string } = {};

    if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
      newErrors.name = "Name must be at least 2 letters and contain only alphabets.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message || message.trim().length < 2) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("https://formspree.io/f/xzzrodwn", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("There was an error submitting the form.");
    }
  };
  
  return (
    <div className="contact-container">
    <h1>Contact Me</h1>
    {submitted ? (
      <p className="success-message"> Thank you! Your message has been sent.</p>
    ) : (
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label>
          Name:
          <input type="text" name="name" required />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input type="text" name="email" required />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea name="message" required />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </label>

        <button type="submit">Send</button>
      </form>
    )}
    </div>
  );
}

export default Contact;