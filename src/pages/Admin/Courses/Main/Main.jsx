import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, fetchCourseById, saveCourse } from "../../../../store/slices/courses/coursesApi";
import classes from "./Main.module.css";
import FormInputText from "../../../../components/common/FormInputText/FormInputText";
import { selectEditableCourse } from "../../../../store/slices/courses/coursesSlice";
import { useEffect } from "react";
import FormInputNumber from "../../../../components/common/FormInputNumber/FormInputNumber";
import SubmitButton from "../../../../components/common/SubmitButton/SubmitButton";

const Main = ({ action = "create" }) => {
    const { id } = useParams();
    const course = useSelector(selectEditableCourse);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (action === "update") {
            dispatch(fetchCourseById(id));
        }
    }, [id, dispatch, action]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const shortTitle = e.target.shortTitle.value.trim();
        const title = e.target.title.value.trim();
        const subtitle = e.target.subtitle.value.trim();
        const name = e.target.name.value.trim();
        const duration = e.target.duration.value.trim();
        const price = e.target.price.value.trim();
        const smallPoster = e.target.smallPoster.value.trim();
        const bigPoster = e.target.bigPoster.value.trim();
        const mainTitle = e.target.mainTitle.value.trim();
        const stage1 = e.target.stage1.value.trim();
        const stage2 = e.target.stage2.value.trim();
        const stage3 = e.target.stage3.value.trim();
        const stage4 = e.target.stage4.value.trim();
        const content = e.target.content.value.trim();
        const offer = e.target.offer.value.trim();

        if (
            name &&
            duration &&
            price &&
            smallPoster &&
            bigPoster &&
            shortTitle &&
            title &&
            subtitle &&
            mainTitle &&
            content &&
            offer
        ) {
            if (action === "update" && id) {
                dispatch(
                    saveCourse({
                        id,
                        name,
                        duration,
                        price,
                        smallPoster,
                        bigPoster,
                        shortTitle,
                        title,
                        subtitle,
                        mainTitle,
                        content,
                        offer,
                        stage1,
                        stage2,
                        stage3,
                        stage4,
                    })
                );
            } else if (action === "create") {
                dispatch(
                    addCourse({
                        name,
                        duration,
                        price,
                        smallPoster,
                        bigPoster,
                        shortTitle,
                        title,
                        subtitle,
                        mainTitle,
                        content,
                        offer,
                        stage1,
                        stage2,
                        stage3,
                        stage4,
                    })
                );
            }
        }

        navigate("/dashboard/courses");
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
                <FormInputText
                    name="shortTitle"
                    placeholder={"Short title"}
                    defaultValue={course?.shortTitle}
                    required
                />
                <FormInputText name="title" defaultValue={course?.title} required />
                <FormInputText name="subtitle" defaultValue={course?.subtitle} required />
                <FormInputText name="name" placeholder="Route" defaultValue={course?.name} required />
                <FormInputNumber name="duration" defaultValue={course?.duration} required />
                <FormInputNumber name="price" defaultValue={course?.price} required />
                <FormInputText
                    name="smallPoster"
                    placeholder="Small poster link"
                    defaultValue={course?.posters.small}
                    required
                />
                <FormInputText
                    name="bigPoster"
                    placeholder="Big poster link"
                    defaultValue={course?.posters.big}
                    required
                />
                <p>Description</p>
                <FormInputText
                    name="mainTitle"
                    placeholder="Main title"
                    defaultValue={course?.description.mainTitle}
                    required
                />
                <p>Stages</p>
                <FormInputText
                    name="stage1"
                    placeholder="Stage 1"
                    defaultValue={course?.description.stages.first}
                />
                <FormInputText
                    name="stage2"
                    placeholder="Stage 2"
                    defaultValue={course?.description.stages.second}
                />
                <FormInputText
                    name="stage3"
                    placeholder="Stage 3"
                    defaultValue={course?.description.stages.third}
                />
                <FormInputText
                    name="stage4"
                    placeholder="Stage 4"
                    defaultValue={course?.description.stages.fourth}
                />
                <FormInputText name="content" defaultValue={course?.description.content} required />
                <FormInputText name="offer" defaultValue={course?.description.offer} required />
                <SubmitButton>Save</SubmitButton>
            </form>
        </div>
    );
};

export default Main;
