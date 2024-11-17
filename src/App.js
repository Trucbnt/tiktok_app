
import Content from "./Content";
import { useState } from "react";

function App(){
    const [isInput , setIsInput] = useState(false);
    function handleClick(){
        setIsInput(prev => !prev);
    }
    return (
        <div>
           <Content/>
        </div>
    );
}

export default App;