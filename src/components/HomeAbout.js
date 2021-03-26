//style
import { AboutSection } from '../AllStyle.js';
//image
import myImage from '../images/my-ph.jpg';
//router
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <AboutSection>
      <div className='container'>
        <h2>My name is...</h2>
        <div className='descr'>
          <div className='box'>
            <p>
              My name is Behruz. I am <span>frontend</span> developer and{' '}
              <span>youtuber</span>. I can create small or big projects for you
              or your buisness
            </p>
            <Link to='/about'>
              <button className='btn'>Read More</button>
            </Link>
          </div>
          <div className='box'>
            <img src={myImage} alt='Behruz Berdiyev' />
          </div>
        </div>
      </div>
      <div className='bg'></div>
    </AboutSection>
  );
};

export default HomeAbout;
