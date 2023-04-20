import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.left}>Human-Made</h2>
          <p className={styles.desc}>
            Undertaking the challenge of redesigning this website, I aimed to
            further develop my web development skills. My objective for this
            project was to utilize Next.Js and implement a visually appealing
            design, while also ensuring complete responsiveness across all
            devices.
          </p>
          <div className={styles.tech}>
            <h4 className={styles.next}>Next JS</h4>
            <h4 className={styles.css}>CSS</h4>
          </div>
        </div>
        <div className={styles.right}>
          <Link href="https://human-made-responsive-p7ik-comondastix.vercel.app/" className={styles.link}>
          <video
              src="/humanmadeVid.mp4"
              width={640}
              height={313}
              className={styles.img}
              alt="project1"
              loop
              autoPlay
              muted
              playsInline
            />
          </Link>
          <div className={styles.linkContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.codeSection}>
                <Link href="https://github.com/ComOnDaStix/human-made">
                  <Image
                    src={"/gitHub.png"}
                    width={25}
                    height={25}
                    className={styles.gitHub}
                    alt="github"
                  />
                </Link>
              </div>
              <Link href="https://github.com/ComOnDaStix/human-made" className={styles.link}>
              <h4 className={styles.h4}>CODE</h4>
              </Link>
            </div>
            <div className={styles.demoSection}>
              <div className={styles.logoContainer}>
                <Link href="https://human-made-responsive-p7ik-khty744d6-comondastix.vercel.app/">
                  <Image
                    src={"/demo.png"}
                    width={25}
                    height={25}
                    className={styles.demo}
                    alt="demo"
                  />
                </Link>
              </div>
              <Link className={styles.link} href="https://human-made-responsive-p7ik-khty744d6-comondastix.vercel.app/">
              <h4 className={styles.h4}>LIVE DEMO</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.left}>ChiliMovie</h2>
          <p className={styles.desc}>
            ChiliMovie is a cutting-edge movie streaming platform that features
            the most recent films and television series. The platform utilizes
            an API to consistently maintain its vast collection, ensuring that
            all content is up-to-date.
          </p>
          <div className={styles.tech}>
            <h4 className={styles.next}>Next JS</h4>
            <h4 className={styles.css}>CSS</h4>
          </div>
        </div>
        <div className={styles.right}>
          <Link className={styles.link} href="https://chili-movie-mock-mq5a.vercel.app/">
          <video
              src="/chilimovieVid.mp4"
              width={640}
              height={313}
              className={styles.img}
              alt="project1"
              loop
              autoPlay
              muted
              playsInline
            />
          </Link>
          <div className={styles.linkContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.codeSection}>
                <Link href="https://github.com/ComOnDaStix/Chili-Movie-Mock">
                  <Image
                    src={"/gitHub.png"}
                    width={25}
                    height={25}
                    className={styles.gitHub}
                    alt="github"
                  />
                </Link>
              </div>
              <Link className={styles.link} href="https://github.com/ComOnDaStix/Chili-Movie-Mock">
              <h4 className={styles.h4}>CODE</h4>
              </Link>
            </div>
            <div className={styles.demoSection}>
              <div className={styles.logoContainer}>
                <Link href="https://chili-movie-mock-mq5a.vercel.app/">
                  <Image
                    src={"/demo.png"}
                    width={25}
                    height={25}
                    className={styles.demo}
                    alt="demo"
                  />
                </Link>
              </div>
              <Link className={styles.link} href="https://chili-movie-mock-mq5a.vercel.app/">
              <h4 className={styles.h4}>LIVE DEMO</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.left}>le FLEUR*</h2>
          <p className={styles.desc}>
            Lefeur is an e-commerce website that I decided to redesign in order
            to enhance my understanding of cart context and handling dummy data.
            By revamping the site, I aimed to dive deeper into the nuances of
            e-commerce functionalities, such as managing shopping cart
            operations and efficiently processing simulated data for improved
            user experience and system performance.
          </p>
          <div className={styles.tech}>
            <h4 className={styles.next}>React</h4>
            <h4 className={styles.css}>CSS</h4>
          </div>
        </div>
        <div className={styles.right}>
          <Link href="https://lefeur-responsive-ofy3o3tfe-comondastix.vercel.app/" >
          <video
              src="/leflurVid.mp4"
              width={640}
              height={313}
              className={styles.img}
              alt="project1"
              loop
              autoPlay
              muted
              playsInline
            />
          </Link>
          <div className={styles.linkContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.codeSection}>
                <Link href="https://github.com/ComOnDaStix/Lefeur-Responsive">
                  <Image
                    src={"/gitHub.png"}
                    width={25}
                    height={25}
                    className={styles.gitHub}
                    alt="github"
                  />
                </Link>
              </div>
              <Link href="https://github.com/ComOnDaStix/Lefeur-Responsive" className={styles.link}>
              <h4 className={styles.h4}>CODE</h4>
              </Link>
            </div>
            <div className={styles.demoSection}>
              <div className={styles.logoContainer}>
                <Link href="https://lefeur-responsive-ofy3o3tfe-comondastix.vercel.app/">
                  <Image
                    src={"/demo.png"}
                    width={25}
                    height={25}
                    className={styles.demo}
                    alt="demo"
                  />
                </Link>
              </div>
              <Link href="https://lefeur-responsive-ofy3o3tfe-comondastix.vercel.app/" className={styles.link}>
              <h4 className={styles.h4}>LIVE DEMO</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.left}>.Sneakers</h2>
          <p className={styles.desc}>
            A year ago, I created a project called .Sneakers. It was a small
            HTML and CSS project that I created to enhance my skills in web
            development. The .Sneakers website was a simple design focused on
            showcasing my abilities with HTML and CSS.
          </p>
          <div className={styles.tech}>
            <h4 className={styles.next}>HTML</h4>
            <h4 className={styles.css}>CSS</h4>
          </div>
        </div>
        <div className={styles.right}>
          <Link href="https://nike-mock-j7f1u3p0e-comondastix.vercel.app/" className={styles.link}>
          <video
              src="/nikeVid.mp4"
              width={640}
              height={313}
              className={styles.img}
              alt="project1"
              loop
              autoPlay
              muted
              playsInline
            />
          </Link>
          <div className={styles.linkContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.codeSection}>
                <Link href="https://github.com/ComOnDaStix/Nike-Mock">
                  <Image
                    src={"/gitHub.png"}
                    width={25}
                    height={25}
                    className={styles.gitHub}
                    alt="github"
                  />
                </Link>
              </div>
              <Link href="https://github.com/ComOnDaStix/Nike-Mock"  className={styles.link}>
              <h4 className={styles.h4}>CODE</h4>
              </Link>
            </div>
            <div className={styles.demoSection}>
              <div className={styles.logoContainer}>
                <Link href="https://nike-mock-j7f1u3p0e-comondastix.vercel.app/">
                  <Image
                    src={"/demo.png"}
                    width={25}
                    height={25}
                    className={styles.demo}
                    alt="demo"
                  />
                </Link>
              </div>
              <Link className={styles.link} href="https://nike-mock-j7f1u3p0e-comondastix.vercel.app/">
              <h4 className={styles.h4}>LIVE DEMO</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
