import style from './Details.module.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Details = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header text="Header" />
      <div className="flex-grow bg-emerald-300">
        <div className="flex h-full justify-center items-center">
          Body de Details
        </div>
      </div>
      <Footer text="Footer" />
    </div>
  );
};

export default Details;