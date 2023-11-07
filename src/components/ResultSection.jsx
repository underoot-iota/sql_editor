import { useContext } from "react";
import QueryContext from "../context/QueryContext";
import Table from "./Table"

import Papa from "papaparse";

window.Papa = Papa;

function ResultSection() {
    const { queryResponse } = useContext(QueryContext);

    let csvData;

    Papa.parse(queryResponse || "", {
        header: true,
        complete: (results) => {
            console.log("Parsed Data:", results.data);
            csvData = results.data;
        },
    });

    return (
        <section className="flex flex-col h-auto">
            <header className="flex flex-row w-full bg-slate-50 py-4 border-b-2 border-solid border-indigo-50 pl-4 dark:bg-gray-800 dark:text-white">
                Output
            </header>
            <Table data={csvData} />
        </section>
    );
}

export default ResultSection;
