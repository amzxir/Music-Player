import { useContext } from "react";
import Context from "../../../context/context";

const MenuSvg = () => {

    const {colors} = useContext(Context)

    return ( 
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 1.55798H24.0199" stroke={colors?'#000' :'#EAF0FF'} strokeWidth="2"/> <path d="M0 10.0503L24.0198 10.0503" stroke={colors?'#000' :'#EAF0FF'} strokeWidth="2"/> </svg>
    );
}
 
export default MenuSvg;