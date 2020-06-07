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

  // Get the bookmarks from the API
  const getInfo = async () => {
    const response = await fetch('http://localhost:3001/books');
    const result = await response.json();
    console.log(result);
    setBooks(result);
  };

  // Hook to get the bookmarks when the component loads
  React.useEffect(() => {
    getInfo();
  }, []);


  return (
    <>
      <h1>Bookmarkd</h1>
      <h2>Add a Bookmark</h2>
      <Form initial={blank}></Form>
      <ul>
        {books
          ? books.map((bookmark) => {
            return (
              <li>
                <a href={bookmark.url}><h2>{bookmark.title}</h2></a>
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
