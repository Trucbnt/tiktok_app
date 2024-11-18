import {
  useStore,
  setTodoInput,
  addTodoInput,
  deleteTodoInput,
  editTodoInput,
} from "./store";
import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const [isModalOpen, setModalOpen] =useState(false);
  const [selectedTodo, setSelectedTodo] = useState("");
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const modalRef = useRef(null);
  function handleSubmit() {
    dispatch(addTodoInput(todoInput));
    dispatch(setTodoInput(""));
  }
  function handleEdit(){
      dispatch(editTodoInput(selectedTodo ,selectedTodoIndex));
      setModalOpen(false);
  }
  const handleClickOutside =(event)=>{
    if(modalRef.current && !modalRef.current.contains(event.target)){
      setModalOpen(false);
    }
}
  useEffect(()=>{
    if(isModalOpen){
      document.addEventListener("mousedown", handleClickOutside);
    }else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  } , [isModalOpen])
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <input
          class="form-control mx-3"
          type="text"
          value={todoInput}
          onChange={(e) => {
            dispatch(setTodoInput(e.target.value));
          }}
        />
        <button onClick={handleSubmit} className="btn btn-success d-flex align-items-center">
            <span className="mx-2">Thêm</span> <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <ul className="list-group col-8 mt-5">
        {todos.map((todo, index) => {
          return (
            <>
              <div
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <span>{todo}</span>
                <div>
                  <i
                    class="mx-1 btn btn-warning fa-solid fa-pen-to-square" 
                    onClick={(e) => {
                      setModalOpen(true);
                      setSelectedTodo(todos[index]);
                      setSelectedTodoIndex(index);
                    }}
                  ></i>
                  <i
                    class="mx-1 btn btn-danger fa-solid fa-xmark"
                    onClick={() => {
                      dispatch(deleteTodoInput(index));
                    }}
                  ></i>
                </div>
              </div>
              {
                 isModalOpen && (
                    <div
                class="modal show d-block"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content" ref={modalRef}>
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Chỉnh sửa thông tin sản phẩm 
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        onClick={()=>{setModalOpen(false)}}
                      ></button>
                    </div>
                    <div class="modal-body">
                      <input type="text" className="form-control" value={selectedTodo} onChange={(e)=>{setSelectedTodo(e.target.value)}}/>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={()=>{setModalOpen(false)}}
                      >
                        Đóng
                      </button>
                      <button type="button" class="btn btn-warning" onClick={handleEdit}>
                        Chỉnh sửa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                  )
              }
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
