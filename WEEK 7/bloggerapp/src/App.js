// src/App.js

import React, { useState } from 'react';
import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div className="App">
      <h1>Blogger App</h1>

      {/* Buttons to toggle components */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowCourse(!showCourse)}>Toggle Course</button>
        <button onClick={() => setShowBook(!showBook)}>Toggle Book</button>
        <button onClick={() => setShowBlog(!showBlog)}>Toggle Blog</button>
      </div>

      <div className="container">
        {/* Method 1: if (condition) return */}
        {showCourse && <CourseDetails />}

        {/* Method 2: Ternary Operator */}
        {showBook ? <BookDetails /> : <div className="column"><p>No Book Data</p></div>}

        {/* Method 3: Logical && operator */}
        {showBlog && <BlogDetails />}
      </div>

      {/* Method 4: Component as variable */}
      <div style={{ marginTop: '20px' }}>
        <h4>Component as variable example:</h4>
        {(() => {
          let component = null;
          if (showCourse && !showBook && !showBlog) component = <CourseDetails />;
          else if (!showCourse && showBook && !showBlog) component = <BookDetails />;
          else if (!showCourse && !showBook && showBlog) component = <BlogDetails />;
          return component || <p>Nothing selected exclusively</p>;
        })()}
      </div>
    </div>
  );
}

export default App;
