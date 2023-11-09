import { useContext } from "react";
import QueryContext from "../../../context/QueryContext";
import { BiColumns } from "react-icons/bi";

function QueryComponent(query) {
    const { selectedQuery, setSelectedQuery } = useContext(QueryContext);

    return (
        <div
            key={query.id}
            type="button"
            title={query.name}
            onClick={() => setSelectedQuery(query)}
            className={`w-full flex items-center gap-2 py-2 border-b border-gray-100 dark:border-gray-700 font-medium text-base text-indigo-500 dark:text-white pl-4 cursor-pointer 
                        ${selectedQuery?.id === query.id ? "bg-slate-200 dark:bg-gray-600" : "bg-white dark:bg-gray-800"}
                        hover:bg-slate-100 dark:hover:bg-gray-700`}
        >
            <BiColumns className="text-xl text-current" />
            Query {query.id}
        </div>
    );
}

export default QueryComponent;
