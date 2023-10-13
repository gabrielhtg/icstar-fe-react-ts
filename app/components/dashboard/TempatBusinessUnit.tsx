"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import BusinessUnit from "./BusinessUnit";
import APILink from "@/app/entities/APILink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BusinessUnitTest = () => {
  const [totalBusinessUnit, setTotal] = useState([]);

  useEffect(() => {
    axios
      .get(APILink.getTotalBusinessUnit)
      .then((r) => {
        setTotal(r.data.data);
      })
      .catch();
  }, []);

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {totalBusinessUnit.map((e: any) => {
          return (
            <BusinessUnit
              key={e.id}
              perusahaan={e.id}
              revenue={formatRupiah(e.totalRevenue)}
              gross={formatRupiah(e.totalGrossProfit)}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default BusinessUnitTest;
