import { FC } from "react";
import { useAppSelector, useAppDispatch} from "../../hooks/redux";
import { authorization } from "../../store/auth/auth";
import { leaveUser } from "../../store/user/userSlice";


interface IHeader{
    setRegister: () => void,
    login: () => void;
}

const Header: FC<IHeader> = ({setRegister, login}) => {
    const userAuthStatus = useAppSelector(state => state.auth.status)
    const dispath = useAppDispatch()
    const leavesUser = () => {
        dispath(authorization())
        dispath(leaveUser())
    }
    return(   
    <nav>
        <div className="nav-wrapper">
            <a className="brand-logo">Todo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {userAuthStatus ?  <li onClick={leavesUser}><a >Выход</a></li> : 
            <>
                <li onClick={setRegister}><a>Регистрация</a></li>
              <li onClick={login}><a >Вход</a></li>
            </>
            }
            </ul>
        </div>
    </nav>
    )
}

export default Header;