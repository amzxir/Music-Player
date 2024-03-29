import { useAppContext } from "../../context/app/app-context";

const Search = () => {

    const {theme} = useAppContext();

    return ( 
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19.8041L13.8571 14.6613M8.71429 17.2327C4.4538 17.2327 1 13.7789 1 9.51842C1 5.25794 4.4538 1.80414 8.71429 1.80414C12.9748 1.80414 16.4286 5.25794 16.4286 9.51842C16.4286 13.7789 12.9748 17.2327 8.71429 17.2327Z" stroke={theme === "light" ?'#000' :'#EAF0FF'} strokeWidth="2"/>
        </svg>

    );
}
 
export default Search;