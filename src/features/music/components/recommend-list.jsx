import styled from "styled-components";
import { useAppContext } from "../../../context/app/app-context";
import RecommendItem from "./recommend-item";


const Recommen = styled.div({
    padding: '0px 20px 0px 20px',
    marginBottom: '2rem',
    '&> div.title': {
        '&> p': {
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '29px',
        }
    },

    '&> div.scroll': {
        overflowX: 'auto',
        display: 'flex',
        whiteSpace: 'nowrap',
        scrollSnapType: 'x mandatory',
        scrollBehavior: "smooth",

        "::-webkit-scrollbar": {
            display: 'none',
        },

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

const RecommendList = ({ recommen }) => {

    const { theme } = useAppContext();

    return (
        <Recommen>
            <div className="title">
                <p className={theme === "light" ? 'textDark' : 'textWhite2'}>Recommended for you</p>
            </div>
            <div className="scroll">
                {
                    recommen.map((recommend) => {
                        return (
                            <RecommendItem key={recommend.id} recommend={recommend} />
                        )
                    })
                }
            </div>
        </Recommen>
    )
}

export default RecommendList;