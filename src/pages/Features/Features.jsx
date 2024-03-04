import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Minimap from "../../components/Minimap/Minimap";
import classes from "./Features.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFeaturesList } from "../../store/slices/features/featuresSlice";
import { fetchFeatures } from "../../store/slices/features/featuresApi";
import { useTranslation } from "react-i18next";

const Features = ({ theme = "dark" }) => {
    const { t } = useTranslation("features");

    const list = useSelector(selectFeaturesList);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);
    const listRef = useRef();
    const currentRef = useRef();

    useEffect(() => {
        dispatch(fetchFeatures());
    }, [dispatch]);

    if (listRef.current && currentRef.current) {
        listRef.current.scrollTo({
            top: currentRef.current.offsetHeight * current,
            behavior: "smooth",
        });
    }

    const detectScroll = (e) => {
        let deltaY = e.deltaY;
        if (deltaY < 0) {
            setCurrent((current) => (current - 1 < 0 ? current : current - 1));
        } else if (deltaY > 0) {
            setCurrent((current) => (current + 1 > list.length - 1 ? current : current + 1));
        }
    };

    return (
        <div
            className={classNames(classes.features, {
                [classes[theme]]: ["dark", "light"].includes(theme),
            })}
        >
            <div className={`container ${classes.wrapper} `}>
                <div ref={listRef} className={classes.list} onWheel={detectScroll}>
                    {list.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={classes.section}
                            ref={current === index ? currentRef : null}
                        >
                            <div className={classes.line}>
                                <div className={classes.iconWrapper}>
                                    <img
                                        src={
                                            feature.icon.startsWith("http")
                                                ? feature.icon
                                                : `/images/features/${feature.icon}`
                                        }
                                        alt={t(feature.title)}
                                    />
                                </div>
                            </div>
                            <div className={classes.content}>
                                <h1>{t(feature.title)}</h1>
                                <p>{t(feature.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Minimap reasons={list} current={current} setCurrent={setCurrent} theme={theme} />
            </div>
        </div>
    );
};

export default Features;
