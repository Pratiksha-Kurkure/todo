import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, deleteTodoAction, getTodoAction, updateTodoAction } from '../redux/todoAction'

export default function Home() {
    const dispatch = useDispatch()
    const { todo, todoAdded, todoupdated, tododeleted } = useSelector(state => state.allTodo)
    const [seletctedTodo, setseletctedTodo] = useState()
    // console.log("todo",todo);
    const initialState = {
        task: "Meet",
        desc: "At 12:00 AM",
        priority: "High"
    }
    const [addTodo, setaddTodo] = useState(initialState)
    const handleAddTodo = () => {
        dispatch(addTodoAction(addTodo))
    }
    useEffect(e => {
        dispatch(getTodoAction())
    }, [todoAdded, todoupdated, tododeleted])

    const handleUpdate = () => {
        dispatch(updateTodoAction(seletctedTodo))
    }

    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                    {/* for add */}
                    <div class="card">
                        <div class="card-header">Add Todo</div>
                        <div class="card-body">
                            <div>
                                <label for="task" class="form-label">First task</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="task"
                                    placeholder="Enter Your task"
                                    value={addTodo.task}
                                    onChange={e => setaddTodo({ ...addTodo, task: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add task.</div>
                            </div>
                            <div class="mt-2">
                                <label for="desc" class="form-label">Description</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="desc"
                                    placeholder="Enter task description"
                                    value={addTodo.desc}
                                    onChange={e => setaddTodo({ ...addTodo, desc: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add description</div>
                            </div>
                            <div class="mt-2">
                                <label for="priority"> Priority</label>
                                <select class="form-select" id="priority"
                                    value={addTodo.priority}
                                    onChange={e => setaddTodo({ ...addTodo, priority: e.target.value })}>
                                    <option selected>Select Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary w-100 mt-3" onClick={handleAddTodo}>
                                Add Todo
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    {/* for display */}
                    {
                        todo
                            ? todo.map(item => <>
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between">
                                        Todo
                                        <button type="button" class="btn btn-warning" onClick={e => setseletctedTodo(item)} >Edit</button>
                                        <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={e => setseletctedTodo(item)}>Delete</button>
                                    </div>
                                    <div class="card-body">
                                        <p><strong>Task :</strong> {item.task}</p>
                                        <p><strong>Description :</strong> {item.desc}</p>
                                        <p><strong>Priority :</strong> {item.priority}</p>
                                    </div>
                                </div></>)
                            : <h3>No Todo Added</h3>

                    }
                </div>
                <div className="col-sm-4">
                    {/* for update */}
                    {
                        seletctedTodo
                            ? <div class="card">
                                <div class="card-header">update Todo</div>
                                <div class="card-body">
                                    <div>
                                        <label for="task" class="form-label">First task</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="task"
                                            placeholder="Enter Your task"
                                            value={seletctedTodo.task}
                                            onChange={e => setseletctedTodo({ ...seletctedTodo, task: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="desc" class="form-label">Description</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="desc"
                                            placeholder="Enter task description"
                                            value={seletctedTodo.desc}
                                            onChange={e => setseletctedTodo({ ...seletctedTodo, desc: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add description</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="priority"> Priority</label>
                                        <select class="form-select" id="priority"
                                            value={seletctedTodo.priority}
                                            onChange={e => setseletctedTodo({
                                                ...
                                                seletctedTodo, priority: e.target.value
                                            })}>
                                            <option selected>Select Priority</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                    <button type="button" class="btn btn-primary w-100 mt-3" onClick={handleUpdate}>
                                        Update Todo
                                    </button>
                                </div>
                            </div>
                            : <h3>Selete todo</h3>}
                </div>
            </div>
        </div>



        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Are You Sure ? </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body btn-group">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onClick={e => dispatch(deleteTodoAction(seletctedTodo))} >YES</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">NO</button>
                    </div>

                </div>
            </div>
        </div>
    </>
}
