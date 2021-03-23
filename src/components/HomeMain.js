import homeMainPh from '../images/home-main-ph.svg';

const HomeMain = () => {
  return (
    <main>
      <div className='descr'>
        <p>Make your website with me</p>
        <div className='title'>
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
          <button className='btn'>Get CV</button>
          <button className='btn'>Hire Me</button>
        </div>
      </div>
      <div className='image'>
        <img src={homeMainPh} alt='react-developer' />
      </div>
    </main>
  );
};

export default HomeMain;
