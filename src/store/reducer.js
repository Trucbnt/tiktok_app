import {SET_TODO_INPUT , ADD_TODO_INPUT ,DELETE_TODO_INPUT} from "./constants"

const initState = {
    todos : [] ,
    todoInput : "hello anh em "
}

function reducer(state ,action){
    switch(action.type){
        case SET_TODO_INPUT : 
            return {
                ...state , 
                todoInput : action.payLoad
            };
        case ADD_TODO_INPUT : 
            return {
                ...state , 
                todos : [...state.todos , action.payLoad]
            }
        case DELETE_TODO_INPUT : 
            state.todos.splice(action.layLoad , 1)
            return {
                ...state
            }
    }
}

export {initState}
export default reducer;
