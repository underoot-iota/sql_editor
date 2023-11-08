import { useContext } from "react";
import QueryContext from "../context/QueryContext";
import HistoryComponent from "./HistoryComponent";

function HistoryContent() {
    const { queryHistory } = useContext(QueryContext);

    return (
        <section className="flex flex-col flex-grow">
            <header className="w-full bg-slate-50 py-4 border-b-2 border-solid border-indigo-50 pl-4 dark:bg-gray-800 dark:text-white">
                History
            </header>
            <div className="dark:bg-gray-600">
                <ul>{queryHistory.map(HistoryComponent)}</ul>
            </div>
        </section>
    );
}

export default HistoryContent;
