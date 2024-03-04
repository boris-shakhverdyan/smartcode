import { useTranslation } from "react-i18next";
import classes from "./Form.module.css";

const FormBox = () => {
    const { t } = useTranslation(`menu`);
    // const [images, setImages] = useState([
    //     js,
    //     c_sharp,
    //     node_js,
    //     windows,
    //     laptop,
    // ]);

    // useEffect(() => {
    //     setInterval(() => {
    //         setImages((images) => [...images]);
    //     }, 3000);
    // }, []);

    return (
        <div className={classes.form_container}>
            {/* <div className={classes.icons}>
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt=""
                        className={`${classes.icon} ${classes["icon" + index]}`}
                        style={{
                            top: random(0, 100) + "%",
                            left: random(0, 100) + "%",
                        }}
                    />
                ))}
            </div> */}
            <h2>{t(`formBox.signin`)}</h2>
            <form>
                <input type="text" name="" placeholder={t(`formBox.name`)} />
                <input type="text" name="" placeholder={t(`formBox.eMail`)} />
                <input type="tel" name="" placeholder={t(`formBox.phone`)} />
                <button type="submit">{t(`formBox.begin`)}</button>
            </form>
        </div>
    );
};

export default FormBox;
