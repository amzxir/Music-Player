import { useContext, useState } from "react";
import styled from "styled-components";
import MenuSvg from "./svg/menu";
import Search from "./svg/search";
import ThemeDark from "./svg/theme-dark";
import ExitSvg from "./svg/exit";
import UserSvg from "./svg/user";
import HeartSvg from "./svg/heart";
import LanguageSvg from "./svg/language";
import ContactSvg from "./svg/contact";
import FaqSvg from "./svg/faq";
import SettingSvg from "./svg/setting";
import { NavLink , useLocation } from "react-router-dom";
import Moon from "./svg/moon";
import Context from "../../context/context";




const Nav = styled.nav({
    padding:'20px 20px',
    boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)',
    position:'sticky',
    top:'0',

    '&> div#alignItems':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
})

const Sidbar = styled.div({
    position:'fixed',
    boxShadow:'0 0.125rem 0.25rem rgb(177 148 148 / 24%)',
    left:'0',
    top:'0',
    bottom:'0',
    height:'100vh',
    zIndex:'10000',
    // backgroundColor:'#091227',
    transition:'5s',

    '@media (min-width: 450px)': {
        position:'absolute',
        height:'76vh'
    },
    
    '&> div':{
        '&> div.header':{
            padding:'20px 20px 0px 20px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
        },

        '&> div.body':{
            padding:'20px 20px 0px 20px',
            '&> ul':{
                listStyle:'none',
                padding:'0',
                '&> li':{
                    marginBottom:'1.4rem',

                    '&> a':{
                        // color:'#DFE8FF',
                        fontWeight:'500',
                        fontSize:'18px',
                        marginLeft:'15px',
                        fontFamily:'Gilroy',
                    }
                }
            }
        },
    },

    '& .ml-auto':{
        marginLeft:'-150px',
        transition:'.5s',
    },

    '& .mr-auto':{
        marginLeft:'0px',
        transition:'1.5s',
    },

    '& .textWhite':{
        color:'#DFE8FF'
    },

    '& .textDark':{
        color:'#091227'
    },



})


const Navbar = (props) => {

    const {colors , openSidbar
        , setOpenSidbar , themeDark
        , setThemeDark , changeColorText } = useContext(Context);
 

    const changeThemeDark = () => {
        setThemeDark(!themeDark)
        changeColorText()
    }
    
    const { pathname } = useLocation();
    // console.log(pathname);
    if (pathname === `/playing_now/${props.userID}` )return null;
    if (pathname === "/play_list")return null;

    return ( 
        <Nav className={colors?'bg-White':'bg-Dark'}>
            <div id="alignItems">
                <button className="btn" onClick={()=> (setOpenSidbar(!openSidbar))}>
                    <MenuSvg/>
                </button>
                <button className="btn">
                    <Search/>
                </button>
            </div>
            <Sidbar className="sidbar" style={{ 
                width:openSidbar?'200px':'0px',
                transition:openSidbar?'1s':'1s'
            }}>
                <div className={openSidbar?'mr-auto':'ml-auto'}>
                    <div className="header">
                        <button className="btn" onClick={()=> setOpenSidbar(!openSidbar)}><ExitSvg/></button>
                        <button className="btn" onClick={()=> props.changeTheme(changeThemeDark())}>
                            {themeDark?<Moon/> : <ThemeDark/>}
                        </button>
                    </div>
                    <div className="body">
                        <ul>
                            <li><UserSvg/><NavLink className={colors?'textDark':'textWhite'} to='/'>Profile</NavLink></li>
                            <li onClick={()=> (setOpenSidbar(false))}><HeartSvg/><NavLink className={colors?'textDark':'textWhite'} to='/play_list'>Liked Songs</NavLink></li>
                            <li><LanguageSvg/><a className={colors?'textDark':'textWhite'} href="#">Language</a></li>
                            <li><ContactSvg/><a className={colors?'textDark':'textWhite'} href="#">Contact us</a></li>
                            <li><FaqSvg/><a className={colors?'textDark':'textWhite'} href="#">FAQs</a></li>
                            <li><SettingSvg/><a className={colors?'textDark':'textWhite'} href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </Sidbar>
        </Nav>
    );
}
 
export default Navbar;
