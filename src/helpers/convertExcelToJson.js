import * as XLSX from "xlsx";

export function convertExcelToJson(data) {
  let convertedData;
  const readFile = new FileReader();
  readFile.readAsBinaryString(data);
  readFile.onload = (e) => {
    let readData = e.target.result;
    const workBook = XLSX.read(readData, { type: "binary" });
    const workSheetName = workBook.SheetNames[0];
    const workSheet = workBook.Sheets[workSheetName];
    const workSheetData = XLSX.utils.sheet_to_json(workSheet);
    convertedData = workSheetData;
  };

  return convertedData;
}
