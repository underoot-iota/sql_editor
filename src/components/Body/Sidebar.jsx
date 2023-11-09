import { useState } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";

function Sidebar({ children, isRightSideBar }) {
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(true);

    return (
        <section
            className={`transition-width-300 flex flex-col ${isSideBarCollapsed ? "w-96" : "w-20"}
                border-x-2 h-full relative
                bg-white dark:bg-gray-800 border-indigo-50 dark:border-gray-700`}
        >
            <BiSolidChevronLeft
                className={`z-10 text-2xl rounded-full absolute top-4 cursor-pointer
                ${isRightSideBar ? "-left-3" : "-right-3"}
                bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-200
                border border-solid border-indigo-50 dark:border-gray-700
                ${(!isSideBarCollapsed ^ isRightSideBar) && "rotate-180"}`}
                onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
            />

            {isSideBarCollapsed && children}
        </section>
    );
}

export default Sidebar;
