import React from "react";
import { BiCopy, BiPlay } from "react-icons/bi";
import { Toaster } from "react-hot-toast";

function EditorHeader({ onCopy, onRun }) {
    return (
        <header className="flex justify-between items-center bg-slate-50 py-3.5 px-4 border-b-2 border-indigo-50 dark:bg-gray-800">
            <span className="dark:text-white">Input</span>
            <div className="flex items-center gap-4 pr-4">
                <BiCopy
                    className="text-indigo-400 text-2xl cursor-pointer"
                    onClick={onCopy}
                />
                <Toaster position="top-center" />
                <button
                    type="button"
                    className="flex items-center justify-center gap-1 bg-indigo-400 hover:bg-indigo-700 text-white text-base font-medium py-0.5 pl-1 pr-4 rounded"
                    onClick={onRun}
                >
                    <BiPlay className="text-2xl" />
                    <span>Run</span>
                </button>
            </div>
        </header>
    );
}

export default EditorHeader;
