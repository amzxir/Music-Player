import { useContext } from "react";
import Context from "../../../context/context";

const Next = () => {

    const {colors} = useContext(Context)

    return ( 
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6676 15.4478L18.0621 16.2955C18.3797 16.5222 18.7973 16.5526 19.1443 16.374C19.4912 16.1955 19.7093 15.838 19.7093 15.4478H18.6676ZM18.6676 1.55887H19.7093C19.7093 1.16867 19.4912 0.811195 19.1443 0.632648C18.7973 0.454103 18.3797 0.484429 18.0621 0.711226L18.6676 1.55887ZM8.94535 8.50334L8.33989 7.6557C8.06614 7.85123 7.90368 8.16693 7.90368 8.50334C7.90368 8.83975 8.06614 9.15545 8.33989 9.35098L8.94535 8.50334ZM19.7093 15.4478V1.55887H17.6259V15.4478H19.7093ZM18.0621 0.711226L8.33989 7.6557L9.55081 9.35098L19.2731 2.40651L18.0621 0.711226ZM8.33989 9.35098L18.0621 16.2955L19.2731 14.6002L9.55081 7.6557L8.33989 9.35098ZM3.04255 16.1423V0.864422H0.959208V16.1423H3.04255Z" fill={colors?'#000' :'#EAF0FF'}/>
        </svg>

    );
}
 
export default Next;