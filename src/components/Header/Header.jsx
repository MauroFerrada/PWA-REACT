import logo from '../../logo.svg';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const Header = () => {
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className='p-6 bg-emerald-700'>
        <div className="flex h-6">
          <button className="flex flex-row gap-1 hover:bg-emerald-800 rounded-lg" onClick={onClickDetailsHandler}>
            <img className="h-full" src={logo} alt="logo"></img>
            <div className='font-bold'>Ir al Home</div>
          </button>
        </div>
    </div>
  );
};

export default Header;