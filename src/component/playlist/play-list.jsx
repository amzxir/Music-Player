import styled from "styled-components";


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
                    fontWeight:'400',
                    lineHeight:'12px',
                    color:'rgba(165, 192, 255, 0.7)'
                }
            }
        }
    }
})

const data = [{}]

const PlayList = (props) => {

    return ( 
        <PalyLists>
            <p>Liked Songs</p>
            {props.currentMusic && (
                <div className="row">
                    {data.map((index)=> {
                        return (
                        <div key={index} className="col6" onClick={()=> props.sharingState(props.currentMusic)}>
                            <div className="img">
                                <img src={props?.currentMusic?.img} alt="" />
                            </div>
                            <div className="content">
                                <h1>{props?.currentMusic?.name}</h1>
                                <p>{props?.currentMusic?.title}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            )}
        </PalyLists>
    );
}
 
export default PlayList;