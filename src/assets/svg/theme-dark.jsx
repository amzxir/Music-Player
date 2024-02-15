import { useAppContext } from "../../context/app/app-context";

const ThemeDark = () => {

    const {theme} = useAppContext()

    return ( 
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.65747 19.1281C3.34898 19.2729 4.06574 19.3491 4.80028 19.3491C10.544 19.3491 15.2003 14.6928 15.2003 8.94906C15.2003 6.15675 14.0998 3.62147 12.309 1.75323C18.3518 1.91678 23.2002 6.86671 23.2002 12.9491C23.2002 19.1346 18.1858 24.1491 12.0002 24.1491C8.09844 24.1491 4.66266 22.1539 2.65747 19.1281Z" stroke={theme === "light" ?'#000' :'#EAF0FF'} strokeOpacity="0.6" strokeWidth="2" strokeLinejoin="round"/>
        </svg>

    );
}
 
export default ThemeDark;