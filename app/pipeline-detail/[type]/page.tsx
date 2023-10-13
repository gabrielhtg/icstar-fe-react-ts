"use client";

import Navbar from "@/app/components/navbar/Navbar";
import IsiTabelPipeline from "@/app/components/pipeline-status-component/IsiTabel";
import APILink from "@/app/entities/APILink";
import axios from "axios";
import { useEffect, useState } from "react";

const PipelineDetail = ({ params }: { params: { type: string } }) => {
  const [allData, setAllData] = useState([]);
  const [warna, setWarna] = useState("");

  useEffect(() => {
    axios
      .get(APILink.getByPipelineStatus, {
        params: {
          pipelineStatus: params.type,
        },
      })
      .then((r) => {
        setAllData(r.data.data);
      })
      .catch();

    if (params.type === "hot") {
      setWarna("warnaHot");
    } else if (params.type === "warm") {
      setWarna("warnaWarm");
    } else {
      setWarna("warnaCold");
    }
  }, [params]);

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <h1 className="mt-32 text-lg">
          Pipeline status{" "}
          <span
            className={`font-bold text-war ${warna}`}
          >{`${params.type.toUpperCase()}`}</span>
        </h1>

        <div className="container mx-auto mt-20">
          <div className="overflow-x-auto border border-solid rounded-lg border-base-200 mb-20">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Business Unit</th>
                  <th>Account</th>
                  <th>Revenue</th>
                  <th>GP</th>
                  <th>Uploader</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allData.map((pipeline: any, index) => {
                  return (
                    <IsiTabelPipeline
                      key={index}
                      no={index + 1}
                      businessUnit={pipeline.businessUnit}
                      account={pipeline.account}
                      revenue={pipeline.totalRevenue}
                      gp={pipeline.totalGrossProfit}
                      userUploader={pipeline.userUploader.email}
                      uploadTime={pipeline.uploadTime}
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

export default PipelineDetail;
