import {useStore ,setTodoInput, addTodoInput, deleteTodoInput} from "./store";
import "./App.css";
function App() {
  const [state , dispatch] = useStore();
  const {todos , todoInput} = state;
  function handleSubmit(){
    dispatch(addTodoInput(todoInput));
    dispatch(setTodoInput(""));
  }
  return (
    <div className="container">
       <div className="d-flex">
         <input class="form-control" type="text" value={todoInput} onChange={(e)=>{dispatch(setTodoInput(e.target.value))}}/>
         <button onClick={handleSubmit} className="btn btn-success"><i class="fa-solid fa-plus"></i></button>
      </div>
      <ul className = "list-group col-5">
        {
          todos.map((todo , index)=>{
             return <div className="list-group-item d-flex justify-content-between"><span>{todo}</span>
             <i class="fa-solid fa-xmark" onClick={()=>{dispatch(deleteTodoInput(index))}}></i></div>
          })
        }
      </ul>
    </div>
     
  );
}

export default App;
