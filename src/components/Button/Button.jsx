import style from './Button.module.css';

const Button = ({text, onClick, disabled}) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;