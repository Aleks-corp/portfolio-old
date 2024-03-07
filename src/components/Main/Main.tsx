import styles from "./Main.module.css";
import { LuGithub } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import photo from "../../assets/my-photo.jpg";
export function Main() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__bg}></div>
        <div className={styles.hero__container}>
          <div className={styles.hero__text__container}>
            <h1 className={styles.hidden}>Portfolio</h1>
            <h2 className={styles.hero__text}>Hello World</h2>
            <h2 className={styles.hero__text}>
              I'm{" "}
              <span className={styles.hero__text__main}>Oleksandr Haran</span>.
            </h2>
            <h2
              className={styles.hero__text__accent}
            >{`<FullStack web developer />`}</h2>
          </div>
          <div className={styles.hero__img__container}>
            <img className={styles.hero__img} src={photo} width="275" />
            <div className={styles.background__image__blue}></div>
            <div className={styles.background__image__green}></div>
          </div>
          <div className={styles.social__container}>
            <a href="https://github.com/Aleks-corp" target="_blank">
              <LuGithub />
            </a>
            <a href="https://www.facebook.com/aleks.root.corp/" target="_blank">
              <PiFacebookLogo />
            </a>
            <a
              href="https://www.linkedin.com/in/aleks-haran-dev"
              target="_blank"
            >
              <PiLinkedinLogo />
            </a>

            <div className={styles.social__line}></div>
          </div>
          <div className={styles.mail__container}>
            <a href="mailto:aleks.haran.dev@gmail.com">
              <span className={styles.mail__text}>
                aleks.haran.dev@gmail.com
              </span>
            </a>
            <LuMail />
            <div className={styles.mail__line}></div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__container">
          <h2>ABOUT</h2>
        </div>
      </section>
    </>
  );
}
