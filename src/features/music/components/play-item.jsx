import styled from "styled-components";
import { useAppContext } from "../../../context/app/app-context";

const PlayItems = styled.div({

    '&> div.card': {
        maxWidth: '190px',
        height: 'fit-content',
        marginRight: '20px',

        '&> div.img': {

            '&> img': {
                width: '190px',
                height: '190px',
            }
        },

        '&> div.content': {
            textAlign: 'center',

            '&> h1': {
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '19px',
            },

            '&> p': {
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: '12px',
            }
        }
    },

    '&> .none': {
        display: 'none',
    },

    '& .textWhite1': {
        color: '#A5C0FF'
    },

    '& .textWhite2': {
        color: '#fff'
    },

    '& .textDark': {
        color: '#091227'
    }
})

const PlayItem = ({ playList }) => {

    const { theme, chnageMusic } = useAppContext();


    return (
        <PlayItems>
            <div className="card" onClick={() => chnageMusic(playList)}>
                <div className="img">
                    <img src={playList.image} alt="" />
                </div>
                <audio src={playList.music} />
                <div className="content">
                    <h1 className={theme === "light" ? 'textDark' : 'textWhite2'}>{playList.name}</h1>
                    <p className={theme === "light" ? 'textDark' : 'textWhite1'}>{playList.title}</p>
                </div>
            </div>
        </PlayItems>
    )
}

export default PlayItem;