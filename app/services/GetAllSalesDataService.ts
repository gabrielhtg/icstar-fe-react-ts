import axios from "axios";

export default async function GetAllSalesDataService() {
  await axios
    .get("/api/get-all-sales-data", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .then((data) => {
      if (data != null) {
        // Data berhasil diterima
        console.log(data);
        // Lakukan sesuatu dengan data yang diterima
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}
