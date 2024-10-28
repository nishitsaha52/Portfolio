import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import Plane from "../Assets/plane.png";
import "../styles/Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!email || !name || !message) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }

    const templateParams = {
      user_email: email,
      user_name: name,
      message: message,
      current_year: new Date().getFullYear(),
    };

    console.log("Template Params:", templateParams); // Log to check parameters

    emailjs.send(
      "service_x7u25d8",         
      "template_ymu7k1a",        
      templateParams,
      "wah5fv9zNXY9jZH-E"        
    ).then(
      (result) => {
        console.log("Email sent:", result.text);
        setSuccessMessage("Your message has been sent successfully!");
      },
      (error) => {
        console.log("Email send error:", error.text);
        setSuccessMessage("Failed to send message. Please try again.");
      }
    );

    setEmail("");
    setName("");
    setMessage("");
    setTimeout(() => setSuccessMessage(""), 5000);
};


  return (
    <div className="contact-section">
      <section className="uf-contact-form-01 mx-auto">
        <div className="container">
          <div className="row justify-content-center bg-transparent rounded-4 ">
            <div className="col-md-6 text-center">
              <h2 className="uf-ct-01-text-primary text-uppercase fw-bold">Contact Us</h2>
              <p>
                Or reach out manually to{" "}
                <a href="mailto:nishitsaha62@gmail.com" className="text-decoration-none">
                  nishitsaha62@gmail.com
                </a>
              </p>
              <img src={Plane} alt="plane" className="uf-img-contact-form-01 pt-4 d-md-block d-none" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="uf-imail" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="uf-imail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" className="form-text uf-ct-01-text-primary">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="uf-iname" className="form-label">Your name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uf-iname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="uf-itextarea" className="form-label">Your message</label>
                  <textarea
                    className="form-control"
                    id="uf-itextarea"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-lg uf-ct-01-btn-primary">
                  Send Message
                </button>
              </form>

              {/* Display success message */}
              {successMessage && <p className="text-success mt-3">{successMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Contact;
