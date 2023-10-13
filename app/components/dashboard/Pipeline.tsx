"use client";

import React, { useEffect, useState } from "react";
import APILink from "@/app/entities/APILink";
import axios from "axios";
import Link from "next/link";

const Pipeline = () => {
  const [hotRevenue, setHotRevenue] = useState(0);
  const [hotGrossProfit, setHotGrossProfit] = useState(0);
  const [warmRevenue, setWarmRevenue] = useState(0);
  const [warmGrossProfit, setWarmGrossProfit] = useState(0);
  const [coldRevenue, setColdRevenue] = useState(0);
  const [coldGrossProfit, setColdGrossProfit] = useState(0);

  useEffect(() => {
    axios.get(APILink.getHotRevenue).then((r) => {
      setHotRevenue(r.data.data);
    });

    axios.get(APILink.getHotGross).then((r) => {
      setHotGrossProfit(r.data.data);
    });

    axios.get(APILink.getWarmRevenue).then((r) => {
      setWarmRevenue(r.data.data);
    });

    axios.get(APILink.getWarmGross).then((r) => {
      setWarmGrossProfit(r.data.data);
    });

    axios.get(APILink.getColdRevenue).then((r) => {
      setColdRevenue(r.data.data);
    });

    axios.get(APILink.getColdGross).then((r) => {
      setColdGrossProfit(r.data.data);
    });
  }, []);

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <div className="w-full flex flex-wrap justify-center gap-20 mt-[40px]">
        <Link href={"/pipeline-detail/hot"}>
          <div className="flex flex-col items-center justify-center bg-base-100 p-10 shadow-lg rounded-lg border-primary border-2 border-transparent hover:border-primary">
            <div>
              <span className="font-bold text-warnaHot text-lg">HOT</span>

              <div>
                <div className="flex flex-col mt-5 gap-4">
                  <span>Revenue : {formatRupiah(hotRevenue)}</span>
                  <span>Gross Profit : {formatRupiah(hotGrossProfit)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/pipeline-detail/warm"}>
          <div className="flex flex-col items-center justify-center bg-base-100 p-10 shadow-lg rounded-lg border-2 border-transparent hover:border-primary ">
            <div>
              <span className="font-bold text-warnaWarm text-lg">WARM</span>

              <div>
                <div className="flex flex-col mt-5 gap-4">
                  <span>Revenue : {formatRupiah(warmRevenue)}</span>
                  <span>Gross Profit : {formatRupiah(warmGrossProfit)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/pipeline-detail/cold"}>
          <div className="flex flex-col items-center justify-center bg-base-100 p-10 shadow-lg rounded-lg border-primary hover:border-2 ">
            <div>
              <span className="font-bold text-warnaCold text-lg">COLD</span>

              <div>
                <div className="flex flex-col mt-5 gap-4">
                  <span>Revenue : {formatRupiah(coldRevenue)}</span>
                  <span>Gross Profit : {formatRupiah(coldGrossProfit)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Pipeline;
