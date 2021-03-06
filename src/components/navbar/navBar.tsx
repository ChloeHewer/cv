import * as React from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps { }

export interface IState {
  isNavHidden: boolean;
}

class NavBar extends React.Component<IProps, IState> {
  public state = { isNavHidden: true };
  render() {
    const navLinkHide = this.state.isNavHidden ? styles.navHide : styles.navShow;
    return (
      <React.Fragment>
        <section className={styles.navbar}>
          <span
            className={styles.nav}
            onClick={() =>
              this.setState({ isNavHidden: !this.state.isNavHidden })
            }
          >
            <span className={`${"fas"} ${"fa-bars"} ${styles.bars}`} />
          </span>
          <div className={styles.links}>
            <a
              href="https://github.com/ChloeHewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/chloe-hewer-587639181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin" />
            </a>
          </div>
        </section>
        <section className={`${styles.navLinks} ${navLinkHide}`}>
          <ul onClick={this.handleNavClick}>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/summary"><li>Personal Summary</li></NavLink>
            <NavLink to="/skills"><li>Skills</li></NavLink>
            <NavLink to="/experience"><li>Experience</li></NavLink>
            <NavLink to="/education"><li>Education</li></NavLink>
            <li>Additional Information</li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
  private handleNavClick = () => {
    this.setState({ isNavHidden: !this.state.isNavHidden })
  }
}

export default NavBar;
