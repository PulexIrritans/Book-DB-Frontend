import styled from 'styled-components';

const CardLi = styled.li`
background-color: whitesmoke;
border-radius: 5px;
width: 500px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
padding: 1rem;
`

const CardUl = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Card = ({ title, isbn, author, description, published_date, number_of_pages, publisher }) => {
    return (
        <CardLi>
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>{description}</p>
            <p>Publ: {published_date}</p>
            <CardUl>
                <li>Pages: {number_of_pages}</li>
                <li>Publisher: {publisher}</li>
            </CardUl>
            <p>ISBN: {isbn}</p>
        </CardLi>
    )
};

export default Card;