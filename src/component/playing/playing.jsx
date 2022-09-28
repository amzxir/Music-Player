import styled from "styled-components";
import Next from './svg/next.jsx';
import Prev from './svg/prev.jsx';
import Pause from './svg/pause.jsx';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";





const Playing = styled.div({
    position:'fixed',
    bottom:'0',
    right:'0',
    left:'0',
    backgroundColor:'#091227',
    zIndex:'10000000',

    '&> div.playing':{
        display:'flex',
        flexWrap:'row',
        alignItems:'center',

        '&> div.flexStart':{
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
    }
})

const Play = (props) => {

    const [play , setPlay] = useState(false);

    const handelPlayMusic = () => {
        setPlay(!play);
    }

    return props.currentMusic && ( 
        <Playing>
            <div className="playing">
                <div className="flexStart">
                    <div className="img">
                        <img src={props?.currentMusic?.img} alt="" />
                    </div>
                    <div className="content">
                        <p>{props?.currentMusic?.name}</p>
                        <small>{props?.currentMusic?.title}</small>
                    </div>
                </div>
                <div className="flexEnd">
                    <div><Next/></div>
                    <div onClick={handelPlayMusic}>{play?<Pause/>:<FontAwesomeIcon style={{ fontSize:'18px' }} icon={faPlayCircle}/>}</div>
                    <div><Prev/></div>
                </div>
            </div>
        </Playing>
    );
}
 
export default Play;