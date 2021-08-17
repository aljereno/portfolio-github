import React, { useEffect, useState } from 'react';
import '../App.css';

/*
NOT IN USE
Tree: Drag.js
Objective: Contains experimental code that allows dragging of specific objects from one side of the screen to the other in a functional way
*/
const Drag = () => {
    let tasks = {
        inProgress: [],
        Done: []
      }
    const [task, setTask] = useState([
        {id: "1", taskName:"Read book",type:"inProgress", backgroundColor: "red"},
        {id: "2", taskName:"Pay bills", type:"inProgress", backgroundColor:"green"},
        {id: "3", taskName:"Go to the gym", type:"Done", backgroundColor:"blue"},
        {id: "4", taskName:"Play baseball", type:"Done", backgroundColor:"green"}
    ])

    task.forEach ((task) => {
        tasks[task.type].push(
          <div key={task.id} 
            onDragStart = {(event) => onDragStart(event, task.taskName)}
            draggable
            className="draggable"
            style = {{backgroundColor: task.bgcolor}}>
            {task.taskName}
          </div>
        );
      });


    //On the start of clicking an object, console will log which event was picked up
    const onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}

    //Default behavior would be to snap the event back to its original spot
	const onDragOver = (event) => {
	    event.preventDefault();
	}

	const onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let taskss = tasks.filter((task) => {
	        if (task.taskName === taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        taskss
	    });
	}

	return (
        <div className="drag-container">
          <h2 className="head">To Do List Drag & Drop</h2>
          <div className="inProgress"
              onDragOver={(event)=>this.onDragOver(event)}
                onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
            <span className="group-header">In Progress</span>
            {tasks.inProgress}
          </div>
          <div className="droppable"
              onDragOver={(event)=>this.onDragOver(event)}
                onDrop={(event)=>this.onDrop(event, "Done")}>
            <span className="group-header">Done</span>
            {tasks.Done}
          </div>	        
        </div>
      );
}


export default Drag;