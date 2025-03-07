import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isLoggedIn: false   //you canchange to true 
        }
    }
    
  render() {

    // FORTH APPROACH - short circuit operator
     return this.state.isLoggedIn && <div>Welcome James</div>
     

    // THIRD APPROACH  using itinerary approach (condition operator)

    // return (
    //   this.state.isLoggedIn ? (
    //   <div>Welcome James</div>
    //   ) : (
    //   <div>Welcome Guest</div>
    // )
    // )

    // SECOND APPROACH

    // DECLARING USING A VARIABLE 
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome James</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>



    // FIRST APPROACH

    // DECLARING USING IF STATEMENTS
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>Welcome James</div>
    //   )
    // } else{
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }
  }
}

export default UserGreeting;