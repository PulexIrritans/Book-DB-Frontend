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

  return (
    <>
    <Header/>
    <Routes className="Routes">
        <Route path="/" element={<BookshelfPage books={books}/>} />
        <Route
          path="/create"
          element={
            <CreatePage/>
          }
        />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
