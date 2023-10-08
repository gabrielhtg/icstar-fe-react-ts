import NamaNavbar from "./Nama-Navbar";
import LogoutNavbar from "./Logout-Navbar";
import FotoProfil from "./FotoProfil";
import AddUserDropDown from "./AddUserDropDown";
import Link from "next/link";
import Alert from "../Alert";
import AllUsersDropdown from "./All UsersDropdown";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg top-0 z-10 fixed">
        <Alert />

        <div className="navbar-start">
          <div className="dropdown ml-10">
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
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href={"/dashboard"}
            className="btn btn-ghost normal-case text-xl text-primary"
          >
            <strong>IFT Group</strong>
          </Link>
        </div>
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
              <li>
                <a>Settings</a>
              </li>
              <AddUserDropDown />
              <AllUsersDropdown />
              <LogoutNavbar />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
