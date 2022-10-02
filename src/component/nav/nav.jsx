import { useState } from "react";
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




const Nav = styled.nav({
    padding:'20px 20px',
    boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)',
    position:'sticky',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
})

const Sidbar = styled.div({
    position:'fixed',
    boxShadow:'0 0.125rem 0.25rem rgb(177 148 148 / 24%)',
    left:'0',
    top:'0',
    bottom:'0',
    height:'100vh',
    zIndex:'10000',
    backgroundColor:'#091227',
    transition:'5s',
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
                        color:'#DFE8FF',
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

})


const Navbar = () => {

    const [openSidbar , setOpenSidbar] = useState(false);

    
    const { pathname } = useLocation();
    // console.log(pathname);
    if (pathname === "/playing_now")return null;
    if (pathname === "/play_list")return null;



    return ( 
        <Nav>
            <button className="btn" onClick={()=> (setOpenSidbar(!openSidbar))}>
                <MenuSvg/>
            </button>
            <button className="btn">
                <Search/>
            </button>
            <Sidbar style={{ 
                width:openSidbar?'200px':'0px',
                transition:openSidbar?'1s':'1s'
            }}>
                <div className={openSidbar?'mr-auto':'ml-auto'}>
                    <div className="header">
                        <button className="btn" onClick={()=> (setOpenSidbar(false))}><ExitSvg/></button>
                        <button className="btn"><ThemeDark/></button>
                    </div>
                    <div className="body">
                        <ul>
                            <li><UserSvg/><NavLink to='/'>Profile</NavLink></li>
                            <li><HeartSvg/><NavLink to='/play_list'>Liked Songs</NavLink></li>
                            <li><LanguageSvg/><a href="#">Language</a></li>
                            <li><ContactSvg/><a href="#">Contact us</a></li>
                            <li><FaqSvg/><a href="#">FAQs</a></li>
                            <li><SettingSvg/><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </Sidbar>
        </Nav>
    );
}
 
export default Navbar;
