import { useState } from "react";
import styled from "styled-components";
import Play from "../playing/playing";
import Playist from "./playlist/playlist";
import Recommended from "./recommended/recommended";




const Homes = styled.div({

})

const Home = () => {

    const [currentMusic , setCurrentMusic] = useState();

    const onSetMusic = (music) => {
        console.log(music);
        setCurrentMusic(music);
    }

    return ( 
        <Homes>
            <Recommended onMusicClick={onSetMusic}/>
            <Playist onMusicClick={onSetMusic}/>
            <Play currentMusic={currentMusic} onMusicClick={onSetMusic}/>
        </Homes>
    );
}
 
export default Home;