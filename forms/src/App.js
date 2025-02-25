import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Form Project</h1>
      <SignUp/>
      <SignIn/>
      <StudentForm/>
    </div>
  )
}

export default App;