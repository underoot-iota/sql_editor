import { useContext, useCallback } from "react";
import QueryContext from "../context/QueryContext";
import Table from "./Table";
import Papa from "papaparse";
import toast from "react-hot-toast";

function ResultSection() {
    const { queryResponse } = useContext(QueryContext);
    let csvData;

    // Parse the queryResponse to csvData
    Papa.parse(queryResponse || "", {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            console.log("Parsed Data:", results.data);
            csvData = results.data;
        },
    });

    // This function will be triggered when the export button is clicked
    const exportCSV = useCallback(() => {
        if (!csvData || csvData.length === 0) {
            toast.error("No data to export!");
            return;
        }

        // Convert the csvData to a CSV string
        const csv = Papa.unparse(csvData);

        // Create a Blob from the CSV String
        const csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

        // Create a link element
        const link = document.createElement("a");
        const url = URL.createObjectURL(csvBlob);

        // Set link attributes and click to start download
        link.setAttribute("href", url);
        link.setAttribute("download", "export.csv");
        link.style.visibility = "hidden";

        // Append to the DOM, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Display success toast after export
        toast.success("Data exported successfully!");
    }, [csvData]);

    return (
        <>
            <div className="relative">
                <p className="absolute right-1/2 h-2 w-6 bg-slate-300 rounded-sm pointer-events-none" />
                <header className="flex justify-between items-center bg-slate-50 text-lg px-8 py-3.5 font-medium border-b-2 border-t-2 border-solid border-indigo-50 dark:bg-gray-800 dark:text-white">
                    Output
                    <button
                        type="button"
                        className="border-2 px-4 py-0.5 text-indigo-500 border-indigo-500 text-base font-medium rounded"
                        onClick={exportCSV} // Add the onClick event handler
                    >
                        Export CSV
                    </button>
                </header>
            </div>

            <Table data={csvData} />
        </>
    );
}

export default ResultSection;
