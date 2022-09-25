import { useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuSvg from "./svg/menu";
import Search from "./svg/search";
import ThemeDark from "./svg/theme-dark";
import ExitSvg from "./svg/exit";



const Nav = styled.nav({
    padding:'15px 20px',
    boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)',
    position:'sticky',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
})

const Sidbar = styled.div({
    position:'absolute',
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
                    marginBottom:'2rem',

                    '&> a':{
                        color:'#DFE8FF',
                        fontWeight:'500',
                        fontSize:'20px',
                    }
                }
            }
        },
    },

    '& .ml-auto':{
        marginLeft:'-200px'
    },

})


const Navbar = () => {

    const [openSidbar , setOpenSidbar] = useState(false);

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
                <div className={openSidbar?' ':'ml-auto'}>
                    <div className="header">
                        <button className="btn" onClick={()=> (setOpenSidbar(false))}><ExitSvg/></button>
                        <button className="btn"><ThemeDark/></button>
                    </div>
                    <div className="body">
                        <ul>
                            <li><a href="#">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </Sidbar>
        </Nav>
    );
}
 
export default Navbar;
