"use client";

import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import fileToBlob from "../services/fileToBlob";
import axios from "axios";
import APILink from "../entities/APILink";
import alertService from "../services/alertService";

const AddUser = () => {
  const [fotoProfil, setFotoProfil] = useState<any>();
  const inputEmail: React.RefObject<HTMLInputElement> = useRef(null);
  const inputPassword: React.RefObject<HTMLInputElement> = useRef(null);
  const inputRepassword: React.RefObject<HTMLInputElement> = useRef(null);
  const inputFirstName: React.RefObject<HTMLInputElement> = useRef(null);
  const inputLastName: React.RefObject<HTMLInputElement> = useRef(null);
  const inputAdmin: React.RefObject<HTMLSelectElement> = useRef(null);
  const inputFoto: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    console.log(fotoProfil);
  }, [fotoProfil]);
  return (
    <>
      <Navbar />

      <div className="md:h-screen flex bg-base-200">
        <div className="container mx-auto mt-[85px] px-5 flex flex-col items-center w-full justify-center">
          <div className="flex flex-col md:flex-row w-full md:justify-center">
            <div className=" flex flex-col justify-center items-center pt-10 pb-8 px-5 card bg-base-300 rounded-box md:w-1/2">
              <div className="avatar mb-5 md:mb-10">
                <div className="w-28 sm:w-36 md:w-40 lg:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <div className="w-full h-full flex justify-center items-center">
                    {/* <Image
                    id="foto-profil-lama"
                    src={fotoProfil}
                    priority={true}
                    alt="foto-profil"
                    width={500}
                    height={500}
                    className=""
                  ></Image> */}

                    <Image
                      id="foto-profil-baru"
                      src={fotoProfil}
                      alt="foto-profil"
                      width={100}
                      height={100}
                      className="hidden"
                    ></Image>
                    <BsFillPersonFill
                      id="logo-profil"
                      className=" w-8/12 h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <h1 className=" text-primary font-semibold mb-2">
                  Foto Profil
                </h1>
                <input
                  type="file"
                  id="input-foto"
                  max={5000}
                  ref={inputFoto}
                  accept=".png, .jpg, .jpeg"
                  className="file-input file-input-bordered w-full"
                  onChange={() => {
                    const inputFoto =
                      document.querySelector<HTMLInputElement>("#input-foto");
                    const elementFotoBaru =
                      document.querySelector("#foto-profil-baru");
                    const logoProfil = document.querySelector("#logo-profil");

                    if (inputFoto!.files !== null) {
                      const selectedFile = inputFoto!.files[0];

                      const maxFileSize = 5 * 1024 * 1024; // 5 MB

                      if (selectedFile && selectedFile.size <= maxFileSize) {
                        setFotoProfil(fileToBlob(inputFoto));

                        elementFotoBaru?.classList.remove("hidden");
                        logoProfil?.classList.add("hidden");
                      } else {
                        alertService("error", "Photo size is too large!");
                        inputFoto!.value = "";
                      }
                    }
                  }}
                />
              </div>
              <span className=" self-start mt-2 text-error font-semibold text-sm ml-2">
                Max File Size 5MB
              </span>
            </div>

            <div className="divider md:divider-horizontal"></div>

            <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
              <div className="flex flex-col">
                <h1 className=" text-primary font-semibold mb-2">Email</h1>
                <input
                  id="input-email"
                  ref={inputEmail}
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">Password</h1>
                <input
                  id="input-password"
                  ref={inputPassword}
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">
                  Re-Enter Password
                </h1>
                <input
                  id="input-re-password"
                  type="password"
                  ref={inputRepassword}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">First Name</h1>
                <input
                  id="input-firstName"
                  type="text"
                  ref={inputFirstName}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">Last Name</h1>
                <input
                  id="input-lastName"
                  type="text"
                  placeholder="Type here"
                  ref={inputLastName}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">Admin</h1>
                <select
                  id="input-admin"
                  ref={inputAdmin}
                  className="select select-bordered w-full max-w-xs text-lg"
                >
                  <option value={"selected"}>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-center mb-16">
            {/* <Link href={"/profile"}>
              <button className="btn btn-neutral btn-wide">Back</button>
            </Link> */}

            <button
              className="btn btn-primary btn-wide"
              onClick={() => {
                let emailValue = inputEmail.current!.value;
                let passwordValue = inputPassword.current!.value;
                let rePasswordValue = inputRepassword.current!.value;
                let firstName = inputFirstName.current!.value;
                let lastName = inputLastName.current!.value;
                let admin = inputAdmin.current!.value;

                let setAdmin = "";

                if (admin === "Yes") {
                  setAdmin = "true";
                } else {
                  setAdmin = "false";
                }

                const formData = new FormData();

                const link = new APILink();

                if (
                  passwordValue === rePasswordValue &&
                  (passwordValue !== "" || rePasswordValue !== "")
                ) {
                  const reqBody = {
                    email: emailValue,
                    password: passwordValue,
                    firstName: firstName,
                    lastName: lastName,
                    admin: setAdmin,
                  };

                  axios
                    .post(APILink.registerUser, reqBody)
                    .then((r) => {
                      if (r.status === 200) {
                        if (inputFoto.current?.files != null) {
                          formData.append(
                            "fotoProfil",
                            inputFoto.current?.files[0]
                          );

                          axios
                            .post(APILink.registerFotoProfil, formData, {
                              headers: {
                                "Content-Type": "multipart/form-data",
                                email: emailValue,
                              },
                            })
                            .then((r) => {
                              alertService(null, "Success Adding New User");
                            })
                            .catch((e) => {
                              alertService(
                                "error",
                                `Failed to add new user. Error ${e.data.message}`
                              );
                            });
                        }
                      }
                    })
                    .catch((e) => {
                      alertService(
                        "error",
                        `Failed to add new user. Error ${e.data.message}`
                      );
                    });
                } else if (passwordValue !== rePasswordValue) {
                  alertService("error", "Password Not Same");
                }
              }}
            >
              Register New User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
