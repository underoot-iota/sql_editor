function Table({ headers, rows, currentPage = 1, rowsPerPage = 10 }) {
    if (!rows || rows.length === 0) {
        return (
            <div className="flex justify-center items-center h-96 text-2xl text-slate-500 dark:text-slate-400">
                No data to display!
            </div>
        );
    }

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    let currentRows = rows.slice(firstRowIndex, lastRowIndex);

    return (
        <>
            <div className="overflow-auto">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl whitespace-nowrap dark:text-gray-200 dark:bg-gray-700"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                        {currentRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {headers.map((header, index) => (
                                    <td
                                        key={`${rowIndex}_${index}`}
                                        className="px-4 py-2 text-sm whitespace-nowrap dark:text-gray-300"
                                    >
                                        {row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
