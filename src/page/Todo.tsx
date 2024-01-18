import { FC} from "react";
import { useAppSelector } from "../hooks/redux";
import TodoForm from "../components/todoForm/TodoForm";
import Todos from "./Todos";

const Todo: FC = () => {
    const todos = useAppSelector(state => state.user.user.todo)
    console.log(todos)
    return(
        <div className='todo__container'>
            <div className="todo__wrapp">
                <TodoForm/>
            </div>
            <div className="todos__container">
                {todos.map(el => 
                    <Todos text={el.text} status={el.status} key={el._id} _id={el._id}/>
                )}
            </div>
        </div>
    )
};

export default Todo;