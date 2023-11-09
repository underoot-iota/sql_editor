import { useContext, useCallback, useState } from "react";
import QueryContext from "../../../../context/QueryContext";
import Table from "./Table";
import Papa from "papaparse";
import toast from "react-hot-toast";
import ResultFooter from "./ResultFooter";

function ResultSection() {
    const { queryResponse } = useContext(QueryContext);
    let csvData, totalPages, headers, rows;

    const [currentPage, setCurrentPage] = useState(1);

    //Parsing queryResponse
    Papa.parse(queryResponse || "", {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            if (results.data?.length == 0) {
                return;
            }
            csvData = results.data;
            totalPages = Math.ceil(csvData.length / 10);

            headers = Object.keys(csvData[0]);
            rows = csvData.slice(1, csvData.length);
        },
    });

    const exportCSV = useCallback(() => {
        if (!csvData || csvData.length === 0) {
            toast.error("No data to export!");
            return;
        }

        //Converting csvData to CSV string
        const csv = Papa.unparse(csvData);

        //Creating a Blob from CSV String
        const csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

        //Creating a link element
        const link = document.createElement("a");
        const url = URL.createObjectURL(csvBlob);

        //Set link attributes and click to start download
        link.setAttribute("href", url);
        link.setAttribute("download", "export.csv");
        link.style.visibility = "hidden";

        //Append to DOM, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        //Display success toast after export
        toast.success("Data exported successfully!");
    }, [csvData]);

    return (
        <div className="dark:bg-gray-700">
            <div className="relative">
                <p className="absolute right-1/2 h-2 w-6 bg-slate-300 rounded-sm pointer-events-none dark:bg-gray-700" />
                <header className="flex justify-between items-center bg-slate-50 text-lg px-8 py-3.5 font-medium border-b-2 border-t-2 border-solid border-indigo-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    Output
                    <button
                        type="button"
                        className="border-2 px-4 py-0.5 text-indigo-500 hover:text-indigo-700 border-indigo-500 hover:border-indigo-700 text-base font-medium rounded dark:text-indigo-400 dark:hover:text-indigo-600 dark:border-indigo-400 dark:hover:border-indigo-600"
                        onClick={exportCSV}
                    >
                        Export CSV
                    </button>
                </header>
            </div>

            {/* Ensure Table component is also styled for dark mode */}
            <Table headers={headers} rows={rows} currentPage={currentPage} />

            {csvData && (
                <div className="bg-white dark:bg-gray-700">
                    <ResultFooter
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            )}
        </div>
    );
}

export default ResultSection;