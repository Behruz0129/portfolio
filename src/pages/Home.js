import HomeMain from '../components/HomeMain';
import HomeAbout from '../components/HomeAbout';
import HomeProjects from '../components/HomeProjects';
import HomeCourses from '../components/HomeCourses';
import HomeFaq from '../components/HomeFaq';

const Home = ({ dataP }) => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeProjects dataP={dataP} />
      <HomeCourses />
      <HomeFaq />
    </>
  );
};

export default Home;
