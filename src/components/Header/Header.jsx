import logo from '../../logo.svg';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const Header = () => {
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className='p-2 bg-emerald-700'>
        <div className="flex h-10">
          <div className='flex flex-row gap-1 bg-emerald-800 hover:bg-emerald-600 rounded-lg p-2'>
            <button className="flex flex-row gap-1 rounded-lg" onClick={onClickDetailsHandler}>
              <img className="h-6" src={logo} alt="logo"></img>
              <div className='font-bold'>Ir al Home</div>
            </button>
          </div>
        </div>
    </div>
  );
};

export default Header;