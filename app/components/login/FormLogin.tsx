"use client";

import LoginService from "@/app/services/LoginService";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const FormLogin = function () {
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/islogin")
      .then((r) => {
        if (r.status === 200) {
          router.push("/dashboard");
        }
      })
      .catch((e) => {});
  }, [router]);

  const inputEmail = useRef<HTMLInputElement | null>(null);
  const inputPw = useRef<HTMLInputElement | null>(null);
  const remember = useRef<HTMLInputElement>(null);
  return (
    <>
      <form className="w-full flex flex-col justify-center items-center ">
        <div className="w-4/5">
          <label
            htmlFor="input-email"
            className="self-start text-lg font-bold text-base-100"
          >
            Email
          </label>{" "}
          <br></br>
          <input
            ref={inputEmail}
            type="email"
            id="input-email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="w-4/5 mt-12">
          <label
            htmlFor="input-password"
            className="self-start text-lg font-bold text-base-100"
          >
            Password
          </label>
          <input
            ref={inputPw}
            type="password"
            id="input-password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </form>

      <div className="form-control w-4/5">
        <label className="label">
          <span className="label-text-alt">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  ref={remember}
                  defaultChecked={true}
                  id="input-rememberme"
                  className="checkbox bg-base-100"
                />
                <span className="label-text ml-2 text-base-100">
                  Remember me
                </span>
              </label>
            </div>
          </span>
          {/* <span className="label-text-alt font-semibold text-base-100 mt-2">
                Forgot Password?
              </span> */}
        </label>
        <div className="mt-10">
          <button
            onClick={() => {
              LoginService(
                inputEmail.current?.value,
                inputPw.current?.value,
                remember.current?.checked,
                router
              );
            }}
            className="bg-base-100 rounded-lg w-full h-20 text-primary font-bold"
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
