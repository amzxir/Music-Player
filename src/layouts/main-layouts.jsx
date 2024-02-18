import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/app/app-context";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Play from "../components/playing/playing";

const MainLayouts = () => {

    const { theme, currentMusic } = useAppContext();

    return (
        <div id={theme}>
            <Navbar />
            <Sidebar />
            <Outlet />
            {
                !!currentMusic ? <Play /> : ''
            }
        </div>
    )
}

export default MainLayouts;