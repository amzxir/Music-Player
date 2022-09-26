import styled from "styled-components";
import Play from "../playing/playing";
import Playist from "./playlist/playlist";
import Recommended from "./recommended/recommended";

const Homes = styled.div({

})

const Home = () => {
    return ( 
        <Homes>
            <Recommended/>
            <Playist/>
            <Play/>
        </Homes>
    );
}
 
export default Home;