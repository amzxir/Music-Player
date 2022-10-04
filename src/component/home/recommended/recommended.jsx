import styled from "styled-components";
import img1 from './img/Mask Group.png'
import img2 from './img/1.png'
import img3 from './img/2.png'
import img4 from './img/4.png'
import img5 from './img/5.png'


const Recommen = styled.div({
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
                    color:'#A5C0FF',
                }
            }
        }
    },

    '&> .none':{
        display:'none',
    }
})

const items = [
    {id:1 , img:img1 , name:'Monsters Go Bump' , title:'ERIKA RECINOS'},
    {id:2 , img:img2 , name:'Moment Apart' , title:'ODESZA'},
    {id:3 , img:img3 , name:'lorem' , title:'RYAN GRIGDRY'},
    {id:4 , img:img4 , name:'Believer' , title:'RYAN GRIGDRY'},
    {id:5 , img:img5 , name:'lorem' , title:'RYAN GRIGDRY'},

]


const Recommended = (props) => {
    
    return ( 
        <Recommen>
            <div className="title">
                <p>Recommended for you</p>
            </div>
            <div className="scroll">
                {items.map((i , index)=> {
                    return(
                        <div key={index} className="card" onClick={()=> props.onMusicClick(i)}>
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

        </Recommen>
    );
}
 
export default Recommended;