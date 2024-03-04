import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import { selectModalStatus } from "../../store/slices/app/appSlice";

const Layout = () => {
    const isModalShow = useSelector(selectModalStatus);

    return (
        <div id="app">
            <Menu />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
            <ScrollArrow />
            {isModalShow && <Modal />}
        </div>
    );
};

export default Layout;
