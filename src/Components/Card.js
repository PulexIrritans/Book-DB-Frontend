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

const Card = () => {
    return (
        <CardLi>
            <h2>Book Title</h2>
            <p>by Author Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos. Quas quidem corporis ratione, deserunt iste libero vitae! Saepe, officiis fuga? Quibusdam, accusamus minima est suscipit et ea eos quaerat.</p>
            <CardUl>
                <li>Publ: Date</li>
                <li>Pages: </li>
                <li>Publisher:</li>
            </CardUl>
            <p>ISBN: number </p>

        </CardLi>
    )
};

export default Card;