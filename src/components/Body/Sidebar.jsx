import { useState } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";

function Sidebar({children, isRightSideBar}) {
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(true);
    return (
        <section
            className={`flex flex-col bg-white border-x-2 border-solid border-indigo-50 h-full relative ${
                isSideBarCollapsed ? "w-96" : "w-20"
            } duration-300`}
        >
            <BiSolidChevronLeft
                className={`bg-white z-10 text-2xl rounded text-slate-700 absolute ${isRightSideBar ? "-left-3" : "-right-3"} top-4 border border-solid border-indigo-50 cursor-pointer
            ${(!isSideBarCollapsed ^ isRightSideBar) && "rotate-180"}`}
                onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
            />

            {isSideBarCollapsed && children}

        </section>
    );
}

export default Sidebar;
