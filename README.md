## This is a sample on :- react 16.3 Context-API.

    context API is similar to redux. It stores data in provider and we can access that data in the subcomponents.
## Context API is having :
  1.  Provider : Where the data lives
  2.  Consumer : where we can access the data

## First we will make a new context by using
    eg: const MyContext = React.createContext();

## Create a provider component to store data
    eg: class MyProvider extends Component {
          state={
            name:"Pavan kumar Dasireddy"
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

## We should wrap our component inside of the MyProvider
    eg: <MyProvider>
          <div>
            <p>Hey! I'm App</p>
            <Family/>
          </div>
        </MyProvider> 


## The child of a consumer will always be a function.
    eg: <MyContext.Consumer>
          {(value)=> (
            <p>Im {value.state.name}</p>
          )}
        </MyContext.Consumer>



## To build a Chrome Extension with React JS: 

https://engineering.musefind.com/how-to-build-a-chrome-extension-with-react-js-e2bae31747fc
