import * as React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import PropTypes from "prop-types";

import Hamburger from "./hamburger";
import useMediaQuery from "./hooks/useMediaQuery";

import { Link } from "gatsby";
import * as styles from "./header.module.scss";

const breakpointTablet = 768;

const Header = ({ siteTitle }) => {
  const home = useRef(null);
  const readme = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    window.location.pathname == "/" && home.current.classList.add("grayed-out");
    window.location.pathname == "/readme/" &&
      readme.current.classList.add("grayed-out");
    window.location.pathname == "/app/" &&
      app.current.classList.add("grayed-out");
  }, []);

  const isNarrow = useMediaQuery(`(max-width: ${breakpointTablet}px)`);

  return (
    <>
      <header>
        <div className={styles.container}>
          <Link to="/">
            <h1 id="brand" className={styles.h1}>
              Prove <br /> Me <br /> Wrong
            </h1>
          </Link>
          {isNarrow && <Hamburger className={styles.hamburger} />}
          <div className={styles.overlay} id="overlay">
            <nav className={`${styles.nav} overlay-menu`}>
              <h1 style={{ display: "none" }}>Navigation</h1>
              <ul>
                <li ref={home}>
                  <Link to="/">HOME</Link>
                </li>

                <li ref={readme}>
                  <Link to="/readme/">README</Link>
                </li>

                <li ref={app}>
                  <Link to="/app/">APP</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
