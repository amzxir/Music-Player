import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "@assets/svg/back";
import Option from "@assets/svg/option";
import { useAppContext } from "../context/app/app-context";

const Back = styled.nav({
    position: 'sticky',
    top: '0',

    '&> div': {
        padding: '20px 20px',
        boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        display: 'flex',
        alignItems: 'center',

        '&> div.mx-auto': {
            paddingRight: '20px',
            fontSize: '20px',
            fontWeight: '500',
            color: '#DBE6FF',

        },

    },

    '& .bgDark': {
        backgroundColor: '#091227'
    },

    '& .bgWhite': {
        backgroundColor: '#fff'
    }
})

const Navbar = () => {

    const { theme } = useAppContext();


    const nameOne = 'Playing Now'

    const navigare = useNavigate();

    const { pathname } = useLocation();
    // console.log(pathname);
    if (pathname === '/') return null;

    function changeNameNav() {
        if (pathname === '/playing_now') {
            return nameOne;
        } else if (pathname === '/play_list') {
            return null;
        }
    }


    return (
        <Back>
            <div className={theme === "light" ? 'bgDark' : 'bgWhite'}>
                <div className="pointer" onClick={() => navigare(-1)}><BackIcon /></div>
                <div className="mx-auto">{changeNameNav()}</div>
                <div className="pointer">{pathname !== '/playing_now' ? <Option /> : ''}</div>
            </div>
        </Back>
    )
}


export default Navbar;
