//styled
import styled from 'styled-components';
import emailPattern from '../images/dot-grid.png';
import aboutMePh from '../images/about-me-ph.jpg';

const AboutArt = () => {
  return (
    <AboutMeSection>
      <h2 class='title'>About Me</h2>
      <img className='hey' src={aboutMePh} alt='hey' />
      <p>
        My name is Behruz. I am a{' '}
        <a href='https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html'>
          frontend
        </a>{' '}
        developer and{' '}
        <a href='https://en.wikipedia.org/wiki/YouTuber'>youtuber</a>. Now, i am
        16 years old. I am studying at the secondary school No. 9 of{' '}
        <a href='https://uz.wikipedia.org/wiki/Xovos_tumani'>Khavast</a>{' '}
        district. In my free time from class, I learn to program independently
      </p>
      <p>
        I can create small or large projects for you or for your business. So
        far I have worked with a few real and experimental projects (you can see
        more about this in the projects section) and gained some experience
      </p>
      <p>
        Programming is my favorite thing to do. In it, I feel like I’m relaxing,
        not working. True, there will be problems at work, but without these
        problems there will be no content at work. Therefore, I always try not
        to get bored for problems and mistakes and instead solve them.
      </p>
      <p>
        I am currently working as a frontend programmer for the{' '}
        <a href='https://t.me/joinchat/40P6yCozPU4zNjFi'>Belify</a> team. Not
        just working with our team there, but different experiences we also do
      </p>
      <p>
        Since I love teaching programming as well as teaching it, I am currently
        working as a blogger on youtube as well.
      </p>
      <p class='end'>Welcome to my website!</p>
      <div className='bg'></div>
    </AboutMeSection>
  );
};

const AboutMeSection = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  position: relative;
  .title {
    font-size: 4rem;
    color: #0b3c53;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.9rem;
    color: #5c5c5c;
    margin-bottom: 30px;
    border-left: 3px solid #0b3c53;
    padding-left: 20px;
    a {
      color: #1d7299;
      text-decoration: none;
    }
  }
  .end {
    font-size: 2.2rem;
    color: #5c5c5c;
    font-weight: bold;
    margin-top: 60px;
    padding: 0;
    border: none;
  }
  .hey {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 30px;
    border: 3px solid #0b3c53;
    padding: 20px;
  }
  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background: url(${emailPattern});
  }
`;
export default AboutArt;
