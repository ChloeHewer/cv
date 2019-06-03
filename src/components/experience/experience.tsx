import * as React from 'react';
import styles from "./experience.module.scss";
import { IExperience } from "../../container/experiencePage/interface";

export interface IProps {
    experience: IExperience;
}

export interface IState {
    isShown: boolean;
}

class Experience extends React.Component<IProps, IState> {
    public state = { isShown: false }
    render() {
        const rotateStyle = this.state.isShown ? styles.cardRotated : "";
        return (
            <div className={styles.scene}>
                <article onClick={this.handleCardClick} className={`${rotateStyle} ${styles.card}`}>
                    <div className={styles.cardFront}>
                        <span className={styles.title}> {this.props.experience.name} </span>
                        <p>{this.props.experience.role}</p>
                        <p className={styles.smallWriting}>{this.props.experience.date}</p>
                        <div className={styles.moreInfo}>click for more information</div>
                    </div>

                    <div className={styles.cardBack}>
                        <div>
                            <p>
                                {this.props.experience.information}
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        );
    }
    private handleCardClick = (): void => {
        this.setState({ isShown: !this.state.isShown });
    };
}

export default Experience;