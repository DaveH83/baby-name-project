import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, NameContext } from "../App"

export const Namepage = () => {

    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    const {nameList} = useContext(NameContext)

    useEffect(() => {
        if(nameList.length > 0){
            console.log(nameList)
        }
    }, [nameList])

    return(
        <>
        
        
        
        
        
        </>


    )
}