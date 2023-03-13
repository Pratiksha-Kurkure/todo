import { createSlice} from "@reduxjs/toolkit"
import { addTodoAction, deleteTodoAction, getTodoAction, updateTodoAction } from "./todoAction"

const todoSlice = createSlice({
    name:"todo",
    initialState:{todo:[]},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addTodoAction.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(addTodoAction.fulfilled,(state,{payload})=>{
            state.loading=false
            state.todoAdded = state.todoAdded ? false : true
        })
        .addCase(addTodoAction.rejected,(state,{payload})=>{
            state.loading=false
            state.addTodoError = payload
        })
        .addCase(getTodoAction.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(getTodoAction.fulfilled,(state,{payload})=>{
            state.loading=false
            state.todo = payload
        })
        .addCase(getTodoAction.rejected,(state,{payload})=>{
            state.loading=false
            state.getTodoError = payload
        })
        .addCase(updateTodoAction.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(updateTodoAction.fulfilled,(state,{payload})=>{
            state.loading=false
            state.todoupdated =  state.todoupdated ? false : true
        })
        .addCase(updateTodoAction.rejected,(state,{payload})=>{
            state.loading=false
            state.updateTodoError = payload
        })
        .addCase(deleteTodoAction.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(deleteTodoAction.fulfilled,(state,{payload})=>{
            state.loading=false
            state.tododeleted = state.tododeleted ? false : true
        })
        .addCase(deleteTodoAction.rejected,(state,{payload})=>{
            state.loading=false
            state.deleteTodoError = payload
        })
    }
})
export default todoSlice.reducer