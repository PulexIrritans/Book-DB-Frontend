import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BookshelfPage from './Pages/BookshelfPage';
import CreatePage from './Pages/CreatePage';

function App() {

  const [books, setBooks] = useState([])

  
  useEffect(()=> {
    fetch("http://localhost:3050/")
    .then((response) => response.json())
    .then((data) => {
      setBooks(data);
  })
},[]);

function saveBookToDatabase(event, title, author, isbn, description, published_date, number_of_pages, publisher) {
  event.preventDefault();
  const newBook = {title, author, isbn, description, published_date, number_of_pages, publisher}
 
  fetch("http://localhost:3050/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      }
      );
}

console.log(books)

  return (
    <>
    <Header/>
    <Routes className="Routes">
        <Route path="/" element={<BookshelfPage books={books}/>} />
        <Route
          path="/create"
          element={
            <CreatePage saveBookToDatabase={saveBookToDatabase}/>
          }
        />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
