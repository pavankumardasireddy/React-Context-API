import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//First we will make a new context
const MyContext = React.createContext();

//Create a provider component to store data
class MyProvider extends Component {
  state={
    name:"Pavan kumar Dasireddy",
    liked:true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state:this.state,
        likedIt: () => this.setState({
            liked:true
          }),
        dislikedIt: () => this.setState({
            liked:false
          })
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
              <p>Hey!! Im Mr. {context.state.name}  </p><br />
              <p>How was the context API. Do you like it? </p><br />
              <div className="row">
                <button type="button" onClick={context.likedIt} >Like!</button>
                <button type="button" onClick={context.dislikedIt}>Dislike!</button>
              </div>
              <div>                
                  {
                    (context.state.liked)?(<h2>Liked It.</h2>):(<h2>No I dont like it.</h2>)
                  }
              </div>
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
        <div style={{textAlign:"center", paddingTop:"125px"}}>
          <Family/>
        </div>
      </MyProvider>      
    );
  }
}

export default App;
