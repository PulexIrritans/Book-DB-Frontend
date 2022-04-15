import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BookshelfPage from './Pages/BookshelfPage';
import CreatePage from './Pages/CreatePage';

function App() {
  return (
    <>
    <Header/>
    <Routes className="Routes">
        <Route path="/" element={<BookshelfPage/>} />
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
