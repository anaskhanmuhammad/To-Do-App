// import { useState, useRef } from "react";
// import { BiMessageAdd } from "react-icons/bi";


// function AddToDo({onNewItems}) {

//   const [todoName, settodoName] = useState("");
//   const [todoDate, settodoDate] = useState("");


//   function handleNameChange(event) {
//     settodoName(event.target.value);
//     noOfUpdates.current += 1; 
//   }
//   function handleDateChange(event) {
//     settodoDate(event.target.value);
//     console.log("Updates: " + noOfUpdates.current)
//   }


//   function handleAddButton() {
//     onNewItems(todoName, todoDate);
//     settodoName("");
//     settodoDate("");
//     event.preventDefault();
//   }



//     return (    
//     <form action="" className = 'row' onSubmit={handleAddButton}>
//         <div className = 'col-6'>
//           <input type="" placeholder="Enter ToDo Here" onChange={handleNameChange} value={todoName}/>
//         </div>
//         <div className = 'col-4'>
//           <input type="date" onChange={handleDateChange} value={todoDate}/>
//         </div>
//         <div className = 'col-2'>
//           <button className="btn btn-success mybtn" ><BiMessageAdd /></button>
//         </div>
//     </form>
//   )
// }

// export default AddToDo;

















import { useState, useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {

  // const [todoName, settodoName] = useState("");
  // const [todoDate, settodoDate] = useState("");


  const contextObj = useContext(TodoItemsContext)
  const onNewItems = contextObj.addNewItem;



  const toDoNameElement = useRef();
  const dueDoNameElement = useRef();

  // function handleNameChange(event) {
  //   settodoName(event.target.value);
  //   noOfUpdates.current += 1; 
  // }
  // function handleDateChange(event) {
  //   settodoDate(event.target.value);
  //   console.log("Updates: " + noOfUpdates.current)
  // }


  function handleAddButton(event) {
    const todoName = toDoNameElement.current.value;
    const todoDate = dueDoNameElement.current.value;
    toDoNameElement.current.value = '';
    dueDoNameElement.current.value = ''
    onNewItems(todoName, todoDate);
    // settodoName("");
    // settodoDate("");
    event.preventDefault();
  }



    return (    
    <form action="" className = 'row' onSubmit={handleAddButton}>
        <div className = 'col-6'>
          <input type="" ref={toDoNameElement} placeholder="Enter ToDo Here"/>
        </div>
        <div className = 'col-4'>
          <input type="date" ref={dueDoNameElement}/>
        </div>
        <div className = 'col-2'>
          <button className="btn btn-success mybtn" ><BiMessageAdd /></button>
        </div>
    </form>
  )
}

export default AddToDo;