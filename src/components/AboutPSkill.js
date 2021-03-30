import styled from 'styled-components';
//images
import htmlLogo from '../images/logos/html.svg';
import figmaLogo from '../images/logos/figma.svg';
import gitLogo from '../images/logos/git.svg';
import cssLogo from '../images/logos/css.svg';
import affinityphotoLogo from '../images/logos/affinityphoto.svg';
import githubLogo from '../images/logos/github.svg';
import sassLogo from '../images/logos/sass.svg';
import affinitydesignerLogo from '../images/logos/affinitydesigner.svg';
import netlifyLogo from '../images/logos/netlify.svg';
import javascriptLogo from '../images/logos/javascript.svg';
import reactjsLogo from '../images/logos/reactjs.svg';
//fotawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faDeploydog } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudUploadAlt,
  faCode,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab);

const AboutPSkill = () => {
  return (
    <AboutPSkillSection>
      <h2 className='title'>My Programming Skill</h2>
      <h3 className='subtitle'>
        FrontEnd <FontAwesomeIcon icon={faCode} />
      </h3>
      <div className='container'>
        <div className='box'>
          <img src={htmlLogo} alt='html logo' />
          <h4>HTML5</h4>
        </div>
        <div className='box'>
          <img src={cssLogo} alt='css logo' />
          <h4>CSS3</h4>
        </div>
        <div className='box'>
          <img src={sassLogo} alt='sass logo' />
          <h4>Sass/Scss</h4>
        </div>
        <div className='box'>
          <img src={javascriptLogo} alt='javascript logo' />
          <h4>JavaScript</h4>
        </div>
        <div className='box'>
          <img src={reactjsLogo} alt='react logo' />
          <h4>React</h4>
        </div>
      </div>
      <h3 className='subtitle'>
        Design <FontAwesomeIcon icon={faPaintBrush} />
      </h3>
      <div className='container'>
        <div className='box'>
          <img src={figmaLogo} alt='figma logo' />
          <h4>Figma</h4>
        </div>
        <div className='box'>
          <img src={affinityphotoLogo} alt='affinity photo logo' />
          <h4>Affinity Photo</h4>
        </div>
        <div className='box'>
          <img src={affinitydesignerLogo} alt='affinity designer logo' />
          <h4>Affinity Designer</h4>
        </div>
      </div>
      <h3 className='subtitle'>
        Deployment <FontAwesomeIcon icon={faCloudUploadAlt} />
      </h3>
      <div className='container'>
        <div className='box'>
          <img src={gitLogo} alt='git logo' />
          <h4>Git</h4>
        </div>
        <div className='box'>
          <img src={githubLogo} alt='github logo' />
          <h4>Github</h4>
        </div>
        <div className='box'>
          <img src={netlifyLogo} alt='netlify logo' />
          <h4>Netlify</h4>
        </div>
      </div>
    </AboutPSkillSection>
  );
};

//style
const AboutPSkillSection = styled.div`
  padding: 5rem 10rem;
  .title {
    font-size: 3rem;
    color: #0b3c53;
    margin-bottom: 50px;
  }
  .subtitle {
    font-size: 2rem;
    color: #115c80;
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .box {
      margin-right: 40px;
      width: 160px;
      height: 160px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 1px 3px #ccc;
      transition: all ease 0.1s;
      &:hover {
        box-shadow: 1px 1px 30px #cfcfcf;
        transform: scale(1.1);
      }
      img {
        width: 100px;
      }
      h4 {
        margin-top: 10px;
        font-size: 1rem;
        color: #383838;
      }
    }
  }
`;

export default AboutPSkill;
