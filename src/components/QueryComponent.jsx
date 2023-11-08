import { useContext } from "react";
import QueryContext from "../context/QueryContext";

function QueryComponent(query) {
    const { selectedQuery, setSelectedQuery } = useContext(QueryContext);

    return (
        <div
            key={query.id}
            type="button"
            title={query.name}
            onClick={() => setSelectedQuery(query)}
            className={`block pl-2 py-1 cursor-pointer ${
                selectedQuery?.id === query.id ? "bg-slate-200" : "bg-white"
            }`}
        >
            Query {query.id}
            </div>
    );
}

export default QueryComponent;
