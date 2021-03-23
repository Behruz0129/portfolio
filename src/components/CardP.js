const CardP = ({ data }) => {
  return (
    <div className='card-p'>
      <img src={data.cover} alt={data.title} />
      <div className='descr'>
        <h3 className='title'>{data.title}</h3>
        <p>{data.subtitle}</p>
        <p>{data.isOrder ? 'order' : 'detached'}</p>
        <a href={data.address} target='_blank'>
          <button className='btn'>View Project</button>
        </a>
      </div>
    </div>
  );
};

export default CardP;
