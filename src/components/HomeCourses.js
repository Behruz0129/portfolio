import homeCoursesPh from '../images/home-courses-ph.svg';

const HomeCourses = () => {
  return (
    <section className='home-courses'>
      <div className='descr'>
        <h2 className='title'>#Courses</h2>
        <p>
          If you want, tutorial programming, learn coding with my courses. I
          teach programming in my youtube channel. I have{' '}
          <span>HTML, CSS and UX Design</span>
          courses now. I am going to create JavaScript, React, Node js and other
          courses on youtube. So, <span>subscribe</span> my channel!
        </p>
        <a href='https://www.youtube.com/channel/UCVVsrt9QYSfCXJmI303BgBw'>
          <button className='btn'>Go To YouTube</button>
        </a>
      </div>
      <div className='image'>
        <img src={homeCoursesPh} alt='youtube live stream' />
      </div>
    </section>
  );
};

export default HomeCourses;
