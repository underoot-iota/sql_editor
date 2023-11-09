import EditorSection from "./EdtiorSection/EditorSection";
import ResultSection from "./ResultSection/ResultSection";

import { Allotment } from "allotment";
import "allotment/dist/style.css";

function EditorResult() {
    return (
        <Allotment vertical="true" defaultSizes={[500, 500]}>
            <EditorSection />
            <Allotment.Pane maxSize={600} minSize={60} className="dark:bg-gray-700">
                <ResultSection />
            </Allotment.Pane>
        </Allotment>
    );
}

export default EditorResult;
