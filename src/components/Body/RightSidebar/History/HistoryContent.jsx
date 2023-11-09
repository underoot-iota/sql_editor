import { useContext } from "react";
import QueryContext from "../../../../context/QueryContext";
import HistoryComponent from "./HistoryComponent";

function HistoryContent() {
    const { queryHistory } = useContext(QueryContext);
    

    return (
        <section className="flex flex-col h-1/2">
            <header className="w-full bg-slate-50 py-4 text-lg font-medium border-b-2 border-t-2 border-solid border-indigo-50 pl-4 dark:bg-gray-800 dark:text-white dark:border-gray-600">
                History
            </header>
            <div className="overflow-y-auto dark:bg-gray-600 dark:text-gray-300">
                <ul>{queryHistory.map(query => (
                  <HistoryComponent key={query.id} query={query} />
                ))}</ul>
            </div>
        </section>
    );
}

export default HistoryContent;

