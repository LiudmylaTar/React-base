export type CountState = {
  count: number;
};
export type CountAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

export const initialState = { count: 0 };

export function CountReduser(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
