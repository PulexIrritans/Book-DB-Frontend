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
padding: 1rem 1rem;
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
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Bookshelf</NavLink></FooterLi>
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/random">Add Book</NavLink></FooterLi>
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer

//
//