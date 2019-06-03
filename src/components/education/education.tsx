import * as React from 'react';
import styles from "./education.module.scss";

export interface IProps {

}

export interface IState {

}

class Education extends React.Component<IProps, IState> {
    // state = { :  }
    render() {
        return (
            <section className={styles.education}>
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
            </section>
        );
    }
}

export default Education;