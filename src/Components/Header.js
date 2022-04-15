import styled from 'styled-components'

const StyledHeader = styled.header`
background-color: deeppink;
text-align: center;
`;

const HeaderH1 = styled.h1`
color: rgb(46, 45, 45);
padding: 0.5rem 0;
margin: 0;
`

const Header = () => {

    return (
        <StyledHeader>
        <HeaderH1>
           Bookworm
        </HeaderH1>
        </StyledHeader>
    )
}

export default Header