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
                    cursor:'pointer',
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

    const startAudio = () => {
        audioRef.current.play();
        setPlay(true)
    }
    
    const pauseAudio = () => {
        audioRef.current.pause();
        setPlay(false)
    }

    useEffect(()=> {
        props.setUserID(userId)
    },[userId])

    //// start function player ////

    const rangeRef = useRef();

    const thumbRef = useRef();

    const audioRef = useRef();

    const [percentage , setPercentage] = useState(0)

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const [position , setPosition] = useState(0)

    const [marginLeft , setMarginLeft] = useState(0)

    const [progressBarWidth , setProgressBarWidth] = useState(0)
    
    useEffect(()=> {
        const rangeWidth = rangeRef.current?.getBoundingClientRect().width
        const thumbWidth = thumbRef.current?.getBoundingClientRect().width

        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar = thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage)

        setMarginLeft(centerThumb)
        setPosition(percentage)
        setProgressBarWidth(centerProgressBar)
    }, [percentage])


    const [duration , setDuration] = useState(0)

    const [currentTime , setCurrentTime] = useState(0)

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    function secondsToHms (seconds) {
        if (!seconds) return '00 : 00'

        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600

        let min = parseInt(duration / 60)
        duration = duration % 60

        let sec = parseInt(duration)

        if(sec < 10){
            sec = `0${sec}`
        }
        if(sec < 10){
            sec = `0${min}`
        }

        if(parseInt(hours , 10) > 0){
            return `${parseInt(hours , 10)} ${min} ${sec}`
            
        } else if(min === 0){
            return `00:${sec}`

        }else{
            return `${min}:${sec}`
        }

    }

    //// end function player ////


    return ( 
        <PlayNow>
            <div className="pnow">
                <div className="img">
                    <img src={location.state.img} alt="" />
                    <audio ref={audioRef} src={location.state.music}
                        onLoadedData={(e)=> {
                            console.log(e.currentTarget.duration)
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
            
                        onTimeUpdate={getCurrDuration}
                    />
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
                        <div className="msAuto pointer"><Shuffel/></div>
                        <div className="ms1 pointer"><Reapet/></div>
                        <div className="pointer"><Sound/></div>
                    </div>
                    <div className="playMusic">
                        <div className="time"><p className={colors?'textDark':'textWhite'}>{secondsToHms(currentTime)}</p> <p className={colors?'textDark':'textWhite'}>{secondsToHms(duration)}</p></div>
                        <div className="inputRange">
                            <div className='slider-container'>
                                <div className={colors?'progress-bar-cover bgDark':'progress-bar-cover bgWhite'} style={{ 
                                    width:`${progressBarWidth}px`,
                                }}></div>
                                <div className="thumb" ref={thumbRef} style={{ 
                                    left:`${position}%`,
                                    marginLeft: `${marginLeft}px`,
                                }}></div>
                                <input type="range" className="range" step='0.01' value={position} ref={rangeRef} onChange={onChange} />
                            </div>
                        </div>
                        <div className="musicBtn">
                            <div className="pointer"><Next/></div>
                            <div className="pointer">{play?<Pause pauseAudio={pauseAudio}/>:<FontAwesomeIcon className={colors?'textDark':'textWhite'} onClick={startAudio} style={{ fontSize:'30px' }} icon={faPlayCircle}/>}</div>
                            <div className="pointer"><Prev/></div>
                        </div>
                    </div>
                </div>
            </div>
        </PlayNow>
    );
}
 
export default PlayingNow;