import { useState } from "react";

export default function CounterTab() {
  const [count, setCount] = useState(1);
  const handleAddClick = () => setCount(count + 1);
  const handleMinusClick = () => setCount(count - 1);
  return (
    <>
      <h2>Counter</h2>
      <p>Count value: {count}</p>
      <button onClick={handleAddClick}>Click add +1</button>
      <button onClick={handleMinusClick}>Click minus -1</button>
    </>
  );
}
