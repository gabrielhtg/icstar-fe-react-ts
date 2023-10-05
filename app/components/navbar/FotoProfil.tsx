"use client";

import Image from "next/image";

const FotoProfil = () => {
  return (
    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
      <Image
        src={"/api/get-profile-pict"}
        width={200}
        height={200}
        alt="foto-profil"
        priority={true}
        unoptimized={true}
      />
    </div>
  );
};

export default FotoProfil;
