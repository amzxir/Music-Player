import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../../context/app/app-context.jsx";
import styled from "styled-components";
import Next from '@assets/svg/next.jsx';
import Prev from '@assets/svg/prev.jsx';
import Pause from '@assets/svg/pause.jsx';

const Playing = styled.div({
    position: 'fixed',
    width: '100%',
    bottom: '0',
    right: '0',
    left: '0',
    zIndex: '10000000',

    '@media (min-width: 450px)': {
        position: 'sticky',
        marginRight: 'auto',
        marginLeft: 'auto',
        bottom: '0',
        right: '16px'
    },

    '&> div.playing-colse': {
        display: 'flex',
        flexWrap: 'row',
        alignItems: 'center',

        '&> div.flexStart': {
            flex: '0 0 auto',
            width: '60%',
            display: 'flex',
            alignItems: 'center',

            '&> div.img': {
                display: 'flex',
                justifyContent: 'start',

                '&> img': {
                    width: '65px',
                    height: '65px'
                }
            },

            '&> div.content': {
                marginLeft: '10px',
                color: '#fff',
                '&> p': {
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '22px',
                    marginTop: '0',
                    marginBottom: '0',
                },

                '&> small': {
                    fontSize: '10px',
                    lineHeight: '12px',
                    fontWeight: '400',
                }
            }

        },


        '&> div.flexEnd': {
            display: 'flex',
            flex: '0 0 auto',
            width: '30%',
            justifyContent: 'space-around',


        }
    },

    '&> div.playing-open': {
        height:'100%',
        display: 'grid',
        alignItems:'center',

        '&> div.flexStart': {
            width: '100%%',

            '&> div.img': {
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem',

                '&> img': {
                    width: '200px',
                    height: '200px'
                }
            },

            '&> div.content': {
                color: '#fff',
                textAlign: 'center',
                '&> p': {
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '22px',
                    marginTop: '0',
                    marginBottom: '0',
                },

                '&> small': {
                    fontSize: '10px',
                    lineHeight: '12px',
                    fontWeight: '400',
                }
            }

        },


        '&> div.flexEnd': {
            display: 'flex',
            width: '100%%',
            justifyContent: 'space-around',

        }
    },

    '& .bgDark': {
        backgroundColor: '#091227',
    },

    '& .bgWhite': {
        backgroundColor: '#fff',
    },

    '& .textWhite': {
        color: '#DFE8FF'
    },

    '& .textDark': {
        color: '#000'
    },

    '& .textLight': {
        color: '#8996B8'
    },

})

const Play = () => {

    const { theme, currentMusic, chnagePlay, open } = useAppContext();

    const [play, setPlay] = useState(false);

    const [percentage, setPercentage] = useState(0)

    const [position, setPosition] = useState(0)

    const [marginLeft, setMarginLeft] = useState(0)

    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef();

    const rangeRef = useRef();

    const thumbRef = useRef();

    const startAudio = () => {
        audioRef.current.play();
        setPlay(true)
    }

    const pauseAudio = () => {
        audioRef.current.pause();
        setPlay(false)
    }

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    useEffect(() => {
        const rangeWidth = rangeRef.current?.getBoundingClientRect().width
        const thumbWidth = thumbRef.current?.getBoundingClientRect().width

        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar = thumbWidth + rangeWidth / 100 * percentage - (thumbWidth / 100 * percentage)

        setMarginLeft(centerThumb)
        setPosition(percentage)
        setProgressBarWidth(centerProgressBar)
    }, [percentage])


    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    return (
        <Playing className={`${open ? 'menu-music-close' : 'menu-music-open'}`}>
            <div className={`slider-container d-${open ? 'none' : 'block'}`}>
                <div className={theme === "light" ? 'progress-bar-cover bgDark' : 'progress-bar-cover bgWhite'} style={{
                    width: `${progressBarWidth}px`,
                }}></div>
                <div className="thumb" ref={thumbRef} style={{
                    left: `${position}%`,
                    marginLeft: `${marginLeft}px`,
                }}></div>
                <input type="range" className="range" step='0.01' value={position} ref={rangeRef} onChange={onChange} />
            </div>
            <audio ref={audioRef} src={currentMusic.music} onTimeUpdate={getCurrDuration}></audio>
            <div className={theme === "light" ? `bgWhite playing-${open ? 'open' : 'colse'}` : `bgDark playing-${open ? 'open' : 'colse'}`}>
                <div className="flexStart" onClick={chnagePlay}>
                    <div className="img">
                        <img src={currentMusic.image} alt="" />
                    </div>
                    <div className="content">
                        <p className={theme === "light" ? 'textDark' : 'textWhite'}>{currentMusic.name}</p>
                        <small className={theme === "light" ? 'textDark' : 'textLight'}>{currentMusic.title}</small>
                    </div>
                </div>
                <div className={`slider-container d-${open ? 'block' : 'none'}`}>
                    <div className={theme === "light" ? 'progress-bar-cover bgDark' : 'progress-bar-cover bgWhite'} style={{
                        width: `${progressBarWidth}px`,
                    }}></div>
                    <div className="thumb" ref={thumbRef} style={{
                        left: `${position}%`,
                        marginLeft: `${marginLeft}px`,
                    }}></div>
                    <input type="range" className="range" step='0.01' value={position} ref={rangeRef} onChange={onChange} />
                </div>
                <div className="flexEnd">
                    <div className="pointer"><Next /></div>
                    <div className="pointer">{play ? <Pause pauseAudio={pauseAudio} /> : <FontAwesomeIcon onClick={startAudio} style={{ fontSize: '18px' }} className={theme === "light" ? 'textDark' : 'textWhite'} icon={faPlayCircle} />}</div>
                    <div className="pointer"><Prev /></div>
                </div>
            </div>
        </Playing>
    );
}

export default Play;