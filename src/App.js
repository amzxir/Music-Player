import React, { useState } from "react";
import styled from "styled-components";
import Home from "./component/home/home";
import Navbar from "./component/nav/nav";
import { Route , Routes, useLocation } from "react-router-dom";
import PlayingNow from "./component/playingnow/playing-now";
import NavBack from "./component/nav/nav-back";
import PlayList from "./component/playlist/play-list";
import Play from "./component/playing/playing";


const Container = styled.div({
  padding:'0px 20px 0px 20px'
})


const App = () => {

  const { pathname } = useLocation();

  const [currentMusic , setCurrentMusic] = useState();

  const [userIDProps , setUSerIDProps]=useState();
  
  const sharingState = (data) => {
    console.log(data)
    setCurrentMusic(data)
  }

  const onSetMusic = (music) => {
    console.log(music);
    setCurrentMusic(music);
  }

  const setUserID = (id) => {
    setUSerIDProps(id)
  }

  return ( 
    <React.Fragment>
      <Navbar userID={userIDProps}/>
      <NavBack/>
      <Container>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/playing_now/:userId" element={<PlayingNow setUserID={setUserID} currentMusic={currentMusic} sharingState={sharingState}/>} />
          <Route exact path="/play_list" element={<PlayList currentMusic={currentMusic} sharingState={sharingState}/>} />
        </Routes>

        {pathname === '/play_list' ?  <Play currentMusic={currentMusic} onMusicClick={onSetMusic}/> : null }
      </Container>
    </React.Fragment>
  );
}

export default App
