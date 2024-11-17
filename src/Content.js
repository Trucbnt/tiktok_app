import { useReducer } from "react";

const ADD_JOB =  "addJob";
const SET_JOB = "setJob";
const DELETE_JOB = "deleteJob";
const initialState = {
  job : "" , 
  jobs : [] 
}
function reducer(state,action){
    switch(action.type){
      case SET_JOB:
        return {
            ...state , 
            job : action.payLoad
        }
      case ADD_JOB :
        return {
          ...state , 
          jobs : [...state.jobs , action.payLoad]
        }
      case DELETE_JOB :
        state.jobs.splice(action.payLoad, 1);
        return {
          ...state , 
          jobs : [...state.jobs]
        }
    }
}

function setJob(payLoad){
    return {
        type: SET_JOB,
        payLoad
    }
}
function addJob(payLoad){
    return {
        type: ADD_JOB,
        payLoad
    }
}
function deleteJob(payLoad){
    return {
        type: DELETE_JOB,
        payLoad
    }
}
function Content(){
  const [state ,dispatch] = useReducer(reducer,initialState);
  const {job , jobs} = state;
  function handleSubmit(){
    dispatch(addJob(job));
  }
  return (
    <div className="container">
        <div className="row mb-5">
                  <input value={job} className="col-4 rounded p-1 border border-primary" onChange={(e)=>{dispatch(setJob(e.target.value))}}  type="text"/>
                  <button className="btn btn-primary col-1 mx-1" onClick={handleSubmit} >Thêm mới </button>
        </div>
        <ui className="col-5 list-group">

          {
              jobs.map((job , index) =>{
                return <div key={index} className="list-group-item d-flex justify-content-between">
                            <span>{job} </span>
                            <i class=" btn border border-1  fa-solid fa-x" onClick={()=>{dispatch(deleteJob(index))}}></i>
                        </div>
              })
          }
            
        </ui>
    </div>
  )
}

export default Content;