import * as React from 'react';
import styles from "./mainPage.module.scss";
import Experience from "../../components/experience/experience";
import { IExperience } from "./interface";

export interface IProps {

}

export interface IState {

}

class ExperiencePage extends React.Component<IProps, IState> {
    // state = { :  }
    render() {
        const experience: IExperience[] = [
            {
                name: "_nology",
                role: "Junior Developer",
                date: "February 2019 - May 2019",
                information: "Completing a 12 week intensive course which focused on teaching transferable skills. Working in HTML, CSS, Sass, JavaScript, React.js, firebase, git and GitHub. Also had the chance to put these skills into practice by working on a client project in an agile environment."
            },
            {
                name: "goAppy",
                role: "Graphic Designer",
                date: "2014",
                information: " Part of a Young Enterprise scheme. Releasing an app on the app store, designed the graphics for the app as well as helping to run trade fairs and competing against other companies by preparing speeches and trade stands. The app got over 20,000 downloads on the app store."
            },
            {
                name: "Hengrove Park Leisure Centre",
                role: "Lifeguard",
                date: "2014 - 2018",
                information: "Worked as a Lifeguard which primarily involved keeping the public safe whilst using the facilities. This includes: taking control and using first aid when needed, dealing with the public, setting up sports areas ready for public use and keeping the poolside and other wet areas clean and free of hazards."
            },

            {
                name: "Jayne Clayton & Co",
                role: "Work experience",
                date: "2014 - 2018",
                information: " Helping with setting up show homes, phoning and ordering fabrics etc. Filing and general office duties. Working in shop dealing with customers and designing a display within shop. Making products."
            }
        ]
        return (
            <section className={styles.experience}>
                <div><h3>EXPERIENCE</h3></div>
                {experience.map((card, index) => (
                    <Experience experience={card} />
                ))}
            </section>
        );
    }
}

export default ExperiencePage;