import React from "react";
import styles from "../styles/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.wrapper}>
    <h1 className={styles.h1} id="h1">Resume</h1>
    <div className={styles.container}>
      <h2 className={styles.left}>Work Experience</h2>
      <div className={styles.right}>
        <div className={styles.info}>
          <h3 className={styles.date}>2023 - Present</h3>
          <h3 className={styles.title}>Freelance Web-Developer</h3>
          <p className={styles.desc}>
            Currently, I am offering my services to help build my portfolio
            and support the online presence of various organizations,
            including small businesses and non-profits. I am enthusiastic
            about learning and embracing new challenges in every project I
            undertake. My ability to work effectively in a team environment
            has allowed me to collaborate with fellow developers and
            designers, ensuring the seamless integration of front-end and
            back-end functionalities.
          </p>
        </div>
        <div className={styles.info}>
          <h3 className={styles.date}>2020 - 2023</h3>
          <h3 className={styles.title}>Amazon Delivery Driver</h3>
          <div className={styles.desc}>
            As an Amazon Delivery Driver, I played an integral role in
            ensuring timely and efficient delivery of packages to customers.
            My primary responsibilities included loading and unloading the
            delivery vehicle, adhering to strict safety protocols, and
            navigating through various routes to deliver packages to their
            intended destinations.
            <div className={styles.p}>
              Despite my commitment to the role, I decided to leave the
              position in 2023 due to the physical demands of the job.
              Balancing the strenuous nature of loading and unloading packages
              with the need to maintain a rapid pace throughout the day
              ultimately led me to seek new opportunities better aligned with
              my capabilities.
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.date}>2017 - 2020</h3>
          <h3 className={styles.title}>Unfinished Legacy Co.</h3>
          <div className={styles.desc}>
            Unfinished Legacy Co is an emerging fashion label, and I handled
            the content creation. The role involved crafting compelling visual
            narratives through high-quality videos and multimedia content that
            showcased the brand's unique identity, style, and products.
            <div className={styles.p}>
              Key responsibilities included conceptualizing, filming, and
              editing video projects, as well as collaborating with the
              marketing team to align content with overall strategy. The ideal
              candidate possessed strong technical abilities, a keen eye for
              aesthetics, and the capacity to adapt to the brand's evolving
              needs, while ensuring consistent and impactful messaging across
              digital platforms.
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.date}>2013 - 2017</h3>
          <h3 className={styles.title}>Coca-Cola Order Builder</h3>
          <div className={styles.desc}>
            From 2013 to 2017, Coca-Cola sought an Order Builder to
            efficiently and accurately assemble customer orders in their
            fast-paced warehouse environment. Key responsibilities included
            picking products from designated locations, stacking them onto
            pallets, and wrapping the orders for secure delivery.
            <div className={styles.p}>
              Strong organizational and time-management skills were required,
              as well as the ability to meet performance standards and adhere
              to safety protocols.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <h2 className={styles.left}>Education</h2>
      <div className={styles.right}>
        <div className={styles.info}>
          <h3 className={styles.date}>2007 - 2011</h3>
          <h3 className={styles.title}>
            Washington Park High School | High School Diploma
          </h3>
          <div className={styles.desc}>
            During my time at Washington Park High School, I was an active and
            engaged student, both in and out of the classroom. My favorite
            subjects included English, Theatre, and History.
            <div className={styles.p}>
              Throughout high school, I learned the importance of teamwork,
              time management, and effective communication, skills which have
              proven invaluable in my personal and professional life.{" "}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.date}>2013 - 2014</h3>
          <h3 className={styles.title}>GateWay Technical College</h3>
          <div className={styles.desc}>
            After graduating from high school, I attended college for a year,
            where I further developed my technical and soft skills. This
            experience allowed me to gain exposure to new technologies and
            broaden my understanding of web development concepts.
            Additionally, attending college helped me improve my time
            management, communication, and collaboration skills as I balanced
            coursework and group projects in a fast-paced academic
            environment.
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      
      <h3 className={styles.left}>Skills & Expertise</h3>
      <div className={styles.right}>
      <div className={styles.wrapper2}>
        <li className={styles.desc}>Proficiency in HTML, CSS, JavaScript.</li>
        <li className={styles.desc}>
          Experience with popular front-end frameworks such as React.
        </li>
        <li className={styles.desc}>
          Familiar with server-side frameworks and technologies like Node.js.
        </li>
        <li className={styles.desc}>
          Knowledge of responsive design principles and experience building
          websites that adapt to different devices and screen sizes.
        </li>
        <li className={styles.desc}>
          Excellent written and verbal communication skills, enabling you to
          effectively convey complex technical concepts to both technical and
          non-technical audiences.
        </li>
        <li className={styles.desc}>
          A creative thinker who can develop innovative solutions to design
          and development challenges and continuously explore new ideas to
          improve web applications.
        </li>
      </div>
    </div>
    </div>
  </div>
);
}; 

export default Resume;
