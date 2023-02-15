import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  return (
     <div className="container text-center">
        <h1 className="mt-5">NPM Patch Package Example</h1>
        <div className="button-container">
          <button className="btn btn-primary" onClick={()=>{alert('Master the Blaster')}}>Master the Blaster</button>
        </div>
     </div>
  );
}

export default App;
