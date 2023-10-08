import axios from "axios";

const DataToTable = (link: string, elementTable: HTMLTableElement) => {
  const tableHead = elementTable.querySelector("thead");
  const tableBody = elementTable.querySelector("tbody");

  const response = axios.get(link);

  console.log(response);
};

export default DataToTable;
