import { useAppContext } from "../../context/app/app-context";


const ContactSvg = () => {

    const { theme } = useAppContext();

    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.17529 15.6788H6.17529V14.6788H5.17529V15.6788ZM5.17529 19.6762H4.17529C4.17529 20.0549 4.38923 20.4011 4.72794 20.5705C5.06665 20.7399 5.472 20.7035 5.77504 20.4764L5.17529 19.6762ZM10.5086 15.6788V14.6788H10.1755L9.90888 14.8786L10.5086 15.6788ZM6.50863 5.35155H5.50863V7.35155H6.50863V5.35155ZM14.5086 7.35155H15.5086V5.35155H14.5086V7.35155ZM6.50863 9.34894H5.50863V11.3489H6.50863V9.34894ZM11.842 11.3489H12.842V9.34894H11.842V11.3489ZM4.17529 15.6788V19.6762H6.17529V15.6788H4.17529ZM5.77504 20.4764L11.1084 16.479L9.90888 14.8786L4.57554 18.876L5.77504 20.4764ZM10.5086 16.6788H18.5086V14.6788H10.5086V16.6788ZM18.5086 16.6788C19.7976 16.6788 20.842 15.6361 20.842 14.3463H18.842C18.842 14.5303 18.6943 14.6788 18.5086 14.6788V16.6788ZM20.842 14.3463V2.35415H18.842V14.3463H20.842ZM20.842 2.35415C20.842 1.06437 19.7976 0.0217133 18.5086 0.0217133V2.02171C18.6943 2.02171 18.842 2.17022 18.842 2.35415H20.842ZM18.5086 0.0217133H2.50863V2.02171H18.5086V0.0217133ZM2.50863 0.0217133C1.21965 0.0217133 0.175293 1.06437 0.175293 2.35415H2.17529C2.17529 2.17022 2.32294 2.02171 2.50863 2.02171V0.0217133ZM0.175293 2.35415V14.3463H2.17529V2.35415H0.175293ZM0.175293 14.3463C0.175293 15.6361 1.21965 16.6788 2.50863 16.6788V14.6788C2.32294 14.6788 2.17529 14.5303 2.17529 14.3463H0.175293ZM2.50863 16.6788H5.17529V14.6788H2.50863V16.6788ZM6.50863 7.35155H14.5086V5.35155H6.50863V7.35155ZM6.50863 11.3489H11.842V9.34894H6.50863V11.3489Z" fill={theme === "light" ? '#000' : '#8996B8'} fillOpacity="0.6" />
        </svg>
    );
}

export default ContactSvg;