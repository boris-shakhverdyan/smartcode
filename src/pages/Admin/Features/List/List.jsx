import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { selectFeaturesList } from "../../../../store/slices/features/featuresSlice";
import { deleteFeature, fetchFeatures } from "../../../../store/slices/features/featuresApi";
import { hideModal, showModal } from "../../../../store/slices/app/appSlice";
import classes from "./List.module.css";

const List = () => {
    const features = useSelector(selectFeaturesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFeatures());
    }, [dispatch]);

    const deleteHandle = (id) => {
        dispatch(
            showModal({
                title: "Confirmation",
                body: "Do you really want to remove it?",
                actionBtnText: "Delete",
                actionBtnCallback: () => {
                    dispatch(deleteFeature(id)).then(() => dispatch(hideModal()));
                },
                actionBtnType: "danger",
            })
        );
    };

    return (
        <div className={`section ${classes.features}`}>
            <header>
                <Link to={"/dashboard/features/new"} className={classes.addBtn}>
                    New
                </Link>
            </header>
            <table>
                <thead>
                    <tr>
                        <th width={50}>ID</th>
                        <th width={300}>Title</th>
                        <th>Description</th>
                        <th>icon</th>
                        <th width={90}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map(({ id, title, description, icon }) => (
                        <tr key={id} className={classes.feature}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>
                                <img
                                    src={icon && icon.startsWith("http") ? icon : `/images/features/${icon}`}
                                    alt={title}
                                />
                            </td>
                            <td>
                                <div className={classes.actions}>
                                    <Link
                                        to={`/dashboard/features/${id}`}
                                        className={`${classes.btn} ${classes.editBtn}`}
                                    >
                                        <AiFillEdit />
                                    </Link>
                                    <button
                                        className={`${classes.btn} ${classes.removeBtn}`}
                                        onClick={() => deleteHandle(id)}
                                    >
                                        <BsFillTrashFill />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
