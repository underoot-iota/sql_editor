import Sidebar from "../Sidebar";
import TableContent from "./Tables/TableContent";
import HistoryContent from "./History/HistoryContent";

function RightSidebar() {
    return (
        <Sidebar className="flex flex-col h-full" isRightSideBar={true}>
            <TableContent />
            <HistoryContent />
        </Sidebar>
    );
}

export default RightSidebar;
