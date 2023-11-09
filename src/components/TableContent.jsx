import Dropdown from "./Dropdown";

function TableContent() {

    const cars = ['tailwind-css', 'react'];
    const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
    const random = ['variants', 'plugins'];

    return (
        <section className="flex-grow flex flex-col">
            <header className="w-full bg-slate-50 py-4 text-lg font-medium border-b-2 border-solid border-indigo-50 pl-4 dark:bg-gray-800 dark:text-white">
                Tables
            </header>
            <div className=" dark:bg-gray-600 overflow-hidden">
                <Dropdown header="Topics" selections={cars} />
                <Dropdown header="Questions" selections={questions} />
                <Dropdown header="Random" selections={random} />
            </div>
        </section>
    );
}

function TableName() {
    return <></>;
}

export default TableContent;
