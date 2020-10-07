import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Home from './Demo_Component'
// import Profile from './Profile'

// function App() {
//   return (
//     <div className="App">
      
       
//           <Home/>
//           <Profile text='hello arg'/>
        
      
//     </div>
//   );
// }

//export default App;

export default class Pro extends React.Component{
  constructor (){
    super();
    this.state ={
      hide:true,
      toggle:true
    }
  }
  render(){
    return(
      <div>
        {
          this.state.hide ?
          <h1>hide</h1>:
          null
        }
        <button onClick={()=>{this.setState({hide:false})}}>hide</button>
        {
          this.state.toggle ?
          <h1>Toggle</h1>:
          null
        }
        <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>toggle</button>
      </div>
    )
  }
}