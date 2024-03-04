import { useDispatch, useSelector } from "react-redux";
import classes from "./Modal.module.css";
import { hideModal, selectModal } from "../../store/slices/app/appSlice";

const Modal = () => {
    const { title, body, actionBtn } = useSelector(selectModal);
    const dispatch = useDispatch();

    const cancelHandle = () => {
        dispatch(hideModal());
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.modal}>
                <header>
                    <h2>{title}</h2>
                </header>
                <main>
                    <p>{body}</p>
                </main>
                <footer>
                    <button
                        className={`${classes.btn} ${classes["btn_" + actionBtn.type]}`}
                        onClick={actionBtn.callback}
                    >
                        {actionBtn.text}
                    </button>
                    <button className={`${classes.btn} ${classes.btnDefault}`} onClick={cancelHandle}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
