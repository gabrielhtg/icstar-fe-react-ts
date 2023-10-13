"use client";

import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import APILink from "../entities/APILink";
import TableRow from "../components/all-users/Table-Row";
import { useEffect, useState } from "react";

const AllUsersPage = () => {
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    axios
      .get(APILink.getAllUsers)
      .then((r) => {
        setAllUsersData(r.data.data);
      })
      .catch();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>User</th>
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUsersData.map((users: any) => {
                return (
                  <TableRow
                    key={users.email}
                    email={users.email}
                    foto={users.profilePicture}
                    firstName={users.firstName}
                    lastName={users.lastName}
                    admin={`${users.admin}`}
                  />
                );
              })}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsersPage;
