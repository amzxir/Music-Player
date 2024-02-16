import { useEffect, useState } from "react";
import recommend from "../db/recommend";
import playlist from "../db/playlist";
import RecommendList from "../features/music/components/recommend-list";
import PlayList from "../features/music/components/play-list";
import { useAppContext } from "../context/app/app-context";

const Musics = () => {

    const { theme } = useAppContext();

    const [recommends, setRecommends] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDataRecommend = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { recommend: recommend } })
        }, 2500);
    })

    const fetchDataPlayList = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { playlist: playlist } })
        }, 2500);
    })

    useEffect(() => {
        setIsLoading(true);
        fetchDataRecommend().then((resulte) => {
            setRecommends(resulte.data.recommend);
            setIsLoading(false);
        }, (error) => {
            console.log('error server');
        })
    }, [])

    useEffect(() => {
        setIsLoading(true);
        fetchDataPlayList().then((resulte) => {
            setPlayList(resulte.data.playlist);
            setIsLoading(false);
        }, (error) => {
            console.log('error server');
        })
    }, [])

    return (
        <div>
            {
                isLoading ? <p style={{ padding:'0px 20px 0px 20px' }} className={`text-${theme ? 'dark' : 'white'}`}>Loading ...</p> : <RecommendList recommen={recommends} />
            }
            {
                isLoading ? <p style={{ padding:'0px 20px 0px 20px' }} className={`text-${theme ? 'dark' : 'white'}`}>Loading ...</p> : <PlayList playLists={playList} />
            }
        </div>
    )
}

export default Musics;