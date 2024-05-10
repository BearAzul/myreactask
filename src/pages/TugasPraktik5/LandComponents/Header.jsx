import { NavStyle, UlStyle, AStyle } from "../Styled/StyledHeader.jsx";

const Header = () => {
  return (
    <>
      <NavStyle className="px-6 lg:px-24 md:px-16">
        <h3>Logo</h3>
        <UlStyle className="hidden lg:grid">
          <li>
            <AStyle>Home</AStyle>
          </li>
          <li>
            <AStyle>About</AStyle>
          </li>
          <li>
            <AStyle>Work</AStyle>
          </li>
          <li>
            <AStyle>Careers</AStyle>
          </li>
          <li>
            <AStyle>Contact Us</AStyle>
          </li>
        </UlStyle>
        <button className="block lg:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </NavStyle>
    </>
  );
};

export default Header;
