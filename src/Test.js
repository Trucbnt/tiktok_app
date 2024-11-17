import React from "react";

function Test({count2}){
    console.log("re-render");
    return (
        <div>
            hello anh em {count2}
        </div>
    )
}
export default React.memo(Test);