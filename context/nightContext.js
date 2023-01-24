import { createContext, useContext, useState } from "react";
import { useRouter } from 'next/router'


export const NightContext = createContext()

export const useNight = () => useContext(NightContext)



export const NightProvider = ({children}) => {
    const router = useRouter()
    const {push}= useRouter 
    
    const [styles, setTask ]= useState([
        { id: "1", night: true}
    ])



    const switchColor = (lastState) => {
    

        if (lastState ) { 
            styles[0].night = false 
        } else if (!lastState) { 
            styles[0].night = true  
        }

    //    router.reload()
    }
 
    return (
        <NightContext.Provider value={{styles, switchColor}}> 
            {children}
        </NightContext.Provider>
    )
}                                                                                                                                                                                                                                                                                                                                   