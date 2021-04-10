import {useState, useEffect } from 'react';
import BlogList from './bloglist';


const Home = () => {
    const [blogs,setBlog]=useState(null)
    const[isPending,setIsPending]=useState(true);

    const handleDelete=(id)=>{
      const newBlog=blogs.filter(blog=>blog.id !== id);
      setBlog(newBlog);
    }

    useEffect(()=>{
      fetch('http://localhost:8000/blogs').then(res=>{
        return res.json();
      }).then(data=>{
        setBlog(data);
        setIsPending(false);
      })
    },[])
    
    return ( 
        <div className="home">
          {isPending && <div><h2>Loading..</h2></div>}
        {blogs && <BlogList blogs={blogs} title="ALL Blogs" handleDelete={handleDelete}/>}
          {/* <BlogList blogs={blogs.filter((blog)=>blog.author ==='mario')} title="Merio Blogs"/> */}
        </div>
       
     );
}
 
export default Home;