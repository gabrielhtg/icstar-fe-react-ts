"use client";

import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import fileToBlob from "../services/fileToBlob";
import axios from "axios";
import APILink from "../entities/APILink";
import alertService from "../services/alertService";

const EditProfile = () => {
  const [fotoProfil, setFotoProfil] = useState<any>();
  const inputPassword: React.RefObject<HTMLInputElement> = useRef(null);
  const inputRepassword: React.RefObject<HTMLInputElement> = useRef(null);
  const inputFirstName: React.RefObject<HTMLInputElement> = useRef(null);
  const inputLastName: React.RefObject<HTMLInputElement> = useRef(null);
  const inputFoto: React.RefObject<HTMLInputElement> = useRef(null);
  const profilePict: React.RefObject<HTMLImageElement> = useRef(null);

  useEffect(() => {
    axios.get(APILink.getUser).then((r) => {
      inputFirstName.current!.value = r.data.data.firstName;
      inputLastName.current!.value = r.data.data.lastName;
    });

    if (
      inputFoto.current?.files != null &&
      inputFoto.current.files[0] == null
    ) {
      axios.get(APILink.profilePict).then((r) => {
        if (r.data !== null) {
          setFotoProfil(APILink.profilePict);
          let logoProfil = document.querySelector("#logo-profil");
          profilePict.current?.classList.remove("hidden");
          logoProfil?.classList.add("hidden");
          console.log(fotoProfil);
        }
      });
    }
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
                    <Image
                      id="foto-profil-baru"
                      ref={profilePict}
                      src={fotoProfil}
                      alt="foto-profil"
                      width={100}
                      height={100}
                      unoptimized={true}
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
                    let inputFoto = document.querySelector("#input-foto");
                    let elementFotoBaru =
                      document.querySelector("#foto-profil-baru");

                    let logoProfil = document.querySelector("#logo-profil");

                    setFotoProfil(fileToBlob(inputFoto));

                    elementFotoBaru?.classList.remove("hidden");
                    logoProfil?.classList.add("hidden");
                  }}
                />
              </div>
            </div>

            <div className="divider md:divider-horizontal"></div>

            <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
              <div className="flex flex-col ">
                <h1 className=" text-primary font-semibold mb-2">Password</h1>
                <input
                  id="input-password"
                  ref={inputPassword}
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <span className="text-sm ml-2 mt-1">
                Leave it blank if you don&apos;t want to change it
              </span>

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
              <span className="text-sm ml-2 mt-1">
                Leave it blank if you don&apos;t want to change it
              </span>

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

              {/* <div className="flex flex-col mt-5">
                <h1 className=" text-primary font-semibold mb-2">Admin</h1>
                <select
                  id="input-admin"
                  ref={inputAdmin}
                  className="select select-bordered w-full max-w-xs text-lg"
                >
                  <option value={"selected"}>No</option>
                  <option>Yes</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-center mb-16">
            {/* <Link href={"/profile"}>
              <button className="btn btn-neutral btn-wide">Back</button>
            </Link> */}

            <button
              className="btn btn-primary btn-wide"
              onClick={() => {
                let passwordValue = inputPassword.current!.value;
                let rePasswordValue = inputRepassword.current!.value;
                let firstName = inputFirstName.current!.value;
                let lastName = inputLastName.current!.value;

                let userEmail: string;

                axios.get(APILink.getUser).then((r) => {
                  userEmail = r.data.data.email;
                });

                const formData = new FormData();

                if (
                  passwordValue === rePasswordValue &&
                  (passwordValue !== "" || rePasswordValue !== "")
                ) {
                  let url = APILink.editProfile;

                  const reqBody = {
                    password: passwordValue,
                    firstName: firstName,
                    lastName: lastName,
                  };

                  console.log(reqBody);

                  axios
                    .post(url, reqBody)
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
                                email: userEmail,
                              },
                            })
                            .then((r) => {})
                            .catch((e) => {});
                        }
                        alertService(null, "Profile Changed");
                        setTimeout(() => {
                          window.location.reload();
                        }, 2000);
                      }
                    })
                    .catch((e) => {});
                } else if (passwordValue === "" || rePasswordValue === "") {
                  const reqBody = {
                    firstName: firstName,
                    lastName: lastName,
                  };
                  axios
                    .post(APILink.editProfile, reqBody)
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
                                email: userEmail,
                              },
                            })
                            .then((r) => {})
                            .catch((e) => {});
                        }
                        alertService(null, "Profile Changed");
                        setTimeout(() => {
                          window.location.reload();
                        }, 2000);
                      }
                    })
                    .catch((e) => {});
                }
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
