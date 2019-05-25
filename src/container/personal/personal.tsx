import * as React from "react";
import styles from "./personal.module.scss";
import me from "../../images/me.jpeg";

export interface IProps {}

export interface IState {}

class Summary extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.summaryPage}>
        <div className={styles.pictureFrame} />
        <p className={styles.summary}>
          A highly focused and inquisitive individual who is enthusiastic about
          working within the tech industry. Has gained transferable skills
          whilst working with _nology on real projects with partner
          organisations, working in an agile way with continuous integration.
          With intrigue for technology gained whilst helping to run a company
          with the young enterprise scheme- taking on a role as a graphic
          designer. Is able to follow instructions as proven during the time of
          gaining work experience with an interior design company.
        </p>
      </div>
    );
  }
}

export default Summary;
