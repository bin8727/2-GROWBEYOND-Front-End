import HomeLeft from "../component/home/HomeLeft";
import HomeRight from "../component/home/HomeRight";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className='home__wrap'>
          <HomeLeft />

          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default Home;
