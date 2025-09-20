import { useReducer } from "react";
import Counter from "../components/Counter/Counter";
import { CountReduser, initialState } from "../reducer/countReducer";

export default function CounterTab() {
  const [state, dispatch] = useReducer(CountReduser, initialState);

  const handleAddClick = () => dispatch({ type: "increment" });
  const handleMinusClick = () => dispatch({ type: "decrement" });
  const handleResetClick = () => dispatch({ type: "reset" });
  return (
    <>
      <Counter
        addClick={handleAddClick}
        count={state.count}
        minusClick={handleMinusClick}
        resetClick={handleResetClick}
      />
    </>
  );
}
