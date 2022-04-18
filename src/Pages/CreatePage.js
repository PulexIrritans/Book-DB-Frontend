import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BookForm = styled.form`
max-width: 80%;
display: flex;
flex-direction: column;
`

const CreatePage = ({ saveBookToDatabase }) => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const [published_date, setPublishedDate] = useState("");
  const [number_of_pages, setNumberOfPages] = useState("");
  const [publisher, setPublisher] = useState("")

    return (
        <main>
        <BookForm onSubmit={(event)=> {saveBookToDatabase(event, title, author, isbn, description, published_date, number_of_pages, publisher); navigate("/")}}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Please provide the book title"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Please provide the author"
          required
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        ></input>
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          placeholder="Please provide the ISBN"
          required
          value={isbn}
          onChange={(event) => {
            setISBN(event.target.value);
          }}
        ></input>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="You can provide the description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
         <label htmlFor="published_date">Published Date:</label>
        <input
          type="date"
          id="published_date"
          name="published_date"
          placeholder="Please the published date"
          value={published_date}
          onChange={(event) => {
            setPublishedDate(event.target.value);
          }}
        ></input>
         <label htmlFor="number_of_pages">Number of Pages:</label>
        <input
          type="number"
          id="number_of_pages"
          name="number_of_pages"
          placeholder="You can provide the number of pages"
          value={number_of_pages}
          onChange={(event) => {
            setNumberOfPages(Number(event.target.value));
          }}
        ></input>
         <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          placeholder="Please provide the publisher"
          value={publisher}
          onChange={(event) => {
            setPublisher(event.target.value);
          }}
        ></input>
        <button>Save</button>
      </BookForm>
        </main>
    )
}

export default CreatePage