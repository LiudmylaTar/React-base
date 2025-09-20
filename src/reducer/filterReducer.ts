export type FilterState = "All" | "Active" | "Complete";

export type FilterAction = {
  type: FilterState;
};

export function filterReducer(
  state: FilterState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case "All":
      return "All";
    case "Active":
      return "Active";
    case "Complete":
      return "Complete";
    default:
      return state;
  }
}
