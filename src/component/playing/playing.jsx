import styled from "styled-components";
import Next from './svg/next.jsx';
import Prev from './svg/prev.jsx';
import Pause from './svg/pause.jsx';
import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import Context from "../../context/context.jsx";

const Playing = styled.div({
    position:'fixed',
    width:'100%',
    bottom:'0',
    right:'0',
    left:'0',
    zIndex:'10000000',

    '@media (min-width: 450px)': {
        position:'absolute',
        marginRight:'auto',
        marginLeft:'auto',
        maxWidth:'25rem',
    },

    '&> div.playing':{
        display:'flex',
        flexWrap:'row',
        alignItems:'center',

        '&> a.flexStart':{
            flex:'0 0 auto',
            width:'60%',
            display:'flex',
            alignItems:'center',

            '&> div.img':{
                display:'flex',
                justifyContent:'start',
    
                '&> img':{
                    width:'65px',
                    height:'65px'
                }
            },

            '&> div.content':{
                marginLeft:'10px',
                color:'#fff',
                '&> p':{
                    fontSize:'16px',
                    fontWeight:'500',
                    lineHeight:'22px',
                    marginTop:'0',
                    marginBottom:'0',
                },

                '&> small':{
                    fontSize:'10px',
                    lineHeight:'12px',
                    fontWeight:'400',
                }
            }

        },


        '&> div.flexEnd':{
            display:'flex',
            flex:'0 0 auto',
            width:'30%',
            justifyContent:'space-around',


        }
    },

    '& .bgDark':{
        backgroundColor:'#091227',
    },

    '& .bgWhite':{
        backgroundColor:'#fff',
    },

    '& .textWhite':{
        color:'#DFE8FF'
    },

    '& .textDark':{
        color:'#000'
    },

    '& .textLight':{
        color:'8996B8'
    }

})

const Play = (props) => {

    const {colors} = useContext(Context) 

    const [play , setPlay] = useState(false);

    const myRef = useRef();

    const startAudio = () => {
        myRef.current.play();
        setPlay(true)
    }
    
    const pauseAudio = () => {
        myRef.current.pause();
        setPlay(false)
    }

    const data = props.currentMusic

    return props.currentMusic && ( 
        <Playing >
            <input type="range" className="range" />
            <audio ref={myRef} src={props.currentMusic.music}></audio>
            <div className={colors?'bgWhite playing':'bgDark playing'}>
                <NavLink to={`/playing_now/${props.currentMusic.id}`} state={data} className="flexStart" onClick={()=> props.onMusicClick(data)}>
                        <div className="img">
                            <img src={props?.currentMusic?.img} alt="" />
                        </div>
                        <div className="content">
                            <p className={colors?'textDark':'textWhite'}>{props?.currentMusic?.name}</p>
                            <small className={colors?'textDark':'textLight'}>{props?.currentMusic?.title}</small>
                        </div>
                </NavLink>
                <div className="flexEnd">
                    <div><Next/></div>
                    <div>{play?<Pause pauseAudio={pauseAudio}/>:<FontAwesomeIcon onClick={startAudio} style={{ fontSize:'18px' }} className={colors?'textDark':'textWhite'} icon={faPlayCircle}/>}</div>
                    <div><Prev/></div>
                </div>
            </div>
        </Playing>
    );
}
 
export default Play;