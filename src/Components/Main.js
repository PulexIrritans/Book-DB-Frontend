import styled from 'styled-components'

const StyledMain = styled.main`
background-color: whitesmoke;
flex: 1 0 auto;
overflow-y: auto;
`;

// const HeaderH1 = styled.h1`
// color: rgb(46, 45, 45);
// padding: 0.5rem 0;
// `

const Main = () => {

    return (
        <StyledMain>
        <p>Here comes some text!</p>
        </StyledMain>
    )
}

export default Main