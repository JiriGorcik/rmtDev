import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useJobItemsContext } from "../hooks/hooks";

export default function PaginationControls() {
  const { currentPage, handleChangePage, totalNumberOfPages } =
    useJobItemsContext();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: "next" | "previous";
  currentPage: number;
  handleChangePage: (direction: "next" | "previous") => void;
};

function PaginationButton({
  direction,
  currentPage,
  handleChangePage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        handleChangePage(direction);
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
