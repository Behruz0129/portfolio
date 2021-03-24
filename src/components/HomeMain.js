import homeMainPh from '../images/home-main-ph.svg';
import homeMainBg from '../images/home-main-bg.png';
//Styled
import styled from 'styled-components';

const HomeMain = () => {
  return (
    <MainSection>
      <Descr>
        <p>
          Make your <span>website</span> with me
        </p>
        <div className='main-title'>
          <div className='hide'>
            <h2>
              The <span>Billion</span>
            </h2>
          </div>
          <div className='hide'>
            <h2>Projects</h2>
          </div>
          <div className='hide'>
            <h2>Creator:</h2>
          </div>
        </div>
        <div className='eventer'>
          <a href='https://drive.google.com/file/d/11NcykM_fPFM4sgHqPOXFXZvCaZJCvp-Z/view?usp=sharing'>
            <button className='btn'>Get CV</button>
          </a>
          <button className='btn'>Hire Me</button>
        </div>
      </Descr>
      <Image>
        <img src={homeMainPh} alt='react-developer' />
      </Image>
      <div className='bg'></div>
    </MainSection>
  );
};

//Styled components
const MainSection = styled.div`
  min-height: 100vh;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .bg {
    height: 100%;
    width: 100%;
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${homeMainBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Descr = styled.div`
  min-width: 500px;
  p {
    color: #c6c6c6;
    font-size: 2rem;
    letter-spacing: 10%;
    margin-bottom: 10px;
    span {
      color: #3ddc84;
    }
  }
  .main-title {
    color: white;
    margin-bottom: 30px;
    h2 {
      font-size: 5rem;
      line-height: 150%;
      span {
        color: #3ddc84;
      }
    }
  }
  .btn {
    padding: 0.7rem 1.5rem;
    border: none;
    outline: none;
    background: #3ddc84;
    color: #083042;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: white;
      &::before {
        bottom: -6%;
        right: -2%;
        opacity: 1;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid white;
      bottom: -20%;
      right: -7%;
      z-index: -1;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    &:nth-child(1) {
      margin-right: 30px;
    }
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  img {
    width: 100%;
  }
`;

export default HomeMain;
