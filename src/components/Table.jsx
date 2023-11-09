function Table({ data }) {
    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center h-full text-2xl text-slate-500">
                No data to display!
            </div>
        );
    }

    const headers = Object.keys(data[0]);

    return (
            <div className="h-full overflow-auto">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, index) => (
                                    <td
                                        key={`${rowIndex}_${index}`}
                                        className="border-t-2 border-gray-200 px-4 py-2 text-sm"
                                    >
                                        {row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Table;
