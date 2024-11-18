import {SET_TODO_INPUT , ADD_TODO_INPUT ,DELETE_TODO_INPUT,EDIT_TODO_INPUT} from "./constants"

export  const setTodoInput= payLoad =>{
    return {
        type : SET_TODO_INPUT , 
        payLoad
    }
}
export  const addTodoInput= payLoad =>{
    return {
        type : ADD_TODO_INPUT , 
        payLoad
    }
}
export  const deleteTodoInput= payLoad =>{
    return {
        type : DELETE_TODO_INPUT , 
        payLoad
    }
}
export  const editTodoInput= (payLoad , index) =>{
    return {
        type : EDIT_TODO_INPUT , 
        payLoad , 
        index
    }
}