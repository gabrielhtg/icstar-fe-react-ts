import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import alertService from "./alertService";

export default async function LoginService(
  email: string | undefined,
  password: string | undefined,
  remember: boolean | undefined,
  router: AppRouterInstance
) {
  const reqData = {
    email: email,
    password: password,
    rememberMe: remember,
  };

  await axios
    .post("/api/login", reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      alertService(null, "Login Success");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    })
    .catch((e) => {
      if (e.response.status === 400) {
        alertService("error", "Login failed.");
        console.log(e.response.data.message);
      }

      if (e.response.status === 401) {
        alertService("error", "Login failed.");
        console.log(e.response.data.message);
      }
    });
}
