"use client";

import IsLogin from "@/app/services/IsLogin";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NamaNavbar = function () {
  const router = useRouter();
  const [nama, setNama] = useState();

  useEffect(() => {
    IsLogin(router);

    axios
      .get("/api/get-firstname-by-token")
      .then((response) => {
        setNama(response.data.data);
      })
      .catch((e) => {});
  }, [router]);

  return (
    <div className="mr-5 text-lg">
      Hi, <strong>{nama}!</strong>
    </div>
  );
};

export default NamaNavbar;
