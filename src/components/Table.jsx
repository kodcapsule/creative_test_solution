function Table({ tableData }) {
  if (!tableData) return;
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-2">
            {Object.keys(tableData[0]).map((columnName) => (
              <th key={columnName} className="px-6 py-3">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className="bg-white border-b border-2 dark:bg-gray-900 dark:border-gray-700 cursor-pointer hover:bg-gray-100"
            >
              {Object.keys(data).map((key) => (
                <td key={key} className="px-6 py-4">
                  {data[key]}
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
