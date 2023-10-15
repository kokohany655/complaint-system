import React, { useContext, useEffect } from "react";
import { ContextData } from "./_app";

const PrintReport = () => {
  const data = useContext(ContextData);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-report relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              {data.name}
            </th>
            <td className="px-6 py-4">{data.email}</td>
            <td className="px-6 py-4">{data.message}</td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        className="w-full text-white bg-[#702DF7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={handlePrint}
      >
        Print Report
      </button>
    </div>
  );
};

export default PrintReport;
