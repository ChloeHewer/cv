import * as React from "react";
import styles from "./homepage.module.scss";
import me from "../../images/me.jpeg";

export interface IProps { }

export interface IState { }

class HomePage extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <React.Fragment>
        <span id="homepage"></span>
        <section className={styles.about}>
          <div className={styles.pictureFrame}>
            <img className={styles.picture} src={me} />
          </div>
          <div className={styles.information}>
            <h1 className={styles.name}>Chloe Hewer</h1>
            <p>Junior SoftWare Developer</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
