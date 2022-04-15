import { useState } from "react";

const CreatePage = (saveBookToDatabase) => {

  const [title, setTitle] = useState(undefined);
  const [author, setAuthor] = useState(undefined);
  const [isbn, setISBN] = useState(undefined);
  const [description, setDescription] = useState("");
  const [published_date, setPublishedDate] = useState(undefined);
  const [number_of_pages, setNumberOfPages] = useState(null);
  const [publisher, setPublisher] = useState(undefined)

    return (
        <main>
        <form onSubmit={()=>{saveBookToDatabase(title, author, isbn, description, published_date, number_of_pages, publisher)}}>
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
        <input
          type="text"
          id="description"
          name="description"
          placeholder="You can provide the description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
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
      </form>
        </main>
    )
}

export default CreatePage