import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";


function ToDoItem({name, date}) {

    const contextObj = useContext(TodoItemsContext)
    const onDeleteClick = contextObj.deleteItem;


    return     <div className = 'row myrow'>
    <div className = 'col-6'>
      {name}
    </div>
    <div className = 'col-4'>
      {date}
    </div>
    <div className = 'col-2'>
      <button type="button" className="btn btn-danger mybtn" onClick={() => onDeleteClick(name)}><MdDelete/>
      </button>
    </div>
  </div>
}

export default ToDoItem;