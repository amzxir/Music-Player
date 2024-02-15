import styled from "styled-components";
import img1 from './img/Mask Group.png'
import img2 from './img/1.png'
import img3 from './img/2.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/5.png'
import { useContext } from "react";
import Context from "../../../context/context";
import { useAppContext } from "../../../context/app/app-context";




const Plist = styled.div({
    marginBottom:'2rem',
    padding:'0px 20px 0px 20px',
    '&> div.title':{
        '&> p':{
            fontWeight:'700',
            fontSize:'24px',
            lineHeight:'29px',
        }
    },

    '&> div.scroll':{
        overflowX:'auto',
        display:'flex',
        whiteSpace:'nowrap',
        scrollSnapType:'x mandatory',
        scrollBehavior:"smooth",

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
                }
            }
        }
    },

    '& .textWhite1':{
        color:'#A5C0FF'
    },

    '& .textWhite2':{
        color:'#fff'
    },

    '& .textDark':{
        color:'#091227'
    }
})

const items = [
    {id:1 , img:img1 , name:'Believer' , title:'IMAGINE DRAGON' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
    {id:2 , img:img2 , name:'Shortwave' , title:'RYAN GRIGDRY' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
    {id:3 , img:img3 , name:'lorem' , title:'RYAN GRIGDRY' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
    {id:4 , img:img4 , name:'Believer' , title:'RYAN GRIGDRY' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
    {id:5 , img:img5 , name:'lorem' , title:'RYAN GRIGDRY' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
    {id:6 , img:img6 , name:'Shortwave' , title:'RYAN GRIGDRY' , music:'https://dl.bia2rap.top/Full/Fadaei/Hagh/Fadaei%20-%20Alef%20(320).mp3'},
]

const Playist = (props) => {

    const { theme } = useAppContext();

    return ( 
        <Plist>
            <div className="title">
                <p className={theme === "light" ?'textDark':'textWhite2'}>My Playlist</p>
            </div>
            <div className="scroll">
                {items.map((i , index)=> {
                    return(
                        <div key={index} className="card" onClick={()=> props.onMusicClick(i)}>
                            <div className="img">
                                <img src={i.img} alt="" />
                            </div>
                            <audio src={i.music}/>
                            <div className="content">
                                <h1 className={theme === "light" ?'textDark':'textWhite2'}>{i.name}</h1>
                                <p className={theme === "light" ?'textDark':'textWhite1'}>{i.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Plist>
    );
}
 
export default Playist;