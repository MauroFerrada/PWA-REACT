const Input = ({value, onChangeHandler, placeholder}) => {
  return (
      <input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} />
  );
};

export default Input;