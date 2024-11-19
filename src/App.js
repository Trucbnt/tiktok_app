import Video from "./Video";
import { useRef } from "react";
function App(){
  const videoRef = useRef();
  return (
    <>
      <Video ref={videoRef}/>
      <div>
         <button className="btn btn-primary" onClick={()=>{videoRef.current.play()}}>Start</button>
         <button className="btn btn-danger" onClick={()=>{videoRef.current.pause()}}>pause</button>
      </div>
    </>
  )
}

export default App;