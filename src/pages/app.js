import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./app.module.scss";

const App = () => (
  <Layout>
    <Seo title="App" />
    <div className={styles.about}>
      <h1> About the Application </h1>
      <p>
        Bla bla and bla. Mumbo jumbo about the application here. Requirements to run maybe? On which networks it work? I am going to figure it out later.
      </p>
    </div>
  </Layout>
);

export default App;
