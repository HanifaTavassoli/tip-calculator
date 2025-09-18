function InputField({
  type,
  name,
  value,
  style = "",
  placeholder,
  inputHandler,
}) {
  return (
    <input
      type={type}
      id={name}
      value={value}
      onChange={inputHandler}
      placeholder={placeholder}
      className={`${style} border-none outline-none inline-block py-1 text-neutral-darker font-bold w-full ltr" text-sm sm:text-lg`}
      style={{ direction: "rtl" }}
    />
  );
}

export default InputField;
