import React, { createContext, useState } from "react";
import styled from "styled-components";
import Sidebar from "./layouts/sidebar";
import { Route, RouterProvider, Routes, useLocation } from "react-router-dom";
import PlayingNow from "./components/playingnow/playing-now";
import PlayList from "./components/playlist/play-list";
import Play from "./components/playing/playing";
import Artist from "./components/artist/artist";
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
    //       {/* <Route exact path="/playing_now/:userId" element={<PlayingNow setUserID={setUserID} likedHandler={likedHandler}/>} /> */}
    //       {/* <Route exact path="/play_list"  element={<PlayList liked={liked} onMusicClick={onSetMusic}/>} /> */}
    //       {/* <Route exact path="/world_artist" element={<Artist/>}/> */}
    //     </Routes>

    //     {pathname === '/play_list' ?  <Play currentMusic={currentMusic} onMusicClick={onSetMusic}/> : null }
    //   </Container>
    // </div>
  );
};

export default App;
