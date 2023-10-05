import axios from "axios";
import alertService from "./alertService";

export default async function LogoutService() {
  let url = "/api/logout";

  await axios
    .delete(url, {
      headers: {
        email: "usertest@example.com",
      },
    })
    .then((r) => {
      const alertSuccess = document.querySelector("#alert-success");

      const alertSuccessMsg = document.querySelector("#alert-success-msg");

      if (r.status === 200) {
        alertService(null, "Logout Success");

        window.location.href = "/";
      }
    })
    .catch((e) => {});
}
