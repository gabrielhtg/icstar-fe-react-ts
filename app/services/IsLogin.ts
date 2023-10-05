"use client";

import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function IsLogin(router: AppRouterInstance) {
  const url = "/api/islogin";

  try {
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          // router.push("/dashboard");
        }
      })
      .catch((e) => {
        router.push("/");
      });
  } catch (e) {}
}
