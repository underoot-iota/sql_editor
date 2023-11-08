function HistoryComponent(query) {
    return (
        <div key={query.id} className={`block pl-2 py-1 bg-white}`}>
            Query {query.id}
        </div>
    );
}

export default HistoryComponent;
