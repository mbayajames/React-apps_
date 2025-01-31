import React, { Component } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
// import Greet from "./components/Greet";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import Counter from "./components/Greets";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent/>
        {/* <EventBind/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <Greet/> */}
        {/* <Counter/> */}
        {/* <Message /> */}
        {/* <Greet name="James" heroName="Batman">
          <p>This is chidren props</p>
        </Greet> */}
        {/* <Greet name="Mbaya" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Muthiora" heroName="Wonder Woman" /> */}
        {/* <Welcome name="James" heroName="Batman" /> */}
        {/* <Welcome name="Mbaya" heroName="Superman" /> */}
        {/* <Welcome name="Muthiora" heroName="Wonder Woman" />  */}
        {/* <Welcome/>
//       <Hello/> */}
      </div>
    );
  }
}

export default App;








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