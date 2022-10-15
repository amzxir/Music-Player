import { useContext } from "react";
import Context from "../../../context/context";

const Pause = (props) => {

    const {colors} = useContext(Context)

    return ( 
        <svg onClick={()=> props.pauseAudio()} width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.29613 0.0691986V24.5196M12.2961 0.0691986V24.5196" stroke={colors?'#000':'#EAF0FF'} strokeWidth="3"/>
        </svg>
    );
}
 
export default Pause;