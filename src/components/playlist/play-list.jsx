import styled from "styled-components";
import { useAppContext } from "../../context/app/app-context";


const PalyLists = styled.div({
    padding: '0px 20px 0px 20px',
    '&> p': {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '29px',
        marginBlockStart: '0',
        paddingLeft: '10px',
        marginTop: '1rem'
    },

    '&> div.row': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '&> div.col6': {
            flex: '0 0 auto',
            width: '47%',
            marginBottom: '1rem',

            '&> div.img': {
                display: 'flex',
                justifyContent: 'center',
                '& img': {
                    width: '146px',
                    height: '146px',
                }
            },

            '&> div.content': {
                textAlign: 'center',
                '& h1': {
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '16px',
                },

                '& p': {
                    fontSize: '10px',
                    fontWeight: '400',
                    lineHeight: '12px',
                    color: 'rgba(165, 192, 255, 0.7)'
                }
            }
        }
    },

    '& .textLight': {
        color: '#EAF0FF'
    },

    '& .textWhite': {
        color: '#fff'
    },

    '& .textDark': {
        color: '#091227'
    }
})

const PlayList = (props) => {

    const { theme } = useAppContext();

    return (
        <PalyLists>
            <p className={theme === "light" ? 'textDark' : 'textWhite'}>Liked Songs</p>
            <div className="row">
                {props.liked.map((i, index) => {
                    return (
                        <div key={index} className="col6" onClick={() => props.onMusicClick(i)}>
                            <div className="img">
                                <img src={i?.img} alt="" />
                            </div>
                            <div className="content">
                                <h1 className={theme === "light" ? 'textDark' : 'textLight'}>{i?.name}</h1>
                                <p>{i?.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </PalyLists>
    );
}

export default PlayList;