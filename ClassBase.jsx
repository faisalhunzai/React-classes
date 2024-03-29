import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";

class Example extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        state :0
        }
    }
  
     incrementBtn = ()=>{
        console.log(counter)
        this.setState(this.state.count + 1)
    }
    render (){
        return(
            <>
            <button onClick={this.incrementBtn}>hello world</button>
            </>
        )
       
    }
}

export default Example;