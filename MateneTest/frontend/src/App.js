import React from 'react';
import TaskBox from './components/taskmanager';
import ViewTask from './components/viewTask';
import './App.css';


function App() {
  return (
    <div className="App">
      <TaskBox />
      <ViewTask />
    </div>
  );
}

export default App;
