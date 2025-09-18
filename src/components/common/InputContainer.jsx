function InputContainer({ label, name, value, icon, children }) {
  console.log(value);
  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm font-bold tracking-normal mb-1">
        <label htmlFor={name} className="text-neutral-light">
          {label}
        </label>
        {value == 0 && value != "" && (
          <p className="text-amber-600">Can't be zero</p>
        )}
      </div>

      <div
        className={`bg-neutral-input px-2 flex items-center rounded-xs has-[input:focus-within]:outline-[1.5px]  hover:outline-[1.5px] hover:outline-neutral-basic  ${
          value == 0
            ? "has-[input:focus-within]:outline-amber-600"
            : "has-[input:focus-within]:outline-neutral-basic"
        }`}
      >
        <span className="inline-block p-1">
          <img src={icon} alt={`${icon}`} className="h-3" />
        </span>

        {children}
      </div>
    </div>
  );
}

export default InputContainer;
