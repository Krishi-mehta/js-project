import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../contactus/contact_us.css";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Send form data to the server (API call)
    }
  };

  return (
    <div>
      <Header />
      <section className="contact-page-container">
        <div className="contact-page-wrapper">
          <div className="contact-form-container">
            <div className="contact-title">
              <h2>Send Your Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="contact-error">{errors.name}</p>}
              </div>

              <div className="contact-input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="contact-error">{errors.phone}</p>}
              </div>

              <div className="contact-input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="contact-error">{errors.email}</p>}
              </div>

              <div className="contact-input-box">
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-input-box">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-input-box">
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="contact-error">{errors.message}</p>
                )}
              </div>

              <div className="contact-button-box">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contactus;
