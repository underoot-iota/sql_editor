import { useContext } from "react";
import QueryContext from "../context/QueryContext";
import { BiColumns } from "react-icons/bi"

function QueryComponent(query) {
    const { selectedQuery, setSelectedQuery } = useContext(QueryContext);

    return (
        <div
            key={query.id}
            type="button"
            title={query.name}
            onClick={() => setSelectedQuery(query)}
            className={`w-full flex items-center gap-2 py-2 border-b border-gray-100 font-medium text-base text-indigo-500 pl-4 cursor-pointer hover:bg-slate-100 ${
                selectedQuery?.id === query.id ? "bg-slate-200" : "bg-white"
            }`}
        >
            <BiColumns className="text-xl"/>
            Query {query.id}
            </div>
    );
}

export default QueryComponent;
