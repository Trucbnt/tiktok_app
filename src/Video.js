import video1 from "./videos/video1.mp4";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
function Video(props,ref) { // ref được truyền vào từ component cha sẽ nhận ở tham số thứ 2
    const videoRef = useRef();
    // use ImperativeHandle giới hạn những gì mà component cha có thể truy cập được (tính đóng gói)
    useImperativeHandle(ref , ()=>{
        return {
            play(){
                videoRef.current.play();
            },
            pause(){
                videoRef.current.pause();
            }
        }
    })
  return <video ref={videoRef} src={video1} width={200} controls/>;
}

export default forwardRef(Video);// cho phép bạn nhận ref từ component cha
