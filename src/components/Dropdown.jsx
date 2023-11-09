import { useState } from "react";
import { BiHash, BiChevronDown, BiChevronRight, BiPlus } from "react-icons/bi";

function Dropdown({ header, selections }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`m-0 w-full px-2 py-2 border-b border-gray-100 ${
                !expanded ? "hover:bg-slate-100" : ""
            }`}
        >
            <div
                onClick={() => setExpanded(!expanded)}
                className="flex flex-row items-center justify-evenly
                mx-0 text-gray-500
                cursor-pointer"
            >
                <ChevronIcon expanded={expanded} />
                <h5 className="text-indigo-500 text-opacity-90 text-base font-medium cursor-pointer ">
                    {header}
                </h5>
                <BiPlus className="text-xl text-opacity-80 my-auto ml-auto" />
            </div>
            {expanded &&
                selections &&
                selections.map((selection) => (
                    <TopicSelection selection={selection} />
                ))}
        </div>
    );
}

const TopicSelection = ({ selection }) => (
    <div className="flex flex-row items-center justify-evenly mr-auto ml-2 my-1 cursor-pointer">
        <BiHash className="text-gray-400 text-lg mr-1 text" />
        <h5 className="text-gray-500 font-medium my-0.5 mr-auto text-sm hover:text-gray-700">
            {selection}
        </h5>
    </div>
);

const ChevronIcon = ({ expanded }) => {
    const chevClass = "text-xl text-opacity-80 my-auto mr-1";
    return expanded ? (
        <BiChevronDown className={chevClass} />
    ) : (
        <BiChevronRight className={chevClass} />
    );
};

export default Dropdown;
