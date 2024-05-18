/* eslint-disable react/prop-types */
function Square({ value, onSquareclick }) {
  return (
    <button
      className="w-20 h-20 font-bold rounded-md bg-slate-900 text-slate-100"
      onClick={onSquareclick}
    >
      {value}
    </button>
  );
}

export default Square;
