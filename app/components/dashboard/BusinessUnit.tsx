"use client";

import Link from "next/link";

const BusinessUnit = (props: any) => {
  return (
    <>
      <Link href={`/businessunit-detail/${props.perusahaan}`}>
        <div className="flex justify-center">
          <div className=" w-[400px] flex flex-col items-center justify-center bg-base-100 p-10 shadow-md rounded-lg  border-2 border-transparent hover:border-primary">
            <div>
              <span className="font-bold text-lg">{props.perusahaan}</span>

              <div>
                <div className="flex flex-col mt-5 gap-4">
                  <span>Revenue : {props.revenue}</span>
                  <span>Gross Profit : {props.gross}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BusinessUnit;
