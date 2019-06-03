import * as React from 'react';
import styles from "./summary.module.scss";

export interface IProps {

}

export interface IState {

}

class Summary extends React.Component<IProps, IState> {
    // state = { : }
    render() {
        return (
            <section className={styles.summary}>
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
            </section>
        );
    }
}

export default Summary;