import React from 'react'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
           name:'peter',
           count:0,

        }
    }
    updatestate(){
        this.setState({
          name:'bruce',
          count:this.state.count+1,
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{this.updatestate()}}>update</button>
            </div>
        )
    }
}


