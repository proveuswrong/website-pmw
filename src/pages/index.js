import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./index.module.scss";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className={styles.centeredText}>
      <h1 id="slogan" className={`hero ` + styles.h1}>
        COMING {"  "} SOON!
      </h1>
    </div>
  </>
);

export default IndexPage;
