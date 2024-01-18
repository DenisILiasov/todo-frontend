import { ITodo } from "./todo";

export interface IUser{
    name: string,
    email: string,
    _id: string,
    todo: ITodo[]
}

export interface IUserAuth extends IUser{
    password: string,
}