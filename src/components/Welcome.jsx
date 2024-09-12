import { useContext } from 'react';
import styles from './Welcome.module.css'
import { TodoItemsContext } from '../store/todo-items-store';




function Welcome({}) {
    
    const contextObj = useContext(TodoItemsContext);
    const ToDoItemsList = contextObj.ToDoItemsList;
    return ToDoItemsList.length == 0 && <p className= {styles.welcomeCnt}>Enjoy your day!!!</p>
}

export default Welcome;