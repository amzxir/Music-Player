import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/main-layouts";
import Home from "./components/home/home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])

export default router;