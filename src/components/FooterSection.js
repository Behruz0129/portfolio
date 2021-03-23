import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const FooterSection = () => {
  return (
    <footer>
      <div className='box1'>
        <div className='brand'>
          <h3 className='logo'>B.B</h3>
          <p>Behruz Berdiyev | Portfolio | Blogs | Courses</p>
        </div>
        <div className='scl'>
          <FontAwesomeIcon size='3x' icon={['fab', 'youtube']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'telegram']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'instagram']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'github']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'codepen']} />
        </div>
      </div>
      <div className='box2'>
        <div className='special'>
          <a href='#'>Privasy Policy</a>
          <a href='#'>Terms & Conditions</a>
        </div>
      </div>
      <div className='box'>
        <p>Developed by Behruz Berdiyev | 2021</p>
      </div>
    </footer>
  );
};

export default FooterSection;
