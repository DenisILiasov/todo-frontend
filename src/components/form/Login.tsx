import { FC, useState } from "react";
import './../style/style.css'
import { ILoginAuth } from "../../page/Auth";

interface ILogin{
    valid: boolean,
    login: (value: ILoginAuth) => void
}

const Login: FC<ILogin> = ({valid, login}) => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })

    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        login(inputValue)
    }

    return (
        <div className="form__wrapp">
            <form className="form">
                <input type="email" value={inputValue.email} onChange={e => setInputValue({...inputValue, email: e.target.value})} className='input' placeholder="Ваш email"/>
                <input type="text" value={inputValue.password} onChange={e => setInputValue({...inputValue, password: e.target.value})} className='input' placeholder="Ваш пароль"/>
                <button onClick={registerUser} className="waves-effect waves-light btn-large">Войти</button>
            </form>
        </div>
    )
}

export default Login;