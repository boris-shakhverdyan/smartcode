import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPartnersList } from "../../store/slices/partners/partnersSlice";
import { fetchPartners } from "../../store/slices/partners/partnersApi";

import classes from "./Partners.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t } = useTranslation("menu");

    const list = useSelector(selectPartnersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPartners());
    }, [dispatch]);

    return (
        <div className={classes.partners}>
            <h3 className={classes.title}>{t(`partners.mainTitle`)}</h3>
            <div className={classes.partners_slide}>
                {list.map((partner) => {
                    return (
                        <Link
                            key={partner.id}
                            target="_blank"
                            to={partner.website}
                        >
                            <div className={classes.partner}>
                                <img
                                    src={partner.logo}
                                    alt={partner.title}
                                    title={partner.title}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className={classes.partners_slide}>
                {list.map((partner) => (
                    <Link key={partner.id} target="_blank" to={partner.website}>
                        <div className={classes.partner}>
                            <img
                                src={partner.logo}
                                alt={partner.title}
                                title={partner.title}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Partners;
