import * as React from "react";
import styles from "./experience.module.scss";

export interface IProps {}

export interface IState {}

class Experience extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.experiencePage}>
        <article>
          <h3>
            <span className={styles.pink}> _nology </span> - Junior Developer
          </h3>
          <p>February 2019 - May 2019</p>
          <p>
            Completing a 12 week intensive course which focused on teaching
            transferable skills. Working in HTML, CSS, Sass, JavaScript,
            React.js, firebase (using databases and file storage), git and
            GitHub. Also had the chance to put these skills into practice by
            working on a client project in an agile environment.
          </p>
        </article>
        <article>
          <h3>
            <span className={styles.pink}>GoAppy </span>- Graphic Designer
          </h3>
          <p>
            Part of a Young Enterprise scheme. Releasing an app on the app
            store, designed the graphics for the app as well as helping to run
            trade fairs and competing against other companies by preparing
            speeches and trade stands. The app got over 20,000 downloads on the
            app store.
          </p>
        </article>
        <article>
          <h3>
            <span className={styles.pink}>Hengrove Park Leisure Centre </span>-
            Lifeguard
          </h3>
          <p>2014 - 2018</p>
          <p>
            Worked as a Lifeguard which primarily involved keeping the public
            safe whilst using the facilities. This includes: taking control and
            using first aid when needed, dealing with the public, setting up
            sports areas ready for public use and keeping the poolside and other
            wet areas clean and free of hazards.
          </p>
        </article>
        <article>
          <h3>
            <span className={styles.pink}>Jayne Clayton & Co </span>ß - Work
            experience
          </h3>
          <p>
            Helping with setting up show homes, phoning and ordering fabrics
            etc. Filing and general office duties. Working in shop dealing with
            customers and designing a display within shop. Making products.
          </p>
        </article>
      </section>
    );
  }
}

export default Experience;
