import { useState } from "react";
import { BiHash, BiChevronDown, BiChevronRight } from "react-icons/bi";

function Dropdown({ header, selections }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`m-0 w-full px-2 py-2 border-b border-gray-200 dark:border-gray-700 ${
                !expanded ? "hover:bg-slate-100 dark:hover:bg-gray-700" : ""
            }`}
        >
            <div
                onClick={() => setExpanded(!expanded)}
                className="flex flex-row items-center bg
                mx-0 text-gray-500 dark:text-gray-400
                cursor-pointer"
            >
                <ChevronIcon expanded={expanded} />
                <h5 className="text-indigo-500 dark:text-indigo-400 text-base font-medium cursor-pointer ">
                    {header}
                </h5>
            </div>
            {expanded &&
                selections &&
                selections.map((selection) => (
                    <TopicSelection key={selection} selection={selection} />
                ))}
        </div>
    );
}

const TopicSelection = ({ selection }) => (
    <div className="flex flex-row items-center justify-evenly mr-auto ml-2 my-1 cursor-pointer">
        <BiHash className="text-gray-400 dark:text-gray-500 text-lg mr-1" />
        <h5 className="text-gray-500 dark:text-gray-400 font-medium my-0.5 mr-auto text-sm hover:text-gray-700 dark:hover:text-gray-300">
            {selection}
        </h5>
    </div>
);

const ChevronIcon = ({ expanded }) => {
    const chevClass = "text-xl my-auto mr-1 dark:text-gray-400";
    return expanded ? (
        <BiChevronDown className={chevClass} />
    ) : (
        <BiChevronRight className={chevClass} />
    );
};

export default Dropdown;
