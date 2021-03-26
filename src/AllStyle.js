import styled from 'styled-components';
import homeMainBg from './images/home-main-bg.png';
import dotGridBg from './images/dot-grid.png';

//Styled components
export const MainSection = styled.div`
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

export const Descr = styled.div`
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

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  img {
    width: 100%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const AboutSection = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem;
  .container {
    background: white;
    position: relative;
    width: 100%;
    min-height: 100%;
    padding: 3rem;
    h2 {
      font-size: 4rem;
      color: #30b069;
      margin-bottom: 30px;
    }
    .descr {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 50px;
      }
      .box {
        p {
          font-size: 1.9rem;
          color: #5c5c5c;
          margin-bottom: 30px;
          span {
            color: #30b069;
          }
        }
        .btn {
          padding: 0.7rem 1.5rem;
          border: none;
          outline: none;
          background: transparent;
          color: #083042;
          border: 2px solid #083042;
          font-size: 1.5rem;
          font-weight: bold;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          &:hover {
            background: #083042;
            color: white;
          }
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid #154961;
      bottom: 5%;
      right: 2%;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }
  .bg {
    background: #30b069;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  color: #083042;
  h2 {
    font-size: 2rem;
  }
  .link {
    text-decoration: none;
    color: #083042;
  }
`;

export const ProjectsSection = styled.div`
  min-height: 70vh;
  padding: 4rem;
  background: url(${dotGridBg});
  position: relative;
  .slider {
    min-height: 400px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .slick-prev {
    display: none;
  }
  .slick-next {
    display: none;
  }
`;

export const CardElement = styled.div`
  width: 90%;
  border: 3px solid #083042;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid #083042;
  }
  .descr {
    padding: 1rem;
    background: #4aff9b;
    min-height: 250px;
    .title {
      font-size: 1.8rem;
      color: #083042;
      margin-bottom: 10px;
    }
    p {
      color: #083042;
      margin-bottom: 40px;
      min-height: 60px;
      /* &:nth-child(3) {
        color: #024eff;
        font-weight: 500;
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 30px;
      } */
    }
    .btn {
      padding: 0.3rem 0.8rem;
      border: none;
      outline: none;
      background: white;
      color: #083042;
      border: 2px solid #083042;
      font-size: 1rem;
      font-weight: bold;
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background: #083042;
        color: white;
      }
    }
  }
`;

export const CoursesSection = styled.div`
  min-height: 70vh;
  padding: 4rem;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FaqSection = styled.div`
  background: #083042;
  min-height: 70vh;
  padding: 4rem;
  color: #ccc;
  .header {
    color: white !important;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .questions {
      width: 60%;
      .question {
        padding-bottom: 50px;
        cursor: pointer;
        h4 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
        .answer {
          display: none;
          p {
            margin-bottom: 10px;
            line-height: 150%;
          }
        }
        .question-line {
          width: 100%;
          height: 3px;
          background: #ccc;
        }
      }
    }
  }
  .image {
    width: 40%;
    img {
      width: 80%;
    }
  }
`;

export const FooterApp = styled.div`
  color: white;
  div {
    padding: 1rem 3rem;
  }
  .box1 {
    background: #0f3d52;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .brand {
      display: flex;
      align-items: flex-end;
      .logo {
        font-size: 4rem;
        padding-right: 30px;
        margin: 0;
        line-height: 80%;
      }
      p {
        font-size: 1rem;
        line-height: 150%;
      }
    }
    .scl {
      display: flex;
      min-height: 100px;
      align-items: center;
      a {
        margin-right: 30px;
        cursor: pointer;
        color: white;
        transition: 0.5s ease all;
        &:hover {
          color: #00ff73;
          font-size: 1.2rem;
        }
      }
    }
  }
  .box2 {
    background: #16485f;
    display: flex;
    align-items: center;
    justify-content: center;
    .special {
      a {
        color: #4aff9b;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0 30px;
      }
    }
  }
  .box3 {
    background: #1b556f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
