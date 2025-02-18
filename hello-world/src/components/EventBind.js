//BINDING EVENT HANDLERS
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         message: 'Hello'
    }

  }
  
  clickHandler(){
    this.setState({
        message: 'Goodbye!'
    })
    console.log(this);
  }
 
//   render() {
//     return (
//       <div>
//           <div>{this.state.message}</div>
//           {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
//       </div>
//     )
//   }


render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind


//BINDING IN RENDER
//BINDING CLASS CONSTRUCTOR
//BINDING IN ARROW FUNCTION
///BINDING IN ARROW FUNCTION IN RENDER