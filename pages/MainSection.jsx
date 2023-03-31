import styles from "../styles/MainSection.module.css";
import circleImage from "../public/mainImg.jpg";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionOneContainer}>
          <div className={styles.sectionOne}>
            <div className={styles.circle}>
              <div className={styles.imageWrapper}>
                <Image
                  src={circleImage}
                  width={400}
                  height={400}
                  className={styles.image}
                  alt="circleImage"
                  priority="high"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwoContainer}>
          <div className={styles.sectionTwo}>
            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <div className={styles.h1Container}>
                  <h1 className={styles.h1}>
                    Front-End React Developer
                    <span className={styles.iconWrapper}>
                      <Image src={"/handIcon.png"} width={50} height={50} alt="handIcon"/>
                    </span>
                  </h1>
                </div>
                <h3 className={styles.h3}>A Bit About Me</h3>
                <p className={styles.p}>
                  Hi. I'm Comeron Moussavi. A passionate Front-end React
                  developer based in Milwaukee, Wisconsin.{" "}
                  <span className={styles.span}>
                    <Image src={"/pin.png"} width={20} height={20} alt="pin"/>
                  </span>
                </p>
              </div>
              <div
                className={`${styles.circleContainer} ${styles.animatedDivs}`}
              >
                <Link href="Resume" className={styles.link}>
                  <div className={`${styles.circle2} ${styles.circleResume}`}>
                    Resume
                  </div>
                </Link>
                <Link href="Projects" className={styles.link}>
                  <div className={`${styles.circle2} ${styles.circleProjects}`}>
                    Projects
                  </div>
                </Link>
                <Link href="/Contact" className={styles.link}>
                  <div className={`${styles.circle2} ${styles.circleContact}`}>
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
