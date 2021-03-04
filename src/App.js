import { useState } from 'react';
import ToDoList from './ToDoList';
import NewTodoItem from './NewTodoItem';
// A to-do list to use for testing purposes


const initialTodos = [
  { description: 'Finish lecture', isComplete: false },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: false }
];

function App() {

  const [todos, setComplete] = useState(initialTodos);
  
  function updateStatus(index, status){
	const updatedToDos = [...todos];
    updatedToDos[index].isComplete = status;
	console.log(updatedToDos);
	setComplete(updatedToDos);

  }
  
  function addItem(description){
	const updatedToDos = [...todos];
    var newItem = {"description": description, isComplete: false};
	updatedToDos.push(newItem);
	console.log(updatedToDos);
	setComplete(updatedToDos);

  }
  
    function deleteItem(index){
	const updatedToDos = [...todos];
    
	updatedToDos.splice(index, 1);
	console.log(updatedToDos);
	setComplete(updatedToDos);

  }
  
  return (
    <div>
      <div>
        <h1>My todos</h1>
        <ToDoList items={todos} onTodoStatusChanged={(index, status) => updateStatus(index,status)} onItemDelete={(index) => deleteItem(index)}/>

      </div>
      <div>
        <h1>Add item</h1>
		<NewTodoItem onNewAddedItem={(description) => addItem(description)} />
        
      </div>

    </div>
  );
}

export default App;