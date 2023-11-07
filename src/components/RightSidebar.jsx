import Sidebar from "./Sidebar";
import TableContent from "./TableContent";
import HistoryContent from "./HistoryContent";

function RightSidebar() {
    return (
        <Sidebar
            className="flex flex-col h-full"
            isRightSideBar={true}
        >
            <TableContent />
            <HistoryContent />
        </Sidebar>
    );
}

export default RightSidebar;
