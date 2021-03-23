import CardP from './CardP';

const HomeProjects = ({ dataP }) => {
  let size = 4;
  return (
    <section className='home-projects'>
      <header>
        <h2 className='title'>#Projects</h2>
        <h3>more</h3>
      </header>
      <div className='content'>
        {dataP.slice(0, size).map(data => (
          <CardP data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
