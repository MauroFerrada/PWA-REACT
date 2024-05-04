import logo from '../../logo.svg';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const Header = () => {
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className='p-6 bg-emerald-500'>
        <div className="flex h-6">
          <button className="flex space-x-1" onClick={onClickDetailsHandler}>
            <img className="h-full" src={logo} alt="logo"></img> <div>Ir a Home</div>
          </button>
        </div>
    </div>
  );
};

export default Header;