import styled from "styled-components"
import Card from "../Components/Card"

const CardsList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
`

const BookshelfPage = ({ books }) => {

    return (
        <main>
            <CardsList>
                {books.map(book => (
                    <Card
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    isbn={book.isbn}
                    description={book.description}
                    published_date={book.published_date}
                    number_of_pages={book.number_of_pages}
                    publisher={book.publisher}/>
                ))}
            </CardsList>
            
        </main>
    )
}

export default BookshelfPage