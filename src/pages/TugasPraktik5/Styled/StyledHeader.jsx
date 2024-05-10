import styled from "styled-components"
export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  color: #000;

  h3{
    font-weight: bold;
  }
`;

export const UlStyle = styled.ul`
  list-style: none;
  grid-template-columns: repeat(5, 1fr);
  justify-self: end;
`;

export const AStyle = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover {
    color: #03aed2;
  }
`;