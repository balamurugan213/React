import {useState } from 'react';


const Home = () => {
    
    // function1
    const [name,setName] = useState("mario");
    const handleClick=(e)=>{
        console.log("hell yea")
        setName('Bala');
    }
    // function2
    const handleClicksub=(e,name)=>{
        console.log('hello'+name)
    }

    return ( 
        <div className="home">
            <h1>Home page</h1>
            <p>{name}</p>
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