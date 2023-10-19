"use client";

import NamaNavbar from "./Nama-Navbar";
import LogoutNavbar from "./Logout-Navbar";
import FotoProfil from "./FotoProfil";
import AddUserDropDown from "./AddUserDropDown";
import Link from "next/link";
import Alert from "../Alert";
import AllUsersDropdown from "./All UsersDropdown";
import AddExcel from "./AddExcel";
import { AiOutlineUpload } from "react-icons/ai";
import axios from "axios";
import APILink from "@/app/entities/APILink";
import alertService from "@/app/services/alertService";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg top-0 z-[999] fixed">
        <Alert />

        <div className="navbar-start ml-10">
          {/* <div className="dropdown ml-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div> */}

          <Link
            href={"/dashboard"}
            className="btn btn-ghost normal-case text-xl text-primary"
          >
            <strong>IFT Group</strong>
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <NamaNavbar />

          <div className="dropdown dropdown-end mr-12 z-50  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FotoProfil />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <AddExcel />
              <AddUserDropDown />
              <AllUsersDropdown />
              <LogoutNavbar />
            </ul>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-10">Upload Excel File Here!</h3>

          <div className="flex justify-center flex-col items-center">
            <input
              type="file"
              id="input-excel"
              className="file-input file-input-bordered w-full max-w-xs"
            />

            <form method="dialog">
              <button
                className="btn mt-10 btn-primary"
                onClick={() => {
                  const inputExcel: any =
                    document.getElementById("input-excel");

                  const formData = new FormData();
                  formData.append("file-excel", inputExcel.files[0]);

                  axios
                    .post(APILink.uploadFileExcel, formData)
                    .then((r) => {
                      if (r.status == 200) {
                        alertService(null, "Success Upload Excel Data")!;
                        setTimeout(() => {
                          window.location.reload();
                        }, 2000);
                      }
                    })
                    .catch((e) => {
                      alertService("error", "Failed Upload Excel Data");
                    });
                }}
              >
                <AiOutlineUpload /> Upload
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
