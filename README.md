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

## Adding CSS

- We can add css by importing the css file to the component file.

- We can also add dynamic css using.

```js
import './index.css';

const Home = () => {
    return ( 
        <h1 style={{
            color:'blue',
            backgroundColor:'black',
            borderRadius:'8px'          //camelcasing is used insted of '-' 

        }}>Home page</h1>
     );
}
 
export default Home;
```

## Function and events

- Since using '()' will invoke automatically while loading itself so we don't use () for calling.

- For passing the arguments we need to wrap this with anonymous function to invike.  

```js
const Home = () => {

    // function1
    const handleClick=(e)=>{
        console.log("hell yea")
    }
    // function2
    const handleClicksub=(e,name)=>{
        console.log('hello'+name)
    }

    return ( 
        <div className="home">
            <h1>Home page</h1>
            {/* calling f1 */}
            <button onClick={handleClick}>Click me</button>
             {/* calling f2 */}
            <button onClick={(e)=>{
                handleClicksub(e,'hamlet')
            }}>Sumbit</button>
        </div>
       
     );
}
 
export default Home;
```

---

## Changing the state

When we use dynamic value or variable in the render the is problem with the state of the variable i.e, when the state of the variable changes (change the value) dose'nt change the render.

- To change the render we need to use 'useState' package from react.

```js
import {useState } from 'react';

const [name,setName] = useState("mario"); // declaring state variable.


const handleClick=(e)=>{
    console.log("hell yea")
    setName('Bala'); //change value with described function.
}
```
