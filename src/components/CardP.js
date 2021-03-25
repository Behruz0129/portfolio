//styled
import { CardElement } from '../AllStyle';

const CardP = ({ data }) => {
  return (
    <CardElement>
      <img src={data.cover} alt={data.title} />
      <div className='descr'>
        <h3 className='title'>{data.title}</h3>
        <p>{data.subtitle}</p>
        <a href={data.address} target='_blank'>
          <button className='btn'>View Project</button>
        </a>
      </div>
    </CardElement>
  );
};

export default CardP;
