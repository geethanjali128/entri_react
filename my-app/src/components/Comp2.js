import React, { Component } from 'react'

export default class Comp2 extends Component {
    constructor(){
        super();
        // this.props=props;
        // this.handleEvent=this.handleEvent.bind(this)
      this.state={
            message:"please listen to the class",
            data:["html","css","javascript"],
             swapStatus:true
        }
        this.handler=this.handler.bind(this)
    }
    handleEvent(){
        // alert(this.props.data)
        this.setState({
            message:"your response in this class is well",
           
        })
    }
    handler(){
      this.setState({swapStatus:!(this.state.swapStatus)})
    }
  render() {
    return (
      <div>
        <p>{this.state.swapStatus?"swapped":"not swapped"}</p>
       {/* <ul>{this.state.swapStatus?{this.state.data.map((item)=>(
          <li>{item}</li>
        ))}:{message}}</ul> */} 
        {/* { <p>{this.state.swapStatus?{}}</p> */}
         <button onClick={this.handler}>swap</button>
        {/* { <p>{this.props.data}</p> }
        {<button onClick={()=>this.handleEvent()}>click</button>}
         { <button onClick={this.handleEvent.bind(this)}>click</button> }
         { <p>{this.state.message}</p> }
         {<button onClick={this.handleEvent}>click</button> } */}
      </div>
    )
  }
}
