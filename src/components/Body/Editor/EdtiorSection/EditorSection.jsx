import React, {
    useRef,
    useCallback,
    useContext,
    useState,
    useEffect,
} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import QueryContext from "../../../../context/QueryContext";
import ThemeContext from "../../../../context/ThemeContext";

import EditorHeader from "../EditorHeader/EditorHeader";

import toast from "react-hot-toast";

function EditorSection() {
    const {
        selectedQuery,
        setSelectedQuery,
        setQueryResponse,
        addQueryToHistory,
    } = useContext(QueryContext);

    const { darkTheme } = useContext(ThemeContext);
    const theme = darkTheme ? "monokai" : "github";

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
            // INFO: Fetch CSV data from API
            setQueryResponse(selectedQuery?.response);
            addQueryToHistory(selectedQuery);
            toast.success("Query executed!");
        } else {
            toast.error("Query modified!");
        }
    };

    const clearEditor = () => {
        setSelectedQuery(null);
    };

    const handleOnChange = () => {
        console.log(aceEditorRef.current.editor.getValue());
    };

    useEffect(() => {
        console.log("useEffect::" + theme);
        aceEditorRef.current.editor.setTheme(`ace/theme/${theme}`);
    }, [theme]);

    console.log("EditorSection::" + theme);

    return (
        <section className="flex flex-col">
            <EditorHeader
                onCopy={copyToClipboard}
                onRun={runQuery}
                clearEditor={clearEditor}
            />
            <div className="overflow-auto z-0">
                <label for="AceEditor"/>
                <AceEditor
                    id="AceEditor"
                    key={theme}
                    ref={aceEditorRef}
                    mode="mysql"
                    theme={theme}
                    width="100%"
                    height="1100px"
                    placeholder="-- Write your MySQL queries here..."
                    showPrintMargin={false}
                    // onChange={handleOnChange}
                    fontSize={18}
                    name="SQL-Editor"
                    editorProps={{ $blockScrolling: true }}
                    value={selectedQuery?.query || ""}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}
                />
            </div>
        </section>
    );
}

export default EditorSection;
