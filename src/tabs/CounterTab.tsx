import { useState } from "react";
import Counter from "../components/Counter/Counter";

export default function CounterTab() {
  const [count, setCount] = useState(1);
  const handleAddClick = () => setCount(count + 1);
  const handleMinusClick = () => setCount(count - 1);
  return (
    <>
      <Counter
        addClick={handleAddClick}
        count={count}
        minusClick={handleMinusClick}
      />
    </>
  );
}
