import React from "react";
import styled from "styled-components";
import Navbar from "./component/nav/nav";

const Container = styled.div({
  padding:'0px 20px 0px 20px'
})

const App = () => {
  return ( 
    <React.Fragment>
      <Navbar/>
      <Container>

      </Container>
    </React.Fragment>
  );
}

export default App
