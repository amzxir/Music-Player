import styled from "styled-components";
import Playist from "./playlist/playlist";
import Recommended from "./recommended/recommended";


const Homes = styled.div({

})

const Home = () => {
    return ( 
        <Homes>
            <Recommended/>
            <Playist/>
        </Homes>
    );
}
 
export default Home;