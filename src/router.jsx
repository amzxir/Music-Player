import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/main-layouts";
import Musics from "./pages/music";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        children:[
            {
                index:true,
                element:<Musics/>
            }
        ]
    }
])

export default router;