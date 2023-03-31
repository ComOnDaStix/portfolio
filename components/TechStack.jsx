import styles from "../styles/TechStack.module.css";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.h3}>Tech Stack</h3>
        <span className={styles.seperator}>|</span>
        <div className={styles.imgContainer}>
          <div className={styles.images}>
            <Image src={"/html.png"} width={30} height={30} className={styles.img} alt="html"/>
            <Image src={"/css.png"} width={30} height={30} className={styles.img} alt="css"/>
            <Image src={"/javaScript.png"} width={30} height={30} className={styles.img} alt="javaScript"/>
            <Image src={"/react.png"} width={35} height={30} className={styles.img} alt="react"/>
            <Image src={"/tailwind.png"} width={30} height={30} className={styles.img} alt="tailwind"/>
            <Image src={"/next.png"} width={50} height={30} className={styles.img} alt="next"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;