"use client";

import LogoutService from "@/app/services/LogoutService";

const LogoutNavbar = () => {
  return (
    <>
      <li
        onClick={() => {
          LogoutService();
        }}
      >
        <a>Logout</a>
      </li>
    </>
  );
};

export default LogoutNavbar;
