import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './Reducer'

const AppContext = React.createContext();

const API = "http://localhost:5000/services"

const initialState = {
    name: '',
    image: '',
    services: []
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateHomePage = () => {
        return dispatch({
            type: "home_update",
            payload : {
                name: "PANSUVI TECHNICAL",
                image: "./Images/hero.svg"
            }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
            type: "about_update",
            payload : {
                name: "ASIF PANSUVI",
                image: "./Images/about1.svg"
            }
        })
    }
 
    //to get services
    const getServices = async (url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json() ;
            dispatch({
                type: 'get_services',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getServices(API);
    }, [])

    

    return <AppContext.Provider value={{...state, updateHomePage,updateAboutPage }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}