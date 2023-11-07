import React, { useRef, useCallback, useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import QueryContext from "../context/QueryContext";
import EditorHeader from "./EditorHeader";

import toast from "react-hot-toast";

function EditorSection() {
    const { selectedQuery, setQueryResponse } = useContext(QueryContext);
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
        toast.success("Query executed!");
        setQueryResponse(selectedQuery?.response);
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
