import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuSvg from "@assets/svg/menu";
import Search from "@assets/svg/search";
import ThemeDark from "@assets/svg/theme-dark";
import ExitSvg from "@assets/svg/exit";
import UserSvg from "@assets/svg/user";
import HeartSvg from "@assets/svg/heart";
import LanguageSvg from "@assets/svg/language";
import ContactSvg from "@assets/svg/contact";
import FaqSvg from "@assets/svg/faq";
import SettingSvg from "@assets/svg/setting";
import Moon from "@assets/svg/moon";
import { useAppContext } from "../context/app/app-context";
import { useEffect, useRef, useState } from "react";

const Nav = styled.nav({
    padding: '20px 20px',
    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
    position: 'sticky',
    top: '0',

    '&> div#alignItems': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

const Sidbar = styled.div({
    position: 'fixed',
    boxShadow: '0 0.125rem 0.25rem rgb(177 148 148 / 24%)',
    left: '0',
    top: '0',
    bottom: '0',
    height: '100vh',
    zIndex: '10000',
    // backgroundColor:'#091227',
    transition: '5s',

    '@media (min-width: 450px)': {
        position: 'absolute',
        height: '85vh'
    },

    '&> div': {
        '&> div.header': {
            padding: '20px 20px 0px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        '&> div.body': {
            padding: '20px 20px 0px 20px',
            '&> ul': {
                listStyle: 'none',
                padding: '0',
                '&> li': {
                    marginBottom: '1.4rem',

                    '&> a': {
                        fontWeight: '500',
                        fontSize: '18px',
                        marginLeft: '15px',
                        fontFamily: 'Gilroy',
                    }
                }
            }
        },
    },

    '& .ml-auto': {
        marginLeft: '-150px',
        transition: '.5s',
    },

    '& .mr-auto': {
        marginLeft: '0px',
        transition: '1.5s',
    },

    '& .textWhite': {
        color: '#DFE8FF'
    },

    '& .textDark': {
        color: '#091227'
    },



})


const Sidebar = (props) => {

    const { theme, changeTheme, changeSidebar, sidebar } = useAppContext();




    const handlerChange = () => {
        changeTheme(theme === "light" ? "dark" : "light")
    }

    const { pathname } = useLocation();
    // console.log(pathname);
    if (pathname === `/playing_now/${props.userID}`) return null;
    if (pathname === "/play_list") return null;
    if (pathname === '/world_artist') return null;
    return (
        <Nav className={`bg-${theme === "light" ? 'White' : 'Dark'}`}>
            <div id="alignItems">
                <button className="btn pointer" onClick={changeSidebar}><MenuSvg /></button>
                <button className="btn pointer"><Search /></button>
            </div>
            <Sidbar className="sidbar" style={{
                width: sidebar === true ? '200px' : '0px',
                transition: sidebar === true ? '1s' : '1s'
            }}>
                <div className={sidebar === true ? 'mr-auto' : 'ml-auto'}>
                    <div className="header">
                        <button className="btn pointer" onClick={changeSidebar}><ExitSvg /></button>
                        <button className="btn pointer" onClick={handlerChange}>
                            {theme === "light" ? <Moon /> : <ThemeDark />}
                        </button>
                    </div>
                    <div className="body">
                        <ul>
                            <li><UserSvg /><NavLink className={theme === "light" ? 'textDark' : 'textWhite'} to='/'>Profile</NavLink></li>
                            <li><HeartSvg /><NavLink className={theme === "light" ? 'textDark' : 'textWhite'} to='/play_list'>Liked Songs</NavLink></li>
                            <li><LanguageSvg /><NavLink className={theme === "light" ? 'textDark' : 'textWhite'} to='/world_artist'>artist</NavLink></li>
                            <li><ContactSvg /><a className={theme === "light" ? 'textDark' : 'textWhite'} href='#'>Contact us</a></li>
                            <li><FaqSvg /><a className={theme === "light" ? 'textDark' : 'textWhite'} href="#">FAQs</a></li>
                            <li><SettingSvg /><a className={theme === "light" ? 'textDark' : 'textWhite'} href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </Sidbar>
        </Nav>
    )
}

export default Sidebar;