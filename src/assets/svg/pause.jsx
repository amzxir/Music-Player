import { useAppContext } from "../../context/app/app-context";

const Pause = (props) => {

    const { theme } = useAppContext();

    return ( 
        <svg onClick={()=> props.pauseAudio()} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.20251 0.315826V14.6909M7.59142 0.315826V14.6909" stroke={theme === "light" ? "#000" : '#EAF0FF'} strokeWidth="2.08334"/>
        </svg>

    );
}
 
export default Pause;