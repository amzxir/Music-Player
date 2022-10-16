import React, { createContext, useState } from "react";
import styled from "styled-components";
import Home from "./component/home/home";
import Navbar from "./component/nav/nav";
import { Route , Routes, useLocation } from "react-router-dom";
import PlayingNow from "./component/playingnow/playing-now";
import NavBack from "./component/nav/nav-back";
import PlayList from "./component/playlist/play-list";
import Play from "./component/playing/playing";
import Context from "./context/context";


const Body = styled.div({

})

const Container = styled.div({
  // padding:'0px 20px 0px 20px'
})

export const ThemeContext = createContext(null);

const App = () => {

  const { pathname } = useLocation();

  const [currentMusic , setCurrentMusic] = useState();

  const [userIDProps , setUSerIDProps]=useState();

  const [liked , setLiked]=useState([])

  const likedHandler=(data)=>{
    console.log(data)
    setLiked([...liked , ...[data]])
  }

  const onSetMusic = (music) => {
    console.log(music);
    setCurrentMusic(music);
  }

  const setUserID = (id) => {
    setUSerIDProps(id)
  }

  const [theme , setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const [colors , setColor] = useState(false)

  const [openSidbar , setOpenSidbar] = useState(false);

  const [themeDark , setThemeDark] = useState(false);

  const changeColorText = () => {
      setColor(!colors)
  }


  return ( 
    <ThemeContext.Provider value={{ theme , toggleTheme }}>
      <Context.Provider value={{ colors , changeColorText , setColor , openSidbar ,setOpenSidbar ,themeDark , setThemeDark }}>
        <div id={theme}>
          <Navbar changeTheme={toggleTheme} userID={userIDProps}/>
          <NavBack/>
          <Container>
            
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/playing_now/:userId" element={<PlayingNow setUserID={setUserID} likedHandler={likedHandler}/>} />
              <Route exact path="/play_list"  element={<PlayList liked={liked} onMusicClick={onSetMusic}/>} />
            </Routes>

            {pathname === '/play_list' ?  <Play currentMusic={currentMusic} onMusicClick={onSetMusic}/> : null }
          </Container>
        </div>
      </Context.Provider>     
    </ThemeContext.Provider>
  );
}

export default App
