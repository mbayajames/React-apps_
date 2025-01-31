//FUNCTIONAL COMPONENT
// import React from "react";

// const Greet = () => {
//   return <h1>Hello, World!</h1>;
// };

// export default Greet;

//when u are using export const Greet = () => <h1>Hello, World!</h1>
//in importing should be written import { Greet }  from './components/Greet'





// PROPS
// import React from "react";

// const Greet = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

// export default Greet;





///Destructuring props and state
import React from "react";

const Greet = props => {
  const {name, heroName} = props
  
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
