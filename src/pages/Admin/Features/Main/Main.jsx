import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Main.module.css";
import { selectEditableFeature } from "../../../../store/slices/features/featuresSlice";
import { addFeature, fetchFeature, saveFeature } from "../../../../store/slices/features/featuresApi";
import FormInputText from "../../../../components/common/FormInputText/FormInputText";
import SubmitButton from "../../../../components/common/SubmitButton/SubmitButton";

const Main = ({ action = "create" }) => {
    const { id } = useParams();
    const feature = useSelector(selectEditableFeature);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (action === "update") {
            dispatch(fetchFeature(id));
        }
    }, [id, dispatch, action]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const description = e.target.description.value.trim();
        const icon = e.target.icon.value.trim();

        if (title && description && icon) {
            if (
                action === "update" &&
                id &&
                (feature.title !== title || feature.description !== description || feature.icon !== icon)
            ) {
                dispatch(
                    saveFeature({
                        id,
                        title,
                        description,
                        icon,
                    })
                );
            } else if (action === "create") {
                dispatch(
                    addFeature({
                        title,
                        description,
                        icon,
                    })
                );
            }

            navigate("/dashboard/features");
        }
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
                <FormInputText name="title" defaultValue={feature?.title} required />
                <FormInputText name="description" defaultValue={feature?.description} required />
                <FormInputText name="icon" placeholder="Icon link" defaultValue={feature?.icon} required />
                <SubmitButton>Save</SubmitButton>
            </form>
        </div>
    );
};

export default Main;
