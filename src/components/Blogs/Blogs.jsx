import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMarks,handleMarksRead}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="m-4 flex flex-col gap-20 ">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                    handleMarksRead={handleMarksRead}
                ></Blog>)
            }
            
            
        </div>
    );
};

export default Blogs;