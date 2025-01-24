//FUNCTIONAL COMPONENT
// import React from "react";

// const Greet = () => {
//   return <h1>Hello, World!</h1>;
// };

// export default Greet;

//when u are using export const Greet = () => <h1>Hello, World!</h1>
//in importing should be written import { Greet }  from './components/Greet'

import React from "react";

const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
