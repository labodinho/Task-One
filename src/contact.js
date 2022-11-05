import { useState, useEffect } from "react";
import "./contact.css";
import Footer from "./Footer";

export default function Contact() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formValue]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstname) {
      errors.firstname = "please enter your firstname";
    }
    if (!value.lastname) {
      errors.lastname = "please enter your lastname";
    }
    if (!value.email) {
      errors.email = "please enter your email";
    } else if (!regex.test(value.email)) {
      errors.email = "Enter a valid email";
    }
    if (!value.message) {
      errors.message = "please enter some text";
    }
    return errors;
  };

  return (
    <div>
      <div className="contact_container">
        <form onSubmit={handleSubmit}>
          <p className="contact_sty">Contact Me</p>
          <p className="hi_sty">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          {Object.keys(formError).length === 0 && isSubmit && (
            <div className="signed_in">You're signed in successfully</div>
          )}
          <div className="top_label">
            <div>
              <label className="input_names">First Name</label> <br />
              <input
                id="first_name"
                name="firstname"
                value={formValue.firstname}
                type="text"
                placeholder="Enter your first name"
                onChange={handleChange}
              />{" "}
              <br />
              <p>{formError.firstname}</p>
            </div>
            <div>
              <label className="input_names">Last Name</label> <br />
              <input
                id="last_name"
                type="text"
                name="lastname"
                value={formValue.lastname}
                placeholder="Enter your last name"
                onChange={handleChange}
              />
              <p>{formError.lastname}</p>
            </div>
          </div>
          <label className="input_email">Email</label> <br />
          <input
            id="email"
            name="email"
            value={formValue.email}
            type="text"
            placeholder="yourname@email.com"
            onChange={handleChange}
          />{" "}
          <br />
          <p>{formError.email}</p>
          <label>Message</label> <br />
          <textarea
            id="message"
            name="message"
            value={formValue.message}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            onChange={handleChange}
          />{" "}
          <br />
          <p>{formError.message}</p>
          <input type="checkbox" required />
          <label className="textarea_label">
            You agree to providing your data to Olabode who may contact you.
          </label>{" "}
          <br />
          <button id="btn__submit">Send message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
