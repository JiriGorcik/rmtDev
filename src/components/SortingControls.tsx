import { useJobItemsContext } from "../hooks/hooks";

export default function SortingControls() {
  const { handleChangeSortBy, sortBy } = useJobItemsContext();
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide" />

      <SortingButton
        handleChangeSortBy={() => handleChangeSortBy("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>

      <SortingButton
        handleChangeSortBy={() => handleChangeSortBy("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  handleChangeSortBy: () => void;
  isActive: boolean;
};

function SortingButton({
  children,
  handleChangeSortBy,
  isActive,
}: SortingButtonProps) {
  return (
    <button
      onClick={handleChangeSortBy}
      className={`sorting__button sorting__button--recent ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
