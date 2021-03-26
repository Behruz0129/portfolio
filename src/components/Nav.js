import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBar>
      <a href='#' className='logo'>
        <h4>B.B</h4>
      </a>
      <ul>
        <a href='#'>
          <li>About</li>
        </a>
        <a href='#'>
          <li>Projects</li>
        </a>
        <a href='#'>
          <li>Contact</li>
        </a>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: #0b3c53;
  .logo {
    font-size: 3rem;
    margin: 0 15px;
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
    a {
      margin: 0 15px;
      text-decoration: none;
      color: white;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default Nav;
