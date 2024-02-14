import { useContext } from "react";
import Context from "../../../context/context";

const SettingSvg = () => {

    const {colors} = useContext(Context)

    return (  
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.43396 1.02171L8.31929 1.60398L7.88064 3.7346C7.1793 4.00242 6.54329 4.38221 5.96863 4.83258L3.82463 4.1157L3.24864 3.93715L2.94997 4.45147L1.47396 6.91917L1.17529 7.43357L1.61263 7.81598L3.2713 9.22703C3.2113 9.59612 3.13397 9.96119 3.13397 10.3489C3.13397 10.7367 3.2113 11.1018 3.2713 11.4709L1.61263 12.882L1.17529 13.2644L1.47396 13.7787L2.94997 16.2465L3.24864 16.7621L3.82463 16.5823L5.96863 15.8654C6.54329 16.3157 7.1793 16.6955 7.88064 16.9633L8.31929 19.0939L8.43396 19.6762H12.582L12.698 19.0939L13.1353 16.9633C13.8366 16.6955 14.4726 16.3157 15.0473 15.8654L17.1913 16.5823L17.7673 16.7621L18.0673 16.2465L19.542 13.7787L19.842 13.2644L19.4033 12.882L17.7446 11.4709C17.806 11.1018 17.882 10.7367 17.882 10.3489C17.882 9.96119 17.806 9.59612 17.7446 9.22703L19.4033 7.81598L19.842 7.43357L19.542 6.91917L18.0673 4.45147L17.7673 3.93715L17.1913 4.1157L15.0473 4.83258C14.4726 4.38221 13.8366 4.00242 13.1353 3.7346L12.698 1.60398L12.582 1.02171H8.43396Z" stroke={colors?'#000' :'#8996B8'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.1748 10.3489C13.1748 11.82 11.9801 13.0139 10.5081 13.0139C9.03614 13.0139 7.84147 11.82 7.84147 10.3489C7.84147 8.8779 9.03614 7.68406 10.5081 7.68406C11.9801 7.68406 13.1748 8.8779 13.1748 10.3489Z" stroke={colors?'#000' :'#8996B8'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>

    );
}
 
export default SettingSvg;