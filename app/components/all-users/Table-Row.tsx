"use client";

import APILink from "@/app/entities/APILink";
import alertService from "@/app/services/alertService";
import fileToBlob from "@/app/services/fileToBlob";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const TableRow = (props: any) => {
  useEffect(() => {
    if (props.foto != null) {
      let elementFotoBaru = document.getElementById(
        `foto-profil-baru-${props.email}`
      );

      let logoProfil = document.getElementById(`logo-profil-${props.email}`);

      elementFotoBaru?.classList.remove("hidden");
      logoProfil?.classList.add("hidden");
    }

    const inputAdmin: any = document.getElementById(
      `inputAdmin-${props.email}`
    );
    const inputFirstName: any = document.getElementById(
      `inputFirstName-${props.email}`
    );
    const inputLastName: any = document.getElementById(
      `inputLastName-${props.email}`
    );

    if (props.admin === "true") {
      inputAdmin.value = "Yes";
    }
    inputFirstName.value = props.firstName;
    inputLastName.value = props.lastName;
  }, [props]);
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src={`data:image/png;base64,${props.foto}`}
                  alt="foto-profil"
                  width={200}
                  height={200}
                  unoptimized={true}
                  className=" border rounded-full border-primary border-solid border-s-1"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{`${props.firstName} ${props.lastName}`}</div>
              <div className="text-sm opacity-50">{props.email}</div>
            </div>
          </div>
        </td>
        <td>{props.admin}</td>
        <th>
          <div className="flex gap-3">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-sm btn-outline btn-error "
              id={`tombol-delete `}
              onClick={() => {
                const modal: any = document.getElementById(
                  `del-${props.email}`
                );
                modal!.showModal();
              }}
            >
              <AiFillDelete size={20} />
            </button>
            <dialog
              id={`del-${props.email}`}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Delete User</h3>
                <p className="py-4 font-normal">
                  Are you sure to remove user {props.email}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn btn-success btn-sm hover:bg-successHover"
                      onClick={() => {
                        axios
                          .delete(APILink.removeUser, {
                            headers: {
                              email: props.email,
                            },
                          })
                          .then((r) => {
                            if (r.status === 200) {
                              alertService(null, "Successfully deleted user");
                              setTimeout(() => {
                                window.location.reload();
                              }, 2000);
                            }
                          })
                          .catch();
                      }}
                    >
                      Yes
                    </button>
                    <button className="btn btn-sm ml-4">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-sm btn-outline"
              onClick={() => {
                const editModal: any = document.getElementById(
                  `edit-${props.email}`
                );

                editModal.showModal();
              }}
            >
              <AiFillEdit size={20} />
            </button>
            <dialog id={`edit-${props.email}`} className="z-10 modal ">
              <div className="modal-box w-11/12 max-w-none">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className=" flex">
                  <div className="container mx-auto mt-[85px] px-5 flex flex-col items-center w-full justify-center">
                    <div className="flex flex-col md:flex-row w-full md:justify-center">
                      <div className=" flex flex-col justify-center items-center pt-10 pb-8 px-5 card bg-base-300 rounded-box md:w-1/2">
                        <div className="avatar mb-5 md:mb-10">
                          <div className="w-28 sm:w-36 md:w-40 lg:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <div className="w-full h-full flex justify-center items-center">
                              <Image
                                id={`foto-profil-baru-${props.email}`}
                                src={`data:image/png;base64,${props.foto}`}
                                alt="foto-profil"
                                width={100}
                                height={100}
                                unoptimized={true}
                                className="hidden"
                              ></Image>
                              <BsFillPersonFill
                                id={`logo-profil-${props.email}`}
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
                            id={`inputFoto-${props.email}`}
                            max={5000}
                            accept=".png, .jpg, .jpeg"
                            className="file-input file-input-bordered w-full"
                            onChange={() => {
                              let inputFoto: any = document.getElementById(
                                `inputFoto-${props.email}`
                              );
                              let elementFotoBaru: any =
                                document.getElementById(
                                  `foto-profil-baru-${props.email}`
                                );

                              let logoProfil = document.getElementById(
                                `logo-profil-${props.email}`
                              );

                              elementFotoBaru.src = fileToBlob(inputFoto);
                              elementFotoBaru?.classList.remove("hidden");
                              logoProfil?.classList.add("hidden");
                            }}
                          />
                        </div>
                      </div>

                      <div className="divider md:divider-horizontal"></div>

                      <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
                        <div className="flex flex-col ">
                          <h1 className=" text-primary font-semibold mb-2">
                            Password
                          </h1>
                          <input
                            id={`inputPassword-${props.email}`}
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <span className="text-sm text-error ml-2 mt-1">
                          Leave it blank if you don&apos;t want to change it
                        </span>

                        <div className="flex flex-col mt-5">
                          <h1 className=" text-primary font-semibold mb-2">
                            Re-Enter Password
                          </h1>
                          <input
                            id={`inputRePass-${props.email}`}
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <span className="text-sm text-error ml-2 mt-1">
                          Leave it blank if you don&apos;t want to change it
                        </span>

                        <div className="flex flex-col mt-5">
                          <h1 className=" text-primary font-semibold mb-2">
                            First Name
                          </h1>
                          <input
                            id={`inputFirstName-${props.email}`}
                            type="text"
                            placeholder={"Type here"}
                            className="input input-bordered w-full"
                          />
                        </div>

                        <div className="flex flex-col mt-5">
                          <h1 className=" text-primary font-semibold mb-2">
                            Last Name
                          </h1>
                          <input
                            id={`inputLastName-${props.email}`}
                            type="text"
                            placeholder={"Type here"}
                            className="input input-bordered w-full"
                          />
                        </div>

                        <div className="flex flex-col mt-5">
                          <h1 className=" text-primary font-semibold mb-2">
                            Admin
                          </h1>
                          <select
                            id={`inputAdmin-${props.email}`}
                            className="select select-bordered w-full max-w-xs text-lg"
                          >
                            <option value={"selected"}>No</option>
                            <option>Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-5 justify-center mb-16">
                      <form method="dialog">
                        <button
                          className="btn btn-primary btn-wide"
                          onClick={() => {
                            const inputFoto: any = document.getElementById(
                              `inputFoto-${props.email}`
                            );
                            const inputPassword: any = document.getElementById(
                              `inputPassword-${props.email}`
                            );
                            const inputRePass: any = document.getElementById(
                              `inputRePass-${props.email}`
                            );
                            const inputFirstName: any = document.getElementById(
                              `inputFirstName-${props.email}`
                            );
                            const inputLastName: any = document.getElementById(
                              `inputLastName-${props.email}`
                            );
                            const inputAdmin: any = document.getElementById(
                              `inputAdmin-${props.email}`
                            );

                            const formData = new FormData();

                            let isAdmin = false;

                            if (inputAdmin.value === "Yes") {
                              isAdmin = true;
                            }

                            if (
                              inputPassword.value === inputRePass.value &&
                              (inputPassword.value !== "" ||
                                inputRePass.value !== "")
                            ) {
                              const reqBody = {
                                password: inputPassword.value,
                                firstName: inputFirstName.value,
                                lastName: inputLastName.value,
                                admin: isAdmin,
                              };

                              axios
                                .post(APILink.editProfileByEmail, reqBody, {
                                  params: {
                                    email: props.email,
                                  },
                                })
                                .then((r) => {
                                  if (r.status === 200) {
                                    if (inputFoto.current?.files != null) {
                                      formData.append(
                                        "fotoProfil",
                                        inputFoto.current?.files[0]
                                      );

                                      axios
                                        .post(
                                          APILink.registerFotoProfil,
                                          formData,
                                          {
                                            headers: {
                                              "Content-Type":
                                                "multipart/form-data",
                                              email: props.email,
                                            },
                                          }
                                        )
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
                            } else if (
                              inputPassword.value === "" ||
                              inputRePass.value === ""
                            ) {
                              const reqBody = {
                                firstName: inputFirstName.value,
                                lastName: inputLastName.value,
                                admin: isAdmin,
                              };
                              axios
                                .post(APILink.editProfileByEmail, reqBody, {
                                  params: {
                                    email: props.email,
                                  },
                                })
                                .then((r) => {
                                  if (r.status === 200) {
                                    if (inputFoto.current?.files != null) {
                                      formData.append(
                                        "fotoProfil",
                                        inputFoto.current?.files[0]
                                      );

                                      axios
                                        .post(
                                          APILink.registerFotoProfil,
                                          formData,
                                          {
                                            headers: {
                                              "Content-Type":
                                                "multipart/form-data",
                                              email: props.email,
                                            },
                                          }
                                        )
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
