function Button({ style, value = "", text, clickHandler }) {
  return (
    <button
      className={`${style} hover:cursor-pointer hover:bg-neutral-basic text-center rounded-sm  font-semibold`}
      value={value}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
