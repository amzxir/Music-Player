import { useContext } from "react";
import Context from "../../../context/context";

const Option = () => {

    const {colors} = useContext(Context)

    return ( 
        <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.8907 4.98934L11.2907 4.98934M11.2907 4.98934C11.2907 3.22203 9.85806 1.78934 8.09075 1.78934C6.32344 1.78934 4.89075 3.22203 4.89075 4.98934M11.2907 4.98934C11.2907 6.75665 9.85806 8.18934 8.09075 8.18934C6.32344 8.18934 4.89075 6.75665 4.89075 4.98934M4.89075 4.98934L0.890747 4.98934M24.8907 17.7893L20.8907 17.7893M20.8907 17.7893C20.8907 16.022 19.4581 14.5893 17.6907 14.5893C15.9234 14.5893 14.4907 16.022 14.4907 17.7893M20.8907 17.7893C20.8907 19.5566 19.4581 20.9893 17.6907 20.9893C15.9234 20.9893 14.4907 19.5566 14.4907 17.7893M14.4907 17.7893L0.890747 17.7893" stroke={colors?'#000':'#EAF0FF'} strokeWidth="2"/>
        </svg>

    );
}
 
export default Option;