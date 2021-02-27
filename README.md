# React

![heading](https://miro.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg)

## What is react ?

- React is a JavaScript library for building user interfaces.

- React is used to build single page applications.

- React allows us to create reusable UI components.

## Create a new react app

- required node to setup.
- Run the following command to Install.

    ```cmd
    npx create-react-app yellowbox
    ```

- Run the following command to start the server.

    ```cmd
    npm run start
    ```

## React Component

- The function does not return HTML element, it returns Jsx which is converted to HTML by babel while running.

```js
import './App.css';                 //import css

function App() {                    //component as a javascript function

  const title="App Component";      //contain variables for dynamic data
  const name="Yellowbox";         
  
  return (                          //return HTMl code whic can be a output
                                    //Brases are used tp display js variable
    <div className="App">
      <div className="content">     
        <h1>{ title }</h1>         
      </div>
    </div>

  );
}

export default App;
```