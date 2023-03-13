import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const addTodoAction = createAsyncThunk("todo/add", async (arg, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/todos", arg)
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const getTodoAction = createAsyncThunk("todo/get", async (arg, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/todos")
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const updateTodoAction = createAsyncThunk("todo/update", async (selectedTodo, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.put(`http://localhost:5000/todos/${selectedTodo.id}`, selectedTodo)
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const deleteTodoAction = createAsyncThunk("todo/delete", async (selectedTodo, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/todos/${selectedTodo.id}`)
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})