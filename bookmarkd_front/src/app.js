import React from "react";
import "./css/style.css";
import Form from "./form.js";

const App = (props) => {

  // State to hold the bookmarks
  const [books, setBooks] = React.useState(null);

  // Holds blank form data
  const blank = {
    name: '',
    url: ''
  }

  // Hook to get the bookmarks when the component loads
  React.useEffect(() => {
    getInfo();
  }, []);

  // Get the bookmarks from the API
  const getInfo = async () => {
    const response = await fetch('http://localhost:3001/books');
    const result = await response.json();
    console.log(result);
    setBooks(result);
  };

  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:3001/books', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    getInfo(); // Update the list of bookmarks
  };

  const handleDelete = async (id) => {
    const response = await fetch('http://localhost:3001/books', {
      method: "DELETE",
    });
    getInfo(); // Update the list of bookmarks
  };

  return (
    <>
      <h1>Bookmarkd</h1>
      <h2>Add a Bookmark</h2>
      <Form initial={blank} handleSubmit={handleCreate}></Form>
      <ul>
        {books
          ? books.map((bookmark) => {
            return (
              <li>
                <a href={bookmark.url}><h2>{bookmark.title}</h2></a>
                <button onClick={() => {handleDelete(bookmark._id);}}>
                  Delete
                </button>
              </li>
            );
          })
          : "Loading..."
        }
      </ul>
    </>
  );
}

export default App;
