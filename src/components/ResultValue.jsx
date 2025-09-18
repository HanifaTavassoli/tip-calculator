function ResultValue({ title, result }) {
  return (
    <div className="flex justify-between mb-10">
      <div className="tracking-tighter">
        <p className="text-xs tracking-tight font-semibold">{title}</p>
        <p className="text-[10px] text-neutral-light">
          <span className="mr-2">/</span>
          <span>person</span>
        </p>
      </div>
      <div className="font-extrabold  text-2xl sm:text-3xl text-neutral-basic">
        ${result == 0 ? "0.00" : result}
      </div>
    </div>
  );
}

export default ResultValue;
