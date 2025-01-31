///Destructuring props and state
import React from "react";

const Greets = ({name, heroName}) => {
  
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greets;