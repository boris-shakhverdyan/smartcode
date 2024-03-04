import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { BsFillEnvelopePaperHeartFill, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import classes from "./Footer.module.css";

const Footer = () => {
    const { t } = useTranslation("menu");

    return (
        <div className={`mt-20 ${classes.footer_container}`}>
            <footer className={`container ${classes.footer}`}>
                <div className={classes.logo_container}>
                    <img src={logo} alt="logo" />
                    <p>{t(`footer.about`)}</p>
                </div>
                <div className={classes.about_container}>
                    <h3>{t(`footer.contact`)}</h3>
                    <address>
                        <div className={classes.about_phone}>
                            <BsFillTelephoneFill />
                            <ul>
                                <Link to={"tel:+374 41 435344"}>
                                    <li>+374 41 435344</li>
                                </Link>
                                <Link to={"tel:+374 95 435341"}>
                                    <li>+374 95 435341</li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classes.about_email}>
                            <BsFillEnvelopePaperHeartFill />
                            <ul>
                                <Link target="_blank" to={"mailto:support@smartcode.am"}>
                                    <li>support@smartcode.am</li>
                                </Link>
                                <Link target="_blank" to={"mailto:hr@smartcode.am"}>
                                    <li>hr@smartcode.am</li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classes.about_location}>
                            <ImLocation2 />
                            <ul>
                                <Link target="_blank" to={"https://maps.app.goo.gl/mCPUXRZL42V7RizHA"}>
                                    <li>{t(`footer.address.first`)}</li>
                                </Link>
                                <Link target="_blank" to={`https://maps.app.goo.gl/iFajxCgt7ftz9dZE7`}>
                                    <li>{t(`footer.address.second`)}</li>
                                </Link>
                            </ul>
                        </div>
                    </address>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
