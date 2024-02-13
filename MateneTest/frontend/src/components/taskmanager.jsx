import React from "react";
import "./taskbox.css"


function TaskBox(){

    return(
    <div className="Wraper">
      <h2 className="heading">Task Manager</h2>
      <div className="container">
        <div className="task">
          <div className="task-block">
            <h2 className="task-heading">Task Type 1: Text Editor</h2>
            <div className="input-container">
              <textarea id="textTask" className="task-input" placeholder="Enter text here"/>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="task-block">
            <h2 className="task-heading">Task Type 2: Add and Remove Inputs</h2>
            <div id="dynamicInputs">
              <div className="input-container">
                <input type="text" className="task-input" placeholder="Input 1"/>
                <button className="add-remove-input">
                  +
                </button>Name
              </div>
            </div>
          </div>
        </div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" >X</span>
            <h2>Add New Block</h2>
            <input type="text" id="blockTitle" className="task-input" placeholder="Enter block title" />
            <select id="blockType" className="task-input">
              <option value="task">Task</option>
              <option value="groupedTask">Grouped Tasks</option>
            </select>
            <button id="saveBtn" >Save</button>
          </div>
        </div>
        <div id="myModal2" className="modal">
          <div className="modal-content">
            <span className="close" >X</span>
            <h2>Enter Pin</h2>
            <input type="text" id="blockTitle" className="task-input" placeholder="Enter pin" />
            <button id="saveBtn" >Save</button>
          </div>
        </div>
      </div>
      <div >
        <button id="openModalBtn" >Add Task</button>
        <button id="save_tasks" >Save</button>
      </div>
    </div>
    )
}

export default TaskBox