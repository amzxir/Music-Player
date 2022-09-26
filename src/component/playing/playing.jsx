import styled from "styled-components";
import img1 from './img/Mask Group.png';
import Next from './svg/next.jsx';
import Prev from './svg/prev.jsx';
import Pause from './svg/pause.jsx';




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
                    width:'65px'
                }
            },

            '&> div.content':{
                marginLeft:'10px',
                '&> p':{
                    fontSize:'18px',
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

const Play = () => {

    return ( 
        <Playing>
            <div className="playing">
                <div className="flexStart">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="content">
                        <p>Chaff & Dust</p>
                        <small>HYONNA</small>
                    </div>
                </div>
                <div className="flexEnd">
                    <div><Next/></div>
                    <div><Pause/></div>
                    <div><Prev/></div>
                </div>
            </div>
        </Playing>
    );
}
 
export default Play;