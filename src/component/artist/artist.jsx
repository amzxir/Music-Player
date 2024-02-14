import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';


const Container = styled.div({
    padding:'0px 15px 0px 15px',

    '&> div.row':{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',

        '&> div.col6':{
            flex:'0 0 auto',
            width:'48%',
            marginBottom:'1rem',

            '&> div.cardArtist':{
 

                '&> div.imgCenter':{
                    display:'flex',
                    justifyContent:'center',
                    '& img':{
                        width:'100px',
                        height:'100px',
                        borderRadius:'50%',
                    }
                },
    
                '&> div.content':{
                    textAlign:'center',
                    '& h1':{
                        fontSize:'14px',
                        fontWeight:'500',
                        lineHeight:'16px',
                    },
    
                    '& p':{
                        fontSize:'10px',
                        fontWeight:'400',
                        lineHeight:'12px',
                        color:'rgba(165,192,255,0.7)',
                    }
                }
            }
        },


    }


})

const Artist = () => {

    const [data , setData] = useState([]);

    useEffect(()=> {
        const changeData = async() => {
            const respons = await axios.get('https://reqres.in/api/users')
            console.log(respons.data.data)
            setData(respons.data.data)
        }
        changeData()
    }, [])


    return ( 
        <Container>
            <div className="row">
                {data.map((i , index)=> {
                    return(
                    <div className="col6" key={index}>
                        <div className="cardArtist">
                            <div className="imgCenter">
                                <img src={i.avatar} alt="" />
                            </div>
                            <div className="content">
                                <h1>{i.first_name}</h1>
                                <p>{i.email}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </Container>
    );
}
 
export default Artist;