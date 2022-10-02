import styled from "styled-components";
import img1 from './img/POSTER_ Imagine Dragons (Believer) ALBUM Cover.png'
import img2 from './img/Mask Group1.png'
import img3 from './img/grunge.png'
import img4 from './img/12 New Artists You Need To Check Out On Spotify - Society19.png'
import img5 from './img/Dream On - Art Design Cover.png'
import img6 from './img/Imagine Dragons - Origins (Vinyl).png'


const PalyLists = styled.div({

    '&> p':{
        fontSize:'24px',
        fontWeight:'700',
        lineHeight:'29px',
        marginBlockStart:'0',
        paddingLeft:'10px'
    },

    '&> div.row':{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',

        '&> div.col6':{
            flex:'0 0 auto',
            width:'47%',
            marginBottom:'1rem',

            '&> div.img':{
                display:'flex',
                justifyContent:'center',
                '& img':{
                    width:'146px',
                    height:'146px',
                }
            },

            '&> div.content':{
                textAlign:'center',
                '& h1':{
                    fontSize:'14px',
                    fontWeight:'500',
                    lineHeight:'16px',
                    color:'#EAF0FF',
                },

                '& p':{
                    fontSize:'10px',
                    lineHeight:'400',
                    lineHeight:'12px',
                    color:'rgba(165, 192, 255, 0.7)'
                }
            }
        }
    }
})

const data = [
    {id:1 , img:img1 , name:'Believer' , title:'IMAGINE DRAGON'},
    {id:2 , img:img2 , name:'Shortwave' , title:'RYAN GRIGDRY'},
    {id:3 , img:img3 , name:'Dream On' , title:'ROGER TERRY'},
    {id:4 , img:img4 , name:'Origins' , title:'IMAGINE DRAGON'},
    {id:5 , img:img5 , name:'Dream On' , title:'IRYAN GRIGDRY'},
    {id:6 , img:img6 , name:'Shortwave' , title:'ROGER TERRY'},

]

const PlayList = () => {
    return ( 
        <PalyLists>
            <p>Liked Songs</p>
            <div className="row">
                {data.map((i , index)=> {
                    return (
                    <div key={index} className="col6">
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
        </PalyLists>
    );
}
 
export default PlayList;