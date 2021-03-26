import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavBar>
      <Link to='/' className='logo'>
        <h4>B.B</h4>
      </Link>
      <ul>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/projects'>
          <li>Projects</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
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
