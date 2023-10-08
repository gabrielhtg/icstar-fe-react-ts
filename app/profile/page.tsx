"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import APILink from "../entities/APILink";
import Navbar from "../components/navbar/Navbar";
import AlertLogin from "../components/login/AlertLogin";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [admin, setAdmin] = useState("");
  const [fotoProfil, setFotoProfil] = useState("");

  useEffect(() => {
    axios
      .get(APILink.getUser)
      .then((r) => {
        if (r.status === 200) {
          console.log(r.data.data);

          setEmail(r.data.data.email);
          setFirstName(r.data.data.firstName);
          setLastName(r.data.data.lastName);
          setAdmin(r.data.data.admin);
          setFotoProfil(APILink.profilePict);
        }
      })
      .catch((e) => {});
  }, [email, firstName, lastName, admin]);

  return (
    <>
      <AlertLogin />
      <Navbar />
      <div className="md:h-screen flex bg-base-200">
        <div className="container mx-auto mt-[95px] px-5 flex flex-col items-center w-full justify-center">
          <div className="flex flex-col md:flex-row w-full md:justify-center">
            <div className="flex flex-col justify-center items-center pt-6 pb-5 px-5 card bg-base-300 rounded-box md:w-1/2">
              <div className="avatar mb-5 md:mb-10">
                <div className="w-28 sm:w-36 md:w-40 lg:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={fotoProfil}
                    alt="foto-profil"
                    width={150}
                    height={150}
                    priority={true}
                    unoptimized={true}
                  ></Image>
                </div>
              </div>
              <h1 className=" text-xl font-semibold sm:text-2xl lg:text-3xl">
                {""}
              </h1>
            </div>

            <div className="divider md:divider-horizontal"></div>

            <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
              <div className="flex flex-col">
                <h1 className=" text-primary font-semibold">Email</h1>
                <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                  <span>{email}</span>
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold">First Name</h1>
                <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                  <span>{firstName}</span>
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold">Last Name</h1>
                <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                  <span>{lastName}</span>
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold">Admin</h1>
                <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                  <span>{admin}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-16">
            <Link href={"/edit-profile"}>
              <button className="btn btn-primary">Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
