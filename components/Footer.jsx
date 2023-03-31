import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.Phone}>
          <h3 className={styles.h3}>Phone</h3>
          <p className={styles.p}>1-414-530-1505</p>
        </div>
        <div className={styles.Phone}>
          <h3 className={styles.h3}>Email</h3>
          <p className={styles.p}>comeronmoussavi82@gmail.com</p>
        </div>
        <div className={styles.Phone}>
          <h3 className={styles.h3}>Follow Me</h3>
          <p className={styles.p}>
            <Link href="https://www.linkedin.com/in/comeron-moussavi-077547199/">
            <Image
              src={"/linkedin.png"}
              className={styles.linkedIn}
              width={34}
              height={34}
              alt="linkedin"
            />
            </Link>
            <Link href="https://github.com/ComOnDaStix">
            <Image
              src={"/gitHub.png"}
              className={styles.gitHub}
              width={36}
              height={36}
              alt="gitHub"
            />
            </Link>
          </p>
        </div>
        <div className={styles.copyright}>
          <span className={styles.span}>© 2023 By </span>
          <span className={styles.span}>Comeron Moussavi</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
