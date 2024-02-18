import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app-reducer";

const AppContext = createContext();

const inistialState = {
    theme: localStorage.getItem("theme") || 'light',
    sidebar: false,
    currentMusic:null,
    open:false,
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, inistialState)

    const changeTheme = (theme) => {
        dispatch({ type: "CHANGE_THEME", payload: theme })
    }

    const changeSidebar = () => {
        dispatch({ type: "CHANGE_SIDEBAR" })
    }

    const chnageMusic = (music) => {
        dispatch({ type:"CHANGE_MUSIC" , payload:music })
    } 

    const chnagePlay = () => {
        dispatch({ type:"CHNAGE_PLAYING" })
    }

    useEffect(() => {
        localStorage.setItem("theme", state.theme)
    }, [state.theme])

    return (
        <AppContext.Provider value={{ ...state, changeTheme, changeSidebar , chnageMusic , chnagePlay }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useAppContext };