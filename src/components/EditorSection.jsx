import React, { useState, useRef, useCallback, useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import QueryContext from "../context/QueryContext";
import EditorHeader from "./EditorHeader";

import toast from "react-hot-toast";

function EditorSection() {
    const { selectedQuery, setQueryResponse, addQueryToHistory } =
        useContext(QueryContext);
    // const [query, setQuery] = useState(selectedQuery?.query || "");
    const originalQuery = selectedQuery?.query || "";
    const aceEditorRef = useRef(null);

    const copyToClipboard = useCallback(() => {
        if (aceEditorRef.current) {
            const text = aceEditorRef.current.editor.getValue();
            navigator.clipboard
                .writeText(text)
                .then(() => toast.success("Copied!"));
        }
    }, []);

    // TODO: useCallback causes issues below
    const runQuery = () => {
        let currQuery = aceEditorRef.current.editor.getValue();
        if (currQuery === "") {
            toast("Please select a query!", {
                icon: "⚠️",
            });
        } else if (
            currQuery.toLowerCase() === originalQuery.toLowerCase() ||
            currQuery.toLowerCase() + ";" === originalQuery.toLowerCase()
        ) {
            setQueryResponse(selectedQuery?.response);
            addQueryToHistory(selectedQuery);
            toast.success("Query executed!");
        } else {
            toast.error("Query modified!");
        }
    };

    return (
        <section className="flex flex-col h-auto">
            <EditorHeader onCopy={copyToClipboard} onRun={runQuery} />
            <AceEditor
                ref={aceEditorRef}
                mode="mysql"
                theme="monokai"
                width="100%"
                placeholder="Write your MySQL queries here..."
                showPrintMargin={false}
                // onChange={handleOnChange}
                fontSize={18}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                value={selectedQuery?.query || ""}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
        </section>
    );
}

export default EditorSection;
