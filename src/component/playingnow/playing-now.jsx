import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import {useLocation, useParams} from 'react-router-dom'
import styled from "styled-components";
import Like from "./svg/like";
import Pause from "./svg/pause";
import Reapet from "./svg/reapet";
import Shuffel from "./svg/shuffel";
import Sound from "./svg/sound";
import Next from "./svg/next";
import Prev from "./svg/prev";
import Context from "../../context/context";

const PlayNow = styled.div({
    // marginTop:'15px',
    padding:'0px 20px 0px 20px',
    '&> div.pnow':{

        '&> div.img':{
            display:'flex',
            justifyContent:'center',
            '&> img':{
                maxWidth:'262px',
                height:'262px'
            }
        },

        '&> div.item':{

            '&> div.content':{
                position:'relative',
                marginBottom:'3rem',
                '&> div.name':{
                    textAlign:'center',
                    '& h1':{
                        fontWeight:'500',
                        fontSize:'24px',
                        lineHeight:'28px',
                        marginBlockEnd:'0',
                    },

                    '& p':{
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBlockStart:'.5rem',
                        color:'#8996B8',
                    }
                },

                '&> div.like':{
                    position:'absolute',
                    top:'50%',
                    right:'0',
                    marginLeft:'auto',
                }
            },

            '&> div.option':{
                display:'flex',
                marginBottom:'1rem',

                '& div.msAuto':{
                    marginRight:'auto'
                },

                '& div.ms1':{
                    marginRight:'1rem',
                }
            },

            '&> div.playMusic':{

                '&> div.time':{
                    display:'flex',
                    justifyContent:'space-between',
                    marginBottom:'1rem',

                    '&> p':{
                        fontSize:'12px',
                        lineHeight:'14px',
                        fontWeight:'400',
                        marginBlock:'0',
                    }
                },

                '&> div.inputRange':{
                    position:'relative',
                },

                '&> div.musicBtn':{
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'4rem',
                },            

            }

        }
    },

    '& .textDark':{
        color:'#091127'
    },

    '& .textLight':{
        color:'#8996B8'
    },

    '& .textWhite':{
        color:'#EAF0FF'
    },

    
})
const PlayingNow = (props) => {

    const {colors} = useContext(Context)
    
    const { userId } = useParams();
    
    const location = useLocation();

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

    useEffect(()=> {
        props.setUserID(userId)
    },[userId])

    return ( 
        <PlayNow>
            <div className="pnow">
                <div className="img">
                    <img src={location.state.img} alt="" />
                    <audio ref={myRef} src={location.state.music}/>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="name">
                            <h1 className={colors?'textDark':'textWhite'}>{location.state.name}</h1>
                            <p className={colors?'textLight':''}>{location.state.title}</p>
                        </div>
                        <div className="like" onClick={()=> props.likedHandler(location.state)}><Like/></div>
                    </div>
                    <div className="option">
                        <div className="msAuto"><Shuffel/></div>
                        <div className="ms1"><Reapet/></div>
                        <div><Sound/></div>
                    </div>
                    <div className="playMusic">
                        <div className="time"><p className={colors?'textDark':'textWhite'}>00:00</p> <p className={colors?'textDark':'textWhite'}>04:00</p></div>
                        <div className="inputRange">
                            <input type="range" className="range" />
                        </div>
                        <div className="musicBtn">
                            <div><Next/></div>
                            <div>{play?<Pause pauseAudio={pauseAudio}/>:<FontAwesomeIcon className={colors?'textDark':'textWhite'} onClick={startAudio} style={{ fontSize:'30px' }} icon={faPlayCircle}/>}</div>
                            <div><Prev/></div>
                        </div>
                    </div>
                </div>
            </div>
        </PlayNow>
    );
}
 
export default PlayingNow;