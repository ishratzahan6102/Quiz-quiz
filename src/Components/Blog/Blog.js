import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='blogs'>
           
                <h1>Question / Answer</h1>
                <div>
                    <h4>Question 1: What is the purpose of react router?</h4>
                    <p>Answer : ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                <div>
                    <h4>Question 2: How does context API works?</h4>
                    <p>Answer : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div>
                    <h4>Question 3: What is the work of Useref in React.js?</h4>
                    <p>Answer : Essentially, useRef is like a “box” that can hold a mutable value in its .current property.You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with React will set its .current property to the corresponding DOM node whenever that node changes.However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.</p>
                </div>
           
        </div>
    );
};

export default Blog;