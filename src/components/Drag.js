import React, { useEffect, useState } from 'react';
import '../App.css';

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

    useEffect(() => {
        
  
          this.state.tasks.forEach ((task) => {
            tasks[task.type].push(
              <div key={task.id} 
                onDragStart = {(event) => this.onDragStart(event, task.taskName)}
                draggable
                className="draggable"
                style = {{backgroundColor: task.bgcolor}}>
                {task.taskName}
              </div>
            );
          });
    }, [])

    //On the start of clicking an object, console will log which event was picked up
    onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}

    //Default behavior would be to snap the event back to its original spot
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.taskName === taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        tasks
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