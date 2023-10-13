"use client";

import IsiTabelBusiness from "@/app/components/businessunit-detail-component/IsiTabelBusinessDetail";
import Navbar from "@/app/components/navbar/Navbar";
import APILink from "@/app/entities/APILink";
import axios from "axios";
import { useEffect, useState } from "react";

const BusinessUnitDetail = ({ params }: { params: { company: string } }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    console.log(params.company);

    axios
      .get(APILink.getAllByBusinessUnit, {
        params: {
          businessUnit: params.company,
        },
      })
      .then((r) => {
        setAllData(r.data.data);
      })
      .catch();
  }, [params]);

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortData = (key: any) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    // Sort your data array here based on the 'key' and 'direction' values
    const sortedData: any = [...allData].sort((a, b) => {
      if (direction === "ascending") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setAllData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="flex justify-center w-full">
          <h1 className="font-bold text-2xl pt-28">{params.company}</h1>
        </div>
        <h1 className="text-lg">Account</h1>

        <div className="container mx-auto mt-10">
          <div className="overflow-x-auto h-[600px] border border-solid rounded-lg border-base-200 mb-20">
            <table className="table table-pin-rows">
              {/* head */}
              <thead>
                <tr className="">
                  <th className="">No</th>
                  <th onClick={() => sortData("account")}>Account</th>
                  <th>Revenue</th>
                  <th>GP</th>
                  <th>Status</th>
                  <th>Uploader</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allData.map((business: any, index) => {
                  return (
                    <IsiTabelBusiness
                      key={index}
                      no={index + 1}
                      account={business.account}
                      revenue={formatRupiah(business.totalRevenue)}
                      gp={formatRupiah(business.totalGrossProfit)}
                      status={business.pipelineStatus}
                      userUploader={business.userUploader.email}
                      uploadTime={business.uploadTime}
                    />
                  );
                })}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessUnitDetail;
