import style from './Home.module.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="flex-grow bg-emerald-300">
        <div className="flex h-full justify-center items-center">
          Body de Home
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;