import styled from "styled-components";
import { useLocation , useNavigate } from "react-router-dom";
import BackIcon from "./svg/back";
import Option from "./svg/option";


const Back = styled.nav({
    padding:'20px 20px',
    boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)',
    position:'sticky',
    display:'flex',
    alignItems:'center',
    '&> div.mx-auto':{
        paddingRight:'20px',
        fontSize:'20px',
        fontWeight:'500',
        color:'#DBE6FF',

    }
})


const NavBack = () => {

    const nameOne = 'Playing Now'

    // const nameTwo = 'Liked Songs'

    const navigare = useNavigate();

    const {pathname} = useLocation();
    // console.log(pathname);
    if(pathname === '/') return null;

    function changeNameNav(){
        if(pathname === '/playing_now'){
            return nameOne;
        } else if(pathname === '/play_list'){
            return null;
        }
    }


    return ( 
        <Back>
            <div onClick={()=> navigare(-1)}><BackIcon/></div>
            <div className="mx-auto">{changeNameNav()}</div>
            <div>{pathname !=='/playing_now' ? <Option/> :''}</div>
        </Back>
    );
}
 
export default NavBack;