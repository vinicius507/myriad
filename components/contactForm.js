import axios from "axios";
import { useState } from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleServerResponse = (status, msg) => {
    if (status) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mpzolkkj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.contactInfo}>
          <div className={styles.contactDetail}>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleOnChange}
              value={inputs.name}
            />
          </div>
          <div className={styles.contactDetail}>
            <input
              id="email"
              type="email"
              name="_replyto"
              placeholder="E-mail"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </div>
        <div className={styles.message}>
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            onChange={handleOnChange}
            value={inputs.subject}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </div>
        <button
          type="submit"
          disabled={status.submitting}
          className={
            !status.submitting
              ? !status.submitted
                ? styles.submit
                : `${styles.submit} ${styles.submitted}`
              : `${styles.submit} ${styles.submitting}`
          }
        >
          {!status.submitting
            ? !status.submitted
              ? "SEND"
              : "SENT"
            : "SENDING"}
        </button>
      </form>
      {status.info.error && (
        <div className={styles.result}>
          <span>
            There was a problem sending your message. Please, try again later.
          </span>
        </div>
      )}
    </div>
  );
}
