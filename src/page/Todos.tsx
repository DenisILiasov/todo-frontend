import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/todo";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { deleteTodo, changeTodo, changeFalseStatus, changeTrueStatus } from "../store/user/userSlice";
import ModalWindow from "../components/ui/ModalWindow";


const Todos: FC<ITodo> = ({text, status, _id}) => {
    const [modal, setModal] = useState<boolean>(false)
    const [changeText, setChangeText] = useState<string>('')
    const [inputCheked, setInputCheked] = useState<boolean>(status)
    const checkboxStyle: string[] = ['text', 'cheked'] 
    const dispath = useAppDispatch()
    
    const deleteTodos = () => {
        dispath(deleteTodo(_id))
    }

    const changeTodos = () => {
        dispath(changeTodo({text: changeText, _id}))
        setChangeText('')
        setModal(false)
    }

    const changeStatus = () => {
        if(inputCheked){
            dispath(changeFalseStatus(_id))
        }else{
            dispath(changeTrueStatus(_id))
        }
        
    }

    const clouseModal = (): void => {
        setModal(false)
    }

    const openModal = () => {
        setModal(true)
    }
    return (
        <div className='todos__wrapp'>
            <label onClick={changeStatus}>
                <input checked= {inputCheked} onChange={e => setInputCheked(e.target.checked)} type="checkbox" />
                <span className={inputCheked ? checkboxStyle.join(" ") : 'text'}>{text}</span> 
            </label>
            <div className="todo__change">
                <p onClick={deleteTodos}>✖</p>
                <p onClick={openModal}>&#128396;</p>
            </div>
            <ModalWindow clouse={clouseModal} openModal={modal}>
                <input value={changeText} onChange={e => setChangeText(e.target.value)} type="text" className="input modalInput" placeholder="Введите изменение" />
                <div className="button__container">
                    <a onClick={changeTodos} className="waves-effect waves-light btn">Изменить</a>
                    <a onClick={clouseModal} className="waves-effect waves-light btn">Отмена</a>
                </div>
            </ModalWindow>
        </div>
    )
}

export default Todos;