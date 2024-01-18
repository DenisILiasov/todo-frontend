import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice{
    status: boolean
}

const initialState: IAuthSlice = {
    status: false
}; 

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorization: (state) => {
            state.status = !state.status
        }
    }
})

export default authSlice.reducer;
export const {authorization} = authSlice.actions