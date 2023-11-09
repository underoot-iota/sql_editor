import { useState } from "react";

import EditorResult from "./Editor/EditorResult";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

import QueryContext from "../../context/QueryContext";

function Body() {
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [queryResponse, setQueryResponse] = useState(null);
    const [queryHistory, setQueryHistory] = useState([]);

    function addQueryToHistory(query) {
        setQueryHistory([...queryHistory, query]);
    }

    return (
        <QueryContext.Provider
            value={{
                selectedQuery,
                setSelectedQuery,
                queryResponse,
                setQueryResponse,
                queryHistory,
                addQueryToHistory,
            }}
        >
            <div className="flex flex-row h-full">
                <LeftSidebar />
                <EditorResult />
                <RightSidebar />
            </div>
        </QueryContext.Provider>
    );
}

export default Body;
