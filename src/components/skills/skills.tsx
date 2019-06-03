import * as React from 'react';
import styles from "./skills.module.scss";

export interface IProps {

}

export interface IState {

}

class Skills extends React.Component<IProps, IState> {
    // state = { :  }
    render() {
        return (
            <section id="skills" className={styles.skills}>
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
        );
    }
}

export default Skills;