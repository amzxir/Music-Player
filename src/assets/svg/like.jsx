import { useState } from "react";
import styled from "styled-components";

const Svg = styled.svg({

})

const Like = () => {

    const [like , setLike] = useState(false);

    return ( 
        <Svg onClick={()=> setLike(!like)} width="20" height="19" viewBox="0 0 20 19" fill={like?'red':'#555B6A'} xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1942 16.6308L9.48708 17.3379C9.67462 17.5255 9.92897 17.6308 10.1942 17.6308C10.4594 17.6308 10.7138 17.5255 10.9013 17.3379L10.1942 16.6308ZM3.03683 9.47346L2.32972 10.1806L2.32972 10.1806L3.03683 9.47346ZM9.03683 3.47346L8.32972 4.18057L8.32972 4.18057L9.03683 3.47346ZM10.1942 4.63082L9.48708 5.33793C9.67462 5.52546 9.92897 5.63082 10.1942 5.63082C10.4594 5.63082 10.7138 5.52546 10.9013 5.33793L10.1942 4.63082ZM11.3515 3.47346L10.6444 2.76635L10.6444 2.76635L11.3515 3.47346ZM10.9013 15.9237L3.74394 8.76635L2.32972 10.1806L9.48708 17.3379L10.9013 15.9237ZM16.6444 8.76635L9.48708 15.9237L10.9013 17.3379L18.0587 10.1806L16.6444 8.76635ZM8.32972 4.18057L9.48708 5.33793L10.9013 3.92371L9.74394 2.76635L8.32972 4.18057ZM10.9013 5.33793L12.0587 4.18057L10.6444 2.76635L9.48708 3.92371L10.9013 5.33793ZM14.3515 1.23082C12.9611 1.23082 11.6276 1.78317 10.6444 2.76635L12.0587 4.18057C12.6668 3.57245 13.4915 3.23082 14.3515 3.23082V1.23082ZM17.5942 6.47346C17.5942 7.33346 17.2526 8.15824 16.6444 8.76635L18.0587 10.1806C19.0418 9.19738 19.5942 7.86389 19.5942 6.47346H17.5942ZM19.5942 6.47346C19.5942 3.57803 17.247 1.23082 14.3515 1.23082V3.23082C16.1424 3.23082 17.5942 4.6826 17.5942 6.47346H19.5942ZM6.03683 3.23082C6.89683 3.23082 7.72161 3.57245 8.32972 4.18057L9.74394 2.76635C8.76075 1.78317 7.42726 1.23082 6.03683 1.23082V3.23082ZM2.79419 6.47346C2.79419 4.6826 4.24597 3.23082 6.03683 3.23082V1.23082C3.1414 1.23082 0.794189 3.57803 0.794189 6.47346H2.79419ZM3.74394 8.76635C3.13582 8.15824 2.79419 7.33346 2.79419 6.47346H0.794189C0.794189 7.8639 1.34654 9.19738 2.32972 10.1806L3.74394 8.76635Z"/>
        </Svg>
    );
}
 
export default Like;