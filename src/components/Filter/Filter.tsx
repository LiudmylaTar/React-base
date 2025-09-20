import "./Filter.css";

interface FilterProps {
  dispatch: React.Dispatch<{ type: "All" | "Active" | "Complete" }>;
  currentFilter: "All" | "Active" | "Complete";
}

export default function Filter({ dispatch, currentFilter }: FilterProps) {
  return (
    <div className="filterContainer">
      <p className="filterDesc">Filter by status</p>
      <button
        className={`filterBtn ${currentFilter === "All" ? "active" : ""}`}
        onClick={() => dispatch({ type: "All" })}
      >
        All
      </button>
      <button
        className={`filterBtn ${currentFilter === "Active" ? "active" : ""}`}
        onClick={() => dispatch({ type: "Active" })}
      >
        Active
      </button>
      <button
        className={`filterBtn ${currentFilter === "Complete" ? "active" : ""}`}
        onClick={() => dispatch({ type: "Complete" })}
      >
        Complete
      </button>
    </div>
  );
}
