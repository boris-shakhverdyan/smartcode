import { useRef } from "react";
import classes from "./Minimap.module.css";

const Minimap = ({ current, setCurrent, reasons, theme = "dark" }) => {
    const activeItem = useRef();

    if (activeItem.current) {
        activeItem.current.style.top = activeItem.current.offsetWidth * current + current * 10 + "px";
    }

    return (
        <div className={`${["light", "dark"].includes(theme) && classes[theme]} ${classes.minimap}`}>
            <div className={classes.list}>
                <div ref={activeItem} className={`${classes.item} ${classes.active}`}></div>
                {reasons.map((reason, index) => (
                    <div
                        key={reason.id}
                        className={`${classes.item}`}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Minimap;
