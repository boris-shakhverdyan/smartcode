import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { hideModal, showModal } from "../../../../store/slices/app/appSlice";
import { selectCoursesList } from "../../../../store/slices/courses/coursesSlice";
import { deleteCourse, fetchCourses } from "../../../../store/slices/courses/coursesApi";
import classes from "./List.module.css";

const List = () => {
    const courses = useSelector(selectCoursesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const deleteHandle = (id) => {
        dispatch(
            showModal({
                title: "Confirmation",
                body: "Do you really want to remove it?",
                actionBtnText: "Delete",
                actionBtnCallback: () => {
                    dispatch(deleteCourse(id)).then(() => dispatch(hideModal()));
                },
                actionBtnType: "danger",
            })
        );
    };

    return (
        <div className={`section ${classes.courses}`}>
            <header>
                <Link to={"/dashboard/courses/new"} className={classes.addBtn}>
                    New
                </Link>
            </header>
            <table>
                <thead>
                    <tr>
                        <th width={50}>ID</th>
                        <th width={300}>Short title</th>
                        <th>Route</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th width={90}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(({ id, shortTitle, name, duration, price }) => (
                        <tr key={id} className={classes.course}>
                            <td>{id}</td>
                            <td>{shortTitle}</td>
                            <td>{name}</td>
                            <td>{duration}</td>
                            <td>{price}</td>
                            <td>
                                <div className={classes.actions}>
                                    <Link
                                        to={`/dashboard/courses/${id}`}
                                        disabled
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
