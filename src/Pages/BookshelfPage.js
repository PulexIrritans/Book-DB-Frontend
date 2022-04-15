import styled from "styled-components"
import Card from "../Components/Card"

const CardsList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
`

const BookshelfPage = () => {

    return (
        <main>
            <CardsList>
                <Card/>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card/>
                <Card/>

            </CardsList>
            
        </main>
    )
}

export default BookshelfPage