import { useAppContext } from "../../context/app/app-context";

const ExitSvg = () => {

    const {theme} = useAppContext();

    return ( 
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.01636 0.949158L18.001 17.9338" stroke={theme === "light" ?'#000' :'#EAF0FF'} strokeWidth="2"/>
            <path d="M1.01636 17.9337L18.001 0.949148" stroke={theme === "light" ?'#000' :'#EAF0FF'} strokeWidth="2"/>
        </svg>

    );
}
 
export default ExitSvg;