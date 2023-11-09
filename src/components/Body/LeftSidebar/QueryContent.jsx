import queries from "../../../DataSource/queries.json";
import QueryComponent from "./QueryComponent";

function QueryContent() {
    return (
        <section className="flex flex-col">
            <header className="w-full bg-slate-50 py-4 border-b-2 border-solid border-indigo-50 pl-4 text-lg font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                Queries
            </header>
            <div className="dark:bg-gray-600">
                <ul>{queries.map(QueryComponent)}</ul>
            </div>
        </section>
    );
}

export default QueryContent;
