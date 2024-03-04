import AboutMain from "../../components/AboutMain/AboutMain";
import classes from "./About.module.css";

import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import certificate from "../../assets/images/1.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation("menu");
    return (
        <div className={classes.about_page}>
            <div className={classes.about_container}>
                <AboutMain
                    title={t(`about.aboutMain.aboutTitle`)}
                    firstP={t(`about.aboutMain.aboutBody`)}
                    secondP={t(`about.aboutMain.aboutBodySecond`)}
                    video={video1}
                />
                <AboutMain
                    title={t(`about.aboutGoals.goalTitle`)}
                    firstP={t(`about.aboutGoals.goalBody`)}
                    secondP={t(`about.aboutGoals.goalBodySecond`)}
                    video={video2}
                />
                <AboutMain
                    title={t(`about.aboutOffer.title`)}
                    firstP={t(`about.aboutOffer.certificate`)}
                    secondP={t(`about.aboutOffer.workOffer`)}
                    image={certificate}
                />
            </div>
        </div>
    );
};

export default About;
