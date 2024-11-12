import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const BlogContext = createContext()

const BlogContextProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [allBlogs, setAllBlogs] = useState([])
   
    const email = useRef(null)
    const password = useRef(null)

    const getAllBlogs = async() =>{
        // Fetch all blogs from the database
        // Return the fetched blogs
        const {data} = await axios.get('http://localhost:3000/api/v1/blog/getblogs')
        setAllBlogs(data.blogs)

    }

    useEffect(() =>{
        getAllBlogs()
        
    },[])
    

    const value = {
        isAuthenticated, setIsAuthenticated, email, password, allBlogs
    };

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContextProvider