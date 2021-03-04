import styles from './ToDoList.module.css';

function NewTodoItem(props ){
    var newItem = "";
	
    function onChangeInputHandler(event){
	   newItem = event.target.value;	
       console.log(newItem);	   
	}
	
	function onButtonClickHandler() {
		props.onNewAddedItem(newItem);
	}
	
	return (
	  <div>
	   
        <input type="text" onChange={(event) => {onChangeInputHandler(event)}}/>
        <button onClick = {() => {onButtonClickHandler()}} >Add</button>
	   </div>
	);
}

export default NewTodoItem;
