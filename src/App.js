import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//First we will make a new context
const MyContext = React.createContext();

//Create a provider component to store data
class MyProvider extends Component {
  state={
    name:"Pavan kumar Dasireddy",
    age:"23",
    designation:"Fullstack Developer"
  }
  render() {
    return (
      <MyContext.Provider value={{
        state:this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


const Family = (props) =>(
  <div className="family">
    <Person/>
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Hey!! I'm Mr. {context.state.name}  </p>
              <p>I'm a  {context.state.designation}  </p>
            </React.Fragment>
          )}
        </MyContext.Consumer>        
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>Hey! I'm App</p>
          <Family/>
        </div>
      </MyProvider>      
    );
  }
}

export default App;
