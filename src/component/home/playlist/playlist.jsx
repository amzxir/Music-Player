import { useState } from "react";
import styled from "styled-components";
import img1 from './img/Mask Group.png'
import img2 from './img/Mask Group1.png'
import Play from "../../playing/playing";



const Plist = styled.div({
    marginBottom:'2rem',
    '&> div.title':{
        '&> p':{
            fontWeight:'700',
            fontSize:'24px',
            lineHeight:'29px',
            color:'#EAF0FF',
        }
    },

    '&> div.scroll':{
        overflow:'auto',
        display:'flex',
        whiteSpace:'nowrap',

        "::-webkit-scrollbar":{
            display:'none',
        },

        '&> div.card':{
            maxWidth:'190px',
            height:'fit-content',
            marginRight:'20px',
            
            '&> div.img':{

                '&> img':{
                    width:'190px',
                    height:'190px',
                }
            },

            '&> div.content':{
                textAlign:'center',

                '&> h1':{
                    fontSize:'16px',
                    fontWeight:'500',
                    lineHeight:'19px',
                },

                '&> p':{
                    fontSize:'10px',
                    fontWeight:'400',
                    lineHeight:'12px',
                    color:'#A5C0FF',
                }
            }
        }
    }
})

const items = [
    {id:1 , img:img1 , name:'Believer' , title:'IMAGINE DRAGON'},
    {id:2 , img:img2 , name:'Shortwave' , title:'RYAN GRIGDRY'},

]

const Playist = () => {

    const [openPlay , setOpenPlay]=useState(false)

    return ( 
        <Plist>
            <div className="title">
                <p>My Playlist</p>
            </div>
            <div className="scroll">
                {items.map((i , index)=> {
                    return(
                        <div key={index} className="card" onClick={()=> setOpenPlay(!openPlay)}>
                            <div className="img">
                                <img src={i.img} alt="" />
                            </div>
                            <div className="content">
                                <h1>{i.name}</h1>
                                <p>{i.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div style={{ 
                visibility:openPlay?'visible':'hidden',
                opacity:openPlay?'1':'0',
                transition:'.5s',
             }}>
                <Play/>
            </div>
        </Plist>
    );
}
 
export default Playist;