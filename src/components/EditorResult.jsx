import EditorSection from "./EditorSection";
import ResultSection from "./ResultSection";

function EditorResult() {
    return (
        <section className="flex flex-col bg-white border-r-2 border-solid border-indigo-50 h-full w-full">
            <EditorSection />
            <ResultSection />
        </section>
    );
}

export default EditorResult;
