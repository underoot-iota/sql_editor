import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function ResultFooter({ currentPage, setCurrentPage, totalPages }) {
    // Change page function
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex justify-center w-full gap-8 items-center mt-4 py-3">
            <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="disabled:opacity-50 bg-gray-200 text-gray-800 rounded-md p-2 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                <BiChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-gray-800 dark:text-gray-300">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="disabled:opacity-50 bg-gray-200 text-gray-800 rounded-md p-2 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                <BiChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}

export default ResultFooter;
