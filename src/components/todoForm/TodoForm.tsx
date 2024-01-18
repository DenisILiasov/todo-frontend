import { FC, useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { ApiPath } from "../../types/api";
import { addUserTodo } from "../../store/user/userSlice";



const TodoForm:FC = () => {
    const dispath = useAppDispatch()
    const userId = useAppSelector(state => state.user.user._id)
    const userTodo = useAppSelector(state => state.user.user.todo)
    const [text, setText] = useState<string>('')

    useEffect(() => {
        const response = axios.post(`${ApiPath.PATH}user/todos/${userId}`, {
            todo: userTodo
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }, [userTodo])
    
    const addTodo = () => {
        dispath(addUserTodo({text, status: false, _id: userTodo.length + 1}))
    }

    return(
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} className="input" placeholder="Ваша задача" />
            <a onClick={addTodo} className="waves-effect waves-light btn-small">Добавить задачу</a>
        </div>
    )
};

export default TodoForm