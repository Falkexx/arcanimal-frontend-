import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Exibe todas as páginas se o total for menor ou igual a 7
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Lógica de reticências para páginas grandes
      if (currentPage <= 3) {
        // Mostra as primeiras 3 páginas e reticências
        for (let i = 1; i <= 3; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="dots-end">...</span>);
        pages.push(
          <button
            key={totalPages}
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 2) {
        // Mostra reticências e as últimas 3 páginas
        pages.push(
          <button
            key={1}
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
        );
        pages.push(<span key="dots-start">...</span>);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        // Mostra as páginas ao redor da página atual
        pages.push(
          <button
            key={1}
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
        );
        pages.push(<span key="dots-start" className="px-3 py-1 rounded bg-gray-200">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="dots-end" className="px-3 py-1 rounded bg-gray-200">...</span>);
        pages.push(
          <button
            key={totalPages}
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className=" w-full m-auto flexk justify-center items-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 mr-2"
      >
       <i>{<MdNavigateBefore/>}</i>      </button>

      <div className="flex space-x-2">{renderPagination()}</div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 ml-2"
      >
        <i>{<MdNavigateNext />}</i>
      </button>
    </div>
  );
}

export default Pagination;
