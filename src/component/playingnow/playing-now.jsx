import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import {useLocation} from 'react-router-dom'

import styled from "styled-components";
import img1 from './img/Mask Group.png';
import Like from "./svg/like";
import Pause from "./svg/pause";
import Reapet from "./svg/reapet";
import Shuffel from "./svg/shuffel";
import Sound from "./svg/sound";
import Next from "./svg/next";
import Prev from "./svg/prev";

const PlayNow = styled.div({
    marginTop:'15px',
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
                        color:'#EAF0FF',
                        marginBlockEnd:'0',
                    },

                    '& p':{
                        fontSize:'16px',
                        fontWeight:'400',
                        marginBlockStart:'.5rem',
                        color:'rgba(165, 192, 255, 0.7)',
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
                        color:'rgba(165, 192, 255, 0.7)',
                    }
                },

                '&> div.inputRange':{
                    position:'relative',
                },

                '&> div.musicBtn':{
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'4rem',
                }
            }

        }
    }
})
const PlayingNow = (props) => {

    const location = useLocation();


    const [play , setplay] = useState(false);

    const playMusic = () => {
        setplay(!play)
    }

    return ( 
        <PlayNow>
            {console.log(location)}
            <div className="pnow">
                <div className="img">
                    <img src={location.state.img} alt="" />
                </div>
                <div className="item">
                    <div className="content">
                        <div className="name">
                            <h1>{location.state.name}</h1>
                            <p>{location.state.title}</p>
                        </div>
                        <div className="like"><Like/></div>
                    </div>
                    <div className="option">
                        <div className="msAuto"><Shuffel/></div>
                        <div className="ms1"><Reapet/></div>
                        <div><Sound/></div>
                    </div>
                    <div className="playMusic">
                        <div className="time"><p>00:00</p> <p>04:00</p></div>
                        <div className="inputRange">
                            <input type="range" className="range" />
                        </div>
                        <div className="musicBtn">
                            <div><Next/></div>
                            <div onClick={playMusic}>{play?<Pause/>:<FontAwesomeIcon style={{ fontSize:'30px' }} icon={faPlayCircle}/>}</div>
                            <div><Prev/></div>
                        </div>
                    </div>
                </div>
            </div>
        </PlayNow>
    );
}
 
export default PlayingNow;