import logo from '../../logo.svg'
import style from './Header.module.css';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Button from '../../components/Button/Button'

const Header = () => {
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(ROUTES.home);
  }

  return (
    <div className='p-6 bg-emerald-500'>
        <div className="flex h-6 space-x-1">
          <img src={logo} alt="logo"></img>
          <Button text="Ir a Home" onClick={onClickDetailsHandler} />
        </div>
    </div>
  );
};

export default Header;