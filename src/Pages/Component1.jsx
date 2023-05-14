import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Define the model
const PostModel = {
  userId: 0,
  id: 0,
  title: "",
  body: ""
}

const App = () => {
  const [posts, setPosts] = useState([]);
  
  // Fetch data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  // Convert retrieved JSON data into the model
  const mappedPosts = posts.map(post => ({
    ...PostModel,
    ...post
  }));

  // Define columns for the table
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
    { field: 'userId', headerName: 'User ID', width: 100 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={mappedPosts} columns={columns} pageSize={5} />
    </div>
  );
};

export default App;
