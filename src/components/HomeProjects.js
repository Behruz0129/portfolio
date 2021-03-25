import CardP from './CardP';
//slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
//style
import { ProjectsSection, Header } from '../AllStyle.js';

const HomeProjects = ({ dataP }) => {
  let size = 7;
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 2.5,
  };
  return (
    <ProjectsSection>
      <Header>
        <h2 className='title'>#Projects</h2>
        <h3>more</h3>
      </Header>
      <Slider {...settings} className='slider'>
        {dataP.slice(0, size).map(data => (
          <CardP data={data} key={data.id} />
        ))}
      </Slider>
    </ProjectsSection>
  );
};

export default HomeProjects;
