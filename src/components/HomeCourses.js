import homeCoursesPh from '../images/home-courses-ph.svg';
//styled
import { CoursesSection, Header, Descr, Image } from '../AllStyle';
import styled from 'styled-components';

const HomeCourses = () => {
  return (
    <CoursesSection>
      <Header>
        <h2 className='title'>#Courses</h2>
      </Header>
      <div className='content'>
        <CoursesDescr>
          <p>
            If you want, tutorial programming, learn coding with my courses. I
            teach programming in my youtube channel. I have{' '}
            <span>HTML, CSS and UX Design</span> courses now. I am going to
            create JavaScript, React, Node js and other courses on youtube. So,{' '}
            <span>subscribe</span> my channel!
          </p>
          <a href='https://www.youtube.com/channel/UCVVsrt9QYSfCXJmI303BgBw'>
            <button className='btn'>Go To YouTube</button>
          </a>
        </CoursesDescr>
        <CoursesImage>
          <img src={homeCoursesPh} alt='youtube live stream' />
        </CoursesImage>
      </div>
    </CoursesSection>
  );
};

const CoursesDescr = styled(Descr)`
  width: 50%;
  p {
    font-size: 1.5rem;
    color: #5c5c5c;
    margin-bottom: 50px;
    line-height: 150%;
  }
  .btn {
    &:hover {
      background-color: #083042;
      color: white;
    }
  }
`;

const CoursesImage = styled(Image)`
  img {
    width: 100%;
  }
`;

export default HomeCourses;
