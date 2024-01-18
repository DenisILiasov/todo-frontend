import { FC, useState } from "react";
import './../style/style.css'
import { IRegister } from "../../page/Auth";

interface IRegistration{
    valid: boolean,
    register: (value: IRegister) => void
}

const Registration:FC<IRegistration> = ({valid, register}) => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        name: ''
    })

    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        register(inputValue)
    }
    return(
        <div className="form__wrapp">
             <form className="form">
             <input type="email" value={inputValue.name} onChange={e => setInputValue({...inputValue, name: e.target.value})} className='input' placeholder="Ваше имя"/>
                <input type="email" value={inputValue.email} onChange={e => setInputValue({...inputValue, email: e.target.value})} className='input' placeholder="Ваш email"/>
                <input type="text" value={inputValue.password} onChange={e => setInputValue({...inputValue, password: e.target.value})} className='input' placeholder="Ваш пароль"/>
                <button onClick={registerUser} className="waves-effect waves-light btn-large">Зарегистрироваться</button>
                {valid ? <></> : <div>Проверьте правильно ли вы ввели данные</div>}
            </form>
        </div>
    )
};

export default Registration;