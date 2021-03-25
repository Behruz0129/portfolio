import homeFaqPh from '../images/home-faq-ph.svg';
//styled
import { FaqSection, Header } from '../AllStyle';

const HomeFaq = () => {
  return (
    <FaqSection>
      <Header className='header'>
        <h2 className='title'>#FAQ</h2>
      </Header>
      <div className='content'>
        <div className='image'>
          <img src={homeFaqPh} alt='faq boy' />
        </div>
        <div className='questions'>
          <div className='question'>
            <h4>How did you start?</h4>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                iste error eaque at nihil incidunt autem ad, corporis asperiores
                a.
              </p>
            </div>
            <div className='question-line'></div>
          </div>
          <div className='question'>
            <h4>What sets you apart?</h4>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                iste error eaque at nihil incidunt autem ad, corporis asperiores
                a.
              </p>
            </div>
            <div className='question-line'></div>
          </div>
          <div className='question'>
            <h4>Which payment methods do you use?</h4>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                iste error eaque at nihil incidunt autem ad, corporis asperiores
                a.
              </p>
            </div>
            <div className='question-line'></div>
          </div>
          <div className='question'>
            <h4>How to cooperate with you?</h4>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                iste error eaque at nihil incidunt autem ad, corporis asperiores
                a.
              </p>
            </div>
            <div className='question-line'></div>
          </div>
        </div>
      </div>
    </FaqSection>
  );
};

export default HomeFaq;
