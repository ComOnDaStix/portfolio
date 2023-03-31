import styles from "../styles/Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqzkjrn");
  if (state.succeeded) {
    return (
      <div className={styles.container2}>
        <div className={styles.Submit}>
          <Link href="/" className={styles.link}>
          <h1 className={styles.h12}>Thanks for submitting!</h1>
          </Link>
          <Link href="/" className={styles.link}>
          <img
            src={"/thumbs.png"}
            alt="Thumbs up"
            className={styles.thumbsUp}
          />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Contact</h1>
      <p className={styles.p}>Looking forward to hearing from you</p>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.h3}>Phone</h3>
          <p className={styles.number}>1-414-530-1505</p>
          <h3 className={styles.email}>Email</h3>
          <p className={styles.emailAddy}>comeronmoussavi82@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input className={styles.input} type="text" placeholder="Subject" />
          </div>
          <div className={styles.textareaContainer}>
            <textarea id="message" name="message" className={styles.textarea} placeholder="Message"/>
            <div className={styles.submitContainer}>
              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submitCircle}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
