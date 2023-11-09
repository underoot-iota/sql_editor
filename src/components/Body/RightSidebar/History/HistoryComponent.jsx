function HistoryComponent({query}) {
    console.log(query)
    return (
        <div
            key={query.id}
            className="w-full px-4 py-4 border-b border-gray-100 font-medium text-base text-gray-700 dark:border-gray-700 dark:text-gray-300"
        >
            Query {query.id}
        </div>
    );
}

export default HistoryComponent;
