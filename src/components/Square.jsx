/* eslint-disable react/prop-types */
function Square({ value, onSquareclick }) {
  return <button onClick={onSquareclick}>{value}</button>;
}

export default Square;
