import { FC, useState } from "react";
import './style/style.css';
import Registration from "../components/form/Registration";
import Login from "../components/form/Login";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { useSearchParams } from "react-router-dom";
import { ApiPath } from "../types/api";
import { authorization } from "../store/auth/auth";
import { initialUser } from "../store/user/userSlice";

interface IAuth{
    register: boolean
}

export interface IRegister{
    email: string,
    password: string,
    name: string
}

export interface ILoginAuth{
    email: string,
    password: string
}

const Auth: FC<IAuth> = ({register}) => {
    const [valid, setValid] = useState<boolean>(true)
    const dispath = useAppDispatch()
    const registerUser = async (value: IRegister) => {
        const response = axios.post(`${ApiPath.PATH}auth/register`, {
            name: value.name,
            email: value.email,
            password: value.password
        }).then(r => {
            dispath(authorization())
            console.log(r)
            dispath(initialUser(r.data))
        })
        .catch(e => {
            console.log(e)
            setValid(false)
        })
    }

    const loginUser = async (value: ILoginAuth) => {
        const response = axios.post(`${ApiPath.PATH}auth/login`, {
            email: value.email,
            password: value.password
        }).then(r => {
            dispath(authorization())
            dispath(initialUser(r.data))
            console.log(r)
        })
        .catch(e => {
            console.log(e)
            setValid(false)
        })
    }

    return(
        <div className="auth__container">
            {register ? <Registration register={registerUser} valid={valid}/> : <Login valid={valid} login={loginUser}/>}
        </div>  
    )
}

export default Auth;