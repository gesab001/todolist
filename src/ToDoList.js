import styles from './ToDoList.module.css';

function ToDoList(props ){

    function onChangeStatusHandler(event, index){
	   const status = event.target.checked;
	   
       props.onTodoStatusChanged(index.index, status);
	   
	}

	function onButtonClickHandler(index) {
		props.onItemDelete(index.index);
	}
	
	return (
	  <div>
	   {props.items ?
		 <ul className={styles.itemList}> {props.items.map((item, index) => (
                  <li key={index}><button onClick = {() => {onButtonClickHandler({index})}} >delete</button><input type="checkbox" onChange={(event) => {onChangeStatusHandler(event, {index})}} checked={item.isComplete}/><span  className={item.isComplete ? styles.complete : styles.incomplete} >{item.description}</span></li>
               )
			  )
			 }
		 </ul>
		:
		  <p>There are no to do items</p>
	   }
	   </div>
	);
}

export default ToDoList;
