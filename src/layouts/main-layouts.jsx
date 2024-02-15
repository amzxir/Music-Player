import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/app/app-context";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const MainLayouts = () => {

    const { theme } = useAppContext();

    return(
        <div id={theme}>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default MainLayouts;