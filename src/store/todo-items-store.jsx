import { createContext, useReducer } from "react";



export const TodoItemsContext = createContext({ToDoItemsList: [], addNewItem: () => {}, deleteItem: () => {}});




const toitemsreducer = (currToDoItems, action) => {
    let newToDoItems = currToDoItems;

    if (action.type === 'NEW_ITEM') {
        newToDoItems = [...currToDoItems, {name: action.payload.itemName, date: action.payload.itemDueDate}];
    }
  
    else if (action.type === 'DELETE_ITEM') {
         newToDoItems = currToDoItems.filter(item => item.name != action.payload.itemToDeleteName)
        // setToDoItemsList(newList);
    }

    return newToDoItems;
  }



function TodoItemsContextProvider({children}) {
    const [ToDoItemsList, DispatchnewToDoItems] = useReducer(toitemsreducer, [])
    
    function addNewItem(itemName, itemDueDate) {
        // console.log(itemName);
        // console.log(itemDueDate);
        // setToDoItemsList(newList);
        const newItemAction = {
        type: 'NEW_ITEM',
        payload: {
            itemName: itemName,
            itemDueDate:itemDueDate
        }
        }
        DispatchnewToDoItems(newItemAction)
    } 

    function deleteItem(itemToDeleteName) {
        const deleteItemAction = {
        type: 'DELETE_ITEM',
        payload: {
            itemToDeleteName: itemToDeleteName,
        }
        }
        DispatchnewToDoItems(deleteItemAction)
    } 

    return (
        <TodoItemsContext.Provider value={{ToDoItemsList: ToDoItemsList, addNewItem: addNewItem, deleteItem: deleteItem}}>
            {children}
        </TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider;