import React, { useState } from "react";
import styled from "styled-components";
import Home from "./component/home/home";
import Navbar from "./component/nav/nav";
import { Route , Routes , useLocation } from "react-router-dom";
import PlayingNow from "./component/playingnow/playing-now";
import NavBack from "./component/nav/nav-back";

const Container = styled.div({
  padding:'0px 20px 0px 20px'
})


const App = (location) => {

  return ( 
    <React.Fragment>
      <Navbar/>
      <NavBack/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/playing_now" element={<PlayingNow/>} />
        </Routes>

      </Container>
    </React.Fragment>
  );
}

export default App
