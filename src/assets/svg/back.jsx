import { useAppContext } from "../../context/app/app-context";

const BackIcon = () => {
    
    const { theme } = useAppContext();


    return ( 
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.19613 12.7894L9.59613 6.38937M3.19613 12.7894L9.59613 19.1894M3.19613 12.7894H23.1961" stroke={theme === "light" ?'#000':'#EAF0FF'} strokeWidth="2"/>
        </svg>

    );
}
 
export default BackIcon;