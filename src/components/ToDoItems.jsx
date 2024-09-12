// import ToDoItem from "./ToDoItem";

// import {TodoItemsContext} from "../store/todo-items-store";
// import { useContext } from "react";


// function ToDoItems({onDeleteClick}) {
//     const contextObj = useContext(TodoItemsContext);
//     const details = contextObj.ToDoItemsList;
//     console.log(details)
//     return <>
//         {details.map(i => (<ToDoItem key={i.name} name={i.name} date={i.date} onDeleteClick={onDeleteClick}></ToDoItem>))}

//     </>
// }


// export default ToDoItems;











import ToDoItem from "./ToDoItem";

import {TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";


function ToDoItems() {
    const contextObj = useContext(TodoItemsContext);
    const details = contextObj.ToDoItemsList;
    console.log(details)
    return <>
        {details.map(i => (<ToDoItem key={i.name} name={i.name} date={i.date} ></ToDoItem>))}

    </>
}


export default ToDoItems;