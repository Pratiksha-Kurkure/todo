import { configureStore} from "@reduxjs/toolkit"
import todoSlice from "./todoSlice"
const store = configureStore({
    reducer:{
        allTodo : todoSlice
    }
})
export default  store