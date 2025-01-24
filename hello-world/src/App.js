// import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello'
// function App() {
//   return (
//     <div className="App">
//       <Greet name="James" heroName="Batman">
//          <p>This is chidren props</p>
//       </Greet>
//       <Greet name="Mbaya" heroName="Superman">
//          <button>Action</button>
//       <Greet name="Muthiora" heroName="Wonder Woman"/>
//       {/* <Welcome/>
//       <Hello/> */}
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="James" heroName="Batman">
          <p>This is chidren props</p>
        </Greet>
        <Greet name="Mbaya" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Muthiora" heroName="Wonder Woman" />
        <Welcome name="James" heroName="Batman" />
        <Welcome name="Mbaya" heroName="Superman" />
        <Welcome name="Muthiora" heroName="Wonder Woman" />  */}
        {/* <Welcome/>
//       <Hello/> */}
      </div>
    );
  }
}

export default App;
