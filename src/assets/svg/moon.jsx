import { useAppContext } from "../../context/app/app-context";

const Moon = () => {

    const {theme} = useAppContext();

    return ( 
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.65747 19.1789C2.34898 19.3238 3.06574 19.3999 3.80028 19.3999C9.54404 19.3999 14.2003 14.7437 14.2003 8.9999C14.2003 6.2076 13.0998 3.67231 11.309 1.80408C17.3518 1.96762 22.2002 6.91756 22.2002 12.9999C22.2002 19.1855 17.1858 24.1999 11.0002 24.1999C7.09844 24.1999 3.66266 22.2047 1.65747 19.1789Z"  stroke={theme === "light" ?'#000' :'#EAF0FF'} strokeWidth="2" strokeLinejoin="round"/>
        </svg>

     );
}
 
export default Moon;