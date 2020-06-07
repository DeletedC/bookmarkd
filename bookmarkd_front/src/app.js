import React from "react";
import "./css/style.css";
import Form from "./form.js";

const App = (props) => {

  // State to hold the bookmarks
  const [books, setBooks] = React.useState(null);

  // State to hold the bookmark the user wants to edit
  const [editBookmark, setEditBookmark] = React.useState({
    title: '',
    url: ''
  });

  // Holds blank form data
  const blank = {
    title: '',
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
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
    });
    getInfo(); // Update the list of bookmarks
  };

  const handleSelect = async (bookmark) => {
    setEditBookmark(bookmark);
  };

  const handleEdit = async (data) => {

    const response = await fetch(`http://localhost:3001/books/${data._id}`, {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    // Update list of bookmarks
    getInfo();
  };



  return (
    <>
      <h1>Bookmarkd</h1>
      <h2>Add a Bookmark</h2>
      <Form initial={blank} handleSubmit={handleCreate}></Form>
      <h2>Edit Bookmark</h2>
      <Form initial={editBookmark} handleSubmit={handleEdit} />
      <ul>
        {books
          ? books.map((bookmark) => {
            return (
              <li key={bookmark._id}>
                <a href={bookmark.url}><h2>{bookmark.title}</h2></a>
                <button onClick={() => {handleDelete(bookmark._id);}}>
                  X
                </button>
                <button onClick={() => {handleSelect(bookmark)}}>
                  Edit
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
