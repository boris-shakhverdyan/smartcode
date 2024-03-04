import hy from "../../assets/images/flags/arm.svg";
import ru from "../../assets/images/flags/ru.svg";
import en from "../../assets/images/flags/gb (2).svg";
import classes from "./Flags.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLang, selectLang } from "../../store/slices/app/appSlice";

const Flags = () => {
    const flags = [hy, ru, en];
    const currentLang = useSelector(selectLang);
    const dispatch = useDispatch();

    return (
        <div className={classes.translate}>
            <div className={classes.lngBar}>
                <img src={flags[currentLang]} alt="lang" onClick={() => dispatch(changeLang())} />
            </div>
        </div>
    );
};

export default Flags;
