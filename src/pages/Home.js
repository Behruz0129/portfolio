import HomeMain from '../components/HomeMain';
import HomeAbout from '../components/HomeAbout';
import HomeProjects from '../components/HomeProjects';
import HomeCourses from '../components/HomeCourses';

const Home = ({ dataP }) => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeProjects dataP={dataP} />
      <HomeCourses />
    </>
  );
};

export default Home;
