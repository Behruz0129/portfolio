import HomeAbout from '../components/HomeAbout';
import HomeMain from '../components/HomeMain';
import HomeProjects from '../components/HomeProjects';

const Home = ({ dataP }) => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeProjects dataP={dataP} />
    </>
  );
};

export default Home;
