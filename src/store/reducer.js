import {SET_TODO_INPUT , ADD_TODO_INPUT ,DELETE_TODO_INPUT,EDIT_TODO_INPUT} from "./constants"

const initState = {
    todos : [] ,
    todoInput : "hello anh em "
}

function reducer(state ,action){
    console.log(action);
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
            const newTodos = [...state.todos];
            newTodos.splice(action.payLoad, 1)
            return {
                ...state , 
                todos :  newTodos
            }
        case EDIT_TODO_INPUT : 
            state.todos[action.index] = action.payLoad
            return {
                ...state , 
            }
    }
}

export {initState}
export default reducer;
