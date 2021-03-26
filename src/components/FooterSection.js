//router
import { Link } from 'react-router-dom';
//styled
import { FooterApp } from '../AllStyle';
//fotawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const FooterSection = () => {
  return (
    <FooterApp>
      <div className='box1'>
        <div className='brand'>
          <h3 className='logo'>B.B</h3>
          <p>
            Behruz Berdiyev |<br /> Developer for skills
          </p>
        </div>
        <div className='scl'>
          <a
            href='https://www.youtube.com/channel/UCVVsrt9QYSfCXJmI303BgBw'
            target='_blank'
          >
            <FontAwesomeIcon size='3x' icon={['fab', 'youtube']} />
          </a>
          <a href='https://t.me/curious_behruz' target='_blank'>
            <FontAwesomeIcon size='3x' icon={['fab', 'telegram']} />
          </a>
          <a
            href='https://www.linkedin.com/in/behruz-berdiyev-293749206/'
            target='_blank'
          >
            <FontAwesomeIcon size='3x' icon={['fab', 'linkedin']} />
          </a>
          <a href='https://www.instagram.com/berdiyev_behruz/' target='_blank'>
            <FontAwesomeIcon size='3x' icon={['fab', 'instagram']} />
          </a>
          <a href='https://github.com/Behruz0129' target='_blank'>
            <FontAwesomeIcon size='3x' icon={['fab', 'github']} />
          </a>
        </div>
      </div>
      <div className='box2'>
        <div className='special'>
          <Link to='/privacy'>Privasy Policy</Link>
          <Link to='/terms'>Terms & Conditions</Link>
        </div>
      </div>
      <div className='box3'>
        <p>Developed by Behruz Berdiyev | 2021</p>
      </div>
    </FooterApp>
  );
};

export default FooterSection;
