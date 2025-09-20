import "./Counter.css";

type CounterProps = {
  count: number;
  addClick: () => void;
  minusClick: () => void;
  resetClick: () => void;
};
export default function Counter({
  addClick,
  count,
  minusClick,
  resetClick,
}: CounterProps) {
  return (
    <div className="countWrapper">
      <h2>Counter</h2>
      <p className="countText">Count value: {count}</p>
      <div className="btnWrapper">
        <button className="btnCount" onClick={addClick}>
          Click add +1
        </button>
        <button className="btnCount" onClick={minusClick}>
          Click minus -1
        </button>
        <button className="btnCount" onClick={resetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}
