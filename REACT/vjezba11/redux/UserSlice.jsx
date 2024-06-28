import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"users",
    initialState:[
        {
            id: "1",
            ime: "Petra",
            email: "petra@example.hr"
        },
        {
            id: "2",
            ime: "Nensi",
            email: "nensi@example.hr"
        },
        {
            id: "3",
            ime: "Maja",
            email: "maja@example.hr"
        },
    ],

    reducers:{
        addUser: (state) => {},
        editUser: (state) => {},
        deleteUser: (state) => {},
    },
});

export const {addUser, editUser, deleteuser} = UserSlice.actions;
export default UserSlice.reducer;
