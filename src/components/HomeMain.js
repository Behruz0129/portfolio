import homeMainPh from '../images/home-main-ph.svg';
//Styled
import { MainSection, Descr, Image, Hide } from '../AllStyle';

const HomeMain = () => {
  return (
    <MainSection>
      <Descr>
        <p>
          Make your <span>website</span> with me
        </p>
        <div className='main-title'>
          <Hide>
            <h2>
              The <span>Billion</span>
            </h2>
          </Hide>
          <Hide>
            <h2>Projects</h2>
          </Hide>
          <Hide>
            <h2>Creator:</h2>
          </Hide>
        </div>
        <div className='eventer'>
          <a
            href='https://drive.google.com/file/d/11NcykM_fPFM4sgHqPOXFXZvCaZJCvp-Z/view?usp=sharing'
            target='_blank'
          >
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

export default HomeMain;
