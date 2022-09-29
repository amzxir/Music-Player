import React from "react";
import styled from "styled-components";
import Home from "./component/home/home";
import Navbar from "./component/nav/nav";
import { Route , Routes } from "react-router-dom";


const Container = styled.div({
  padding:'0px 20px 0px 20px'
})

const App = () => {
  return ( 
    <React.Fragment>
      <Navbar/>
      <Container>

        <Routes>
          <Route  path="/" element={<Home/>} />
        </Routes>

      </Container>
    </React.Fragment>
  );
}

export default App
