import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { ITodo } from "../../types/todo";

interface IUserSlice{
    user: IUser
}

interface changeTodo{
    text: string,
    _id: number
}

const initialState: IUserSlice = {
    user: {
        name: '',
        email: '',
        _id: '',
        todo: []
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initialUser: (state, action: PayloadAction<IUser>) => {
            state.user.email = action.payload.email;
            state.user.name = action.payload.name;
            state.user._id = action.payload._id;
            state.user.todo = action.payload.todo;
        },
        leaveUser: (state) => {
            state.user.email = ''
            state.user.name = ''
        },
        addUserTodo: (state, action: PayloadAction<ITodo>) => {
            state.user.todo.push(action.payload)
         
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.user.todo = state.user.todo.filter(el => el._id !== action.payload)
        },
        changeTodo: (state, action: PayloadAction<changeTodo>) => {
            state.user.todo.forEach(el => {
                if(el._id === action.payload._id){
                    el.text = action.payload.text;
                }
            })
        },
        changeTrueStatus: (state, action: PayloadAction<number>) => {
            state.user.todo.forEach(el => {
                if(el._id === action.payload){
                    el.status = true;
                }
            })
        },
        changeFalseStatus: (state, action: PayloadAction<number>) => {
            state.user.todo.forEach(el => {
                if(el._id === action.payload){
                    el.status = false;
                }
            })
        }   
    }
})

export default userSlice.reducer;
export const {initialUser, leaveUser, addUserTodo, deleteTodo, changeTodo, changeFalseStatus, changeTrueStatus} = userSlice.actions