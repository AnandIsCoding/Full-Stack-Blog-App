import { createContext, useRef, useState } from "react";

export const BlogContext = createContext()

const BlogContextProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
   
    const email = useRef(null)
    const password = useRef(null)
    
    const value = {
        isAuthenticated, setIsAuthenticated, email, password, 
    };

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContextProvider