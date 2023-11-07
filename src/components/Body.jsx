import { useState } from "react";

import EditorResult from "./EditorResult";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import QueryContext from "../context/QueryContext";

function Body() {
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [queryResponse, setQueryResponse] = useState(null);

    return (
        <QueryContext.Provider
            value={{
                selectedQuery,
                setSelectedQuery,
                queryResponse,
                setQueryResponse,
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
