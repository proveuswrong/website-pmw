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
          Claim Something. <br/>Put a Bounty. <br/>Invite Others to Prove You Wrong.
        </h1>

        <Link to="/readme/" className="hero mt-3">
          What?
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
