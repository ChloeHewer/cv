import * as React from "react";
import styles from "./cv-draft.module.scss";

export interface IProps {}

export interface IState {}

class Cv extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.cvFrame}>
        <section className={styles.cv}>
          <address>
            <p>Bristol BS7 0JQ</p>
            <p className={styles.pink}>07306 288869 </p>
            <p className={styles.pink}>HewerChloe@yahoo.com</p>
          </address>
          <h1 className={styles.name}>Chloe Hewer</h1>

          <h3>PERSONAL SUMMARY</h3>
          <p>
            A highly focused and inquisitive individual who is enthusiastic
            about working within the tech industry. Has gained transferable
            skills whilst working with _nology on real projects with partner
            organisations, working in an agile way with continuous integration.
            With intrigue for technology gained whilst helping to run a company
            with the young enterprise scheme- taking on a role as a graphic
            designer. Is able to follow instructions as proven during the time
            of gaining work experience with an interior design company.
          </p>
          <h3>SKILLS</h3>
          <section className={styles.skills}>
            <ul>
              <li>html5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript/ES6</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>Github Flow</li>
              <li>Firebase</li>
              <li>Redux</li>
              <li>React</li>
              <li>Jquery</li>
            </ul>
            <ul>
              <li>Responsive Design</li>
              <li>Unity</li>
              <li>Maya</li>
              <li>Agile workflow</li>
            </ul>
          </section>
          <h3>EXPERIENCE</h3>
          <article>
            <p>
              <span className={styles.pink}> _nology </span> - Junior Developer
            </p>
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
            <p>
              <span className={styles.pink}>GoAppy </span>- Graphic Designer
            </p>
            <p>
              Part of a Young Enterprise scheme. Releasing an app on the app
              store, designed the graphics for the app as well as helping to run
              trade fairs and competing against other companies by preparing
              speeches and trade stands. The app got over 20,000 downloads on
              the app store.
            </p>
          </article>
          <article>
            <p>
              <span className={styles.pink}>Hengrove Park Leisure Centre </span>
              - Lifeguard
            </p>
            <p>2014 - 2018</p>
            <p>
              Worked as a Lifeguard which primarily involved keeping the public
              safe whilst using the facilities. This includes: taking control
              and using first aid when needed, dealing with the public, setting
              up sports areas ready for public use and keeping the poolside and
              other wet areas clean and free of hazards.
            </p>
          </article>
          <article>
            <p>
              <span className={styles.pink}>Jayne Claytom & Co </span>ß - Work
              experience
            </p>
            <p>
              Helping with setting up show homes, phoning and ordering fabrics
              etc. Filing and general office duties. Working in shop dealing
              with customers and designing a display within shop. Making
              products.
            </p>
          </article>
          <h3>EDUCATION</h3>
          <article>
            <p>
              <span className={styles.pink}>City Of Bristol College</span> -
              BTEC
            </p>
            <p>
              BTEC: Interactive Media- D*DD (Distinction*, Distinction,
              Distinction)
            </p>
          </article>
          <article>
            <p>
              <span className={styles.pink}>Chew Valley School</span> - GCSE
            </p>
            <p>
              GCSE: Product design- C, IT- distinction, Chemistry-C, Physics-C,
              Biology-C, English Literature-C, English Language-C, Math’s-B
            </p>
          </article>
          <h3>ADDITIONAL INFORMATION</h3>
          <article>
            <p className={styles.pink}>Adult Helper</p>
            <p>
              21st Bristol Scout Group, Whitchurch, Bristol. Helping out with a
              cub section by organising games, helping with badge work and
              liaising with leaders to help organise camps and days out.
              Long-standing member of the club from cub to young leader, to
              being an adult helper.
            </p>
          </article>
          <article>
            <p className={styles.pink}>Duke of Edinburgh</p>
            <p>
              Completed an Expedition despite sunstroke showing a determination
              in mind-set. Completed a year of Voluntary work as well as
              completing a physical challenge.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Cv;
