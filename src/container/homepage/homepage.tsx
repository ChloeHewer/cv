import * as React from "react";
import styles from "./homepage.module.scss";

export interface IProps {}

export interface IState {}

class HomePage extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.homepage}>
        <p className={styles.name}>Chloe Hewer</p>
        <p className={styles.aboutMe}> Junior software developer</p>
        <div className={styles.pictureFrame} />
      </section>
    );
  }
}

export default HomePage;
