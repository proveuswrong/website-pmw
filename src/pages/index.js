import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  console.debug(`Build time: ${site.buildTime}`);

  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.index}>
        <h1 id="slogan" className={`hero ` + styles.h1}>
          We are cooking something cool. Please wait...
        </h1>

        <a href='https://proveuswrong.io' className="hero mt-3">
          Who is <i>we</i>?
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
