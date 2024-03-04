import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPartner, fetchPartner, savePartner } from "../../../../store/slices/partners/partnersApi";
import { selectEditablePartner } from "../../../../store/slices/partners/partnersSlice";
import classes from "./Main.module.css";
import FormInputText from "../../../../components/common/FormInputText/FormInputText";
import SubmitButton from "../../../../components/common/SubmitButton/SubmitButton";

const Main = ({ action = "create" }) => {
    const { id } = useParams();
    const partner = useSelector(selectEditablePartner);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (action === "update") {
            dispatch(fetchPartner(id));
        }
    }, [id, dispatch, action]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const website = e.target.website.value.trim();
        const logo = e.target.logo.value.trim();

        if (title && website && logo) {
            if (
                action === "update" &&
                id &&
                (partner.title !== title || partner.website !== website || partner.logo !== logo)
            ) {
                dispatch(
                    savePartner({
                        id,
                        title,
                        website,
                        logo,
                    })
                );
            } else if (action === "create") {
                dispatch(
                    addPartner({
                        title,
                        website,
                        logo,
                    })
                );
            }

            navigate("/dashboard/partners");
        }
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
                <FormInputText name="title" defaultValue={partner?.title} required />
                <FormInputText name="website" defaultValue={partner?.website} required />
                <FormInputText name="logo" placeholder="Logo link" defaultValue={partner?.logo} required />
                <SubmitButton>Save</SubmitButton>
            </form>
        </div>
    );
};

export default Main;
