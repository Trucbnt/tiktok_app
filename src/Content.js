import Paragraph from './Paragraph';
import { useStore } from './store';
function Content(){
  const [state , dispatch] = useStore();
    return (
      <span>{state.todoInput}</span>
    )
}

export default Content;