import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPartnersList } from "../../../../store/slices/partners/partnersSlice";
import { deletePartner, fetchPartners } from "../../../../store/slices/partners/partnersApi";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import classes from "./List.module.css";
import { Link } from "react-router-dom";
import { hideModal, showModal } from "../../../../store/slices/app/appSlice";

const List = () => {
    const partners = useSelector(selectPartnersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPartners());
    }, [dispatch]);

    const deleteHandle = (id) => {
        dispatch(
            showModal({
                title: "Confirmation",
                body: "Do you really want to remove it?",
                actionBtnText: "Delete",
                actionBtnCallback: () => {
                    dispatch(deletePartner(id)).then(() => dispatch(hideModal()));
                },
                actionBtnType: "danger",
            })
        );
    };

    return (
        <div className={`section ${classes.partners}`}>
            <header>
                <Link to={"/dashboard/partners/new"} className={classes.addBtn}>
                    New
                </Link>
            </header>
            <table>
                <thead>
                    <tr>
                        <th width={50}>ID</th>
                        <th width={300}>Title</th>
                        <th>Logo</th>
                        <th>Website</th>
                        <th width={90}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {partners.map(({ id, title, logo, website }) => (
                        <tr key={id} className={classes.partner}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>
                                <img src={logo} alt={title} />
                            </td>
                            <td className={classes.website}>
                                <a href={website} target="_blank" rel="noreferrer">
                                    {website}
                                </a>
                            </td>
                            <td>
                                <div className={classes.actions}>
                                    <Link
                                        to={`/dashboard/partners/${id}`}
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
