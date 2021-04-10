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

---

## Props in React

When we need to pass the data from the parent component to the child components we use props as a argumenst whil calling the component.

- Parent component

```js
const Home = () => {
    const [blogs,setBlog]=useState([{},{}
    ])
    return ( 
        <div className="home">
        
          <BlogList blogs={blogs}/> <!-- sending as props -->
        </div>
       
     );
}
```

- Child component

```js
const BlogList = (props) => {
    const blogs=props.blogs
    return ( 
        <div className="blog-list">
             {blogs.map((blog)=>(
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>{blog.author}</p>
               </div>
           ))}
        </div>
     );
}
 
```

## Function as Props in React

we can also pass function as props between parent and child

- Parent component

```js
const Home = () => {
const handleDelete=(id)=>{
      const newBlog=blogs.filter(blog=>blog.id !== id);
      setBlog(newBlog);
    }

    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="ALL Blogs" handleDelete={handleDelete}/> // sending fumction as props
        </div>
       
     );
```

- Child component

```js
const BlogList = ({blogs, title ,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
             {blogs.map((blog)=>(
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>Written by{blog.author}</p>
                   <button onClick={()=>handleDelete(blog.id)} >Delete blog</button> //using the prop function
               </div>
           ))}
        </div>
     );
}}
 
```

## Filters

```js
 <BlogList blogs={blogs.filter((blog)=>blog.author ==='mario')} title="Merio Blogs"/>
```

## UseEffects

useEffects is a funct that runs every time when component re render.

```js
import {useState, useEffect } from 'react';

useEffect(()=>{
    console.log("use effots worsks")
})

```

### Dependencies

- To run the function only  on the initial render.

```js
import {useState, useEffect } from 'react';

useEffect(()=>{
    console.log("use effots worsks")
},[])
```

- To run the function when state variable changes.Chanege in name variable will run the use effects

```js
import {useState, useEffect } from 'react';

useEffect(()=>{
    console.log("use effots worsks")
},[name])
```

## Fetch data from the server

```js
useEffect(()=>{
    fetch('http://localhost:8000/blogs').then(res=>{
    return res.json();
    }).then(data=>{
    setBlog(data);
    })
},[])
 return ( 
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="ALL Blogs" handleDelete={handleDelete}/>}
        </div>
       
     );

```

- to setup a local json server

```cmd
npx json-server --watch data/db.json --port 8000
```
