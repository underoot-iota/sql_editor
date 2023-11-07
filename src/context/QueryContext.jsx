import { createContext } from "react";

const QueryContext = createContext({
    selectedQuery: null,
    setSelectedQuery: () => {},
    queryResponse: null,
    setQueryResponse: () => {},
});

export default QueryContext;
