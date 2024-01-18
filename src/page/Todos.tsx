import { FC } from "react";
import { ITodo } from "../types/todo";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { deleteTodo } from "../store/user/userSlice";

const Todos: FC<ITodo> = ({text, status, _id}) => {
    const dispath = useAppDispatch()
    const deleteTodos = () => {
        dispath(deleteTodo(_id))
    }

    return (
        <div className='todos__wrapp'>
            <label>
                <input type="checkbox"  />
                <span>{text}</span>
            </label>
            <div className="todo__change">
                <p onClick={deleteTodos}>✖</p>
                <p>&#128396;</p>
            </div>
        </div>

    )
}

export default Todos;