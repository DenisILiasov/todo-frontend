import { FC} from "react";
import { useAppSelector } from "../hooks/redux";
import TodoForm from "../components/todoForm/TodoForm";
import Todos from "./Todos";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Todo: FC = () => {
    const todos = useAppSelector(state => state.user.user.todo)
    
    return(
        <div className='todo__container'>
            <div className="todo__wrapp">
                <TodoForm/>
            </div>
            <TransitionGroup className='todos__container'>
                {todos.map(el => 
                    <CSSTransition key={el.text} timeout={500} classNames='todo'>
                        <Todos text={el.text} status={el.status} _id={el._id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
};

export default Todo;