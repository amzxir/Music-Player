import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { useAppContext } from "./context/app/app-context";
import router from "./router";

const App = () => {
  const { theme } = useAppContext();

  // const { pathname } = useLocation();

  const [currentMusic, setCurrentMusic] = useState();

  const [liked, setLiked] = useState([]);

  const likedHandler = (data) => {
    console.log(data);
    setLiked([...liked, ...[data]]);
  };

  const onSetMusic = (music) => {
    console.log(music);
    setCurrentMusic(music);
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
    // <div id={theme}>
    //   <Navbar/>
    //   <Sidebar userID={userIDProps}/>
    //   <Container>

    //     <Routes>
    //       {/* <Route exact path="/play_list"  element={<PlayList liked={liked} onMusicClick={onSetMusic}/>} /> */}
    //       {/* <Route exact path="/world_artist" element={<Artist/>}/> */}
    //     </Routes>

    //   </Container>
    // </div>
  );
};

export default App;
