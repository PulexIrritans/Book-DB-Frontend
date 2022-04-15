import { NavLink } from "react-router-dom"
import styled from "styled-components";


const StyledFooter = styled.footer`
background-color: pink;
flex-shrink: 0;
`;

const FooterUl = styled.ul`
display: flex;
justify-content: space-around;
`;

const FooterLi = styled.li`
padding: 1rem 0;
&:hover{
background-color: deeppink;
}
`;

const Footer = ({}) => {
let activeStyle = {
        backgroundColor: "deeppink",
};
    return (
        <StyledFooter>
        <FooterUl>
            <FooterLi>Bookshelf</FooterLi>
            <FooterLi>Add Book</FooterLi>
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer

//<NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Bookshelf</NavLink>
//<NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/random">Add Book</NavLink>