import * as React from "react";
import * as styles from "./footer.module.scss";
import Github from "../images/github.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedin.svg";

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.social}>
        <a
          href="https://github.com/proveuswrong/webapp-pmw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ display: "none" }}>Link to GitHub profile</span>
          <Github aria-hidden="true" id="github" />
        </a>

        <a
          href="https://twitter.com/ProveMeWrongIO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ display: "none" }}>Link to Twitter profile</span>
          <Twitter aria-hidden="true" id="twitter" />
        </a>
      </div>
      <small>Copyright {new Date().getFullYear()} Prove Us Wrong</small>
    </div>
  </footer>
);

export default Footer;
