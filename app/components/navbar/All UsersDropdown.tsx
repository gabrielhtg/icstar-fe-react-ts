"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllUsersDropdown = () => {
  const [namaClass, setNamaClass] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [rStatus, setRStatus] = useState(0);

  useEffect(() => {
    axios
      .get("/api/is-admin")
      .then((r) => {
        setIsAdmin(r.data.data);
        setRStatus(r.status);
      })
      .catch((e) => {});

    if (isAdmin === false) {
      setNamaClass("hidden");
    } else {
      setNamaClass("flex");
    }
  }, [namaClass, isAdmin, rStatus]);

  return (
    <li className={namaClass}>
      <Link href={"/all-users"}>All Users</Link>
    </li>
  );
};

export default AllUsersDropdown;
