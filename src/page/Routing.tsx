import { FC, useState } from "react";
import Header from "../components/header/Header";
import Auth from "./Auth";
import { useAppSelector } from "../hooks/redux";
import { Route, Routes } from "react-router-dom";
import { RouterDomPath } from "../types/router";
import Todo from "./Todo";

const Routing: FC = () => {
    const [isRegister, setRegister] = useState<boolean>(false)
    const userStatusAuth: boolean = useAppSelector(state => state.auth.status)
    const authStatus = useAppSelector(state => state.auth.status)

    const registration = (): void => {
        setRegister(true)
    }
    const login = (): void => {
        setRegister(false)
    }
    return(
        <>
        <Header setRegister = {registration} login={login}/>
        <div className='container'>
            {userStatusAuth ?  
            <Routes>
                <Route path={RouterDomPath.APP} element ={<Todo/>}/>
                <Route path='*' element ={<Todo/>}/>
            </Routes>
            : 
            <Routes>
                <Route path={RouterDomPath.AUTH} element ={<Auth register={isRegister}/>}/>
                <Route path='*' element ={<Auth register={isRegister}/>}/>
            </Routes>
            }
        </div>
        </>
      
    )
};

export default Routing;