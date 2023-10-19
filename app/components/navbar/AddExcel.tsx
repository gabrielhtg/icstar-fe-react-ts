"use client";

import APILink from "@/app/entities/APILink";
import axios from "axios";
import { useEffect } from "react";

const AddExcel = () => {
  useEffect(() => {
    axios
      .get(APILink.isAdmin)
      .then((r) => {})
      .catch(() => {
        const inputExcel = document.getElementById("addExcel");

        inputExcel?.classList.add("hidden");
      });
  });
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <li id="addExcel" className="">
        <button
          className=""
          onClick={() => {
            const modal: any = document.getElementById("my_modal_3");
            modal.showModal();
          }}
        >
          Add Data From Excel File
        </button>
      </li>
    </>
  );
};

export default AddExcel;
