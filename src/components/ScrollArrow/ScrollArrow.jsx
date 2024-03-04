import React, { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import classes from "./ScrollArrow.module.css";
const ScrollArrow = () => {
    const arrowRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (arrowRef.current) {
                arrowRef.current.classList[window.scrollY ? "add" : "remove"](
                    classes.into_view
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, scrollBehavior: "smooth" });
    };

    return (
        <div
            className={classes.arrow}
            ref={arrowRef}
            onClick={handleScrollToTop}
        >
            <AiOutlineArrowUp />
        </div>
    );
};

export default ScrollArrow;
