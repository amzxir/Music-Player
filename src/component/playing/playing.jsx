import styled from "styled-components";
import Next from './svg/next.jsx';
import Prev from './svg/prev.jsx';
import Pause from './svg/pause.jsx';
import { useContext, useEffect, useRef, useState } from "react";
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
        position:'sticky',
        marginRight:'auto',
        marginLeft:'auto',
        bottom:'0',
        right:'16px'
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
        color:'#8996B8'
    },

})

const Play = (props) => {

    const {colors} = useContext(Context) 

    const [play , setPlay] = useState(false);

    const audioRef = useRef();

    const startAudio = () => {
        audioRef.current.play();
        setPlay(true)
    }
    
    const pauseAudio = () => {
        audioRef.current.pause();
        setPlay(false)
    }

    const data = props.currentMusic

    //////////////// custom audio player ///////////////////

    const rangeRef = useRef();

    const thumbRef = useRef();


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

    ///////////////////////////////////////////////////////

    // console.log(percentage)

    return props.currentMusic && ( 
        <Playing >
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
            <audio ref={audioRef} src={props.currentMusic.music}
            onLoadedData={(e)=> {
                console.log(e.currentTarget.duration)
                setDuration(e.currentTarget.duration.toFixed(2))
            }}

            onTimeUpdate={getCurrDuration}
            ></audio>
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
                    <div className="pointer"><Next/></div>
                    <div className="pointer">{play?<Pause pauseAudio={pauseAudio}/>:<FontAwesomeIcon onClick={startAudio} style={{ fontSize:'18px' }} className={colors?'textDark':'textWhite'} icon={faPlayCircle}/>}</div>
                    <div className="pointer"><Prev/></div>
                </div>
            </div>
        </Playing>
    );
}
 
export default Play;