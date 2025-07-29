// Posts.js
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Fetch posts from API
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error("Error loading posts:", error);
      this.setState({ hasError: true });
    }
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary method
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    this.setState({ hasError: true });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Posts List</h1>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
