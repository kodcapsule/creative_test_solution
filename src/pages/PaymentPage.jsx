import { Outlet } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import { convertExcelToJson } from "../helpers/convertExcelToJson";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import Payments from "../components/Payments";
import { useState } from "react";
import Table from "../components/Table";
let convertedData = null;

async function excelOperations(excelData) {
  const workBook = XLSX.read(excelData, { type: "buffer" });
  const workSheetName = workBook.SheetNames[0];
  const workSheet = workBook.Sheets[workSheetName];
  const workSheetData = XLSX.utils.sheet_to_json(workSheet);
  return workSheetData;
}

function PaymentPage() {
  //  handles the excel file upload

  const [excelData, setExcelData] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  async function handleChange(e) {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      const excelData = await selectedFile.arrayBuffer(selectedFile);
      const excelFile = XLSX.read(excelData);
      const excelSheet = excelFile.Sheets[excelFile.SheetNames[0]];
      const excelToJsonData = XLSX.utils.sheet_to_json(excelSheet);
      console.log(excelToJsonData);
      setJsonData(excelToJsonData);
      toast.success("File Uploaded Successfully", {});
    } else {
      toast.error("Please FiSelect a file", {});
    }
  }

  return (
    <div>
      <ul className=" flex gap-3 px-3">
        <li className=" flex items-center border-[1.5px] border-solid border-blue-500  rounded-lg px-3 py-1 shadow-sm gap-2 hover:bg-blue-500 cursor-pointer text-blue-500 hover:text-white font-bold ease-in-out transition-all duration-500">
          <span className=" text-xl">
            <MdFileUpload />
          </span>
          <input
            type="file"
            id="file"
            required
            className=" hidden"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleChange}
          />
          <label htmlFor="file"> New Bulk Payment</label>
        </li>
        <li className=" flex items-center border-[1.5px] border-solid border-blue-500  rounded-lg px-3 py-1 shadow-sm gap-2 hover:bg-blue-500 cursor-pointer text-blue-500 hover:text-white font-bold transition-all duration-500">
          View Previous Payments
        </li>
      </ul>
      <div className="paymentContent mt-8 text-center">
        {jsonData && <Table tableData={jsonData} />}
      </div>
      {jsonData && <button className=" mt-10">Process</button>}
    </div>
  );
}

export default PaymentPage;
