import Image from "next/image";
import discussion from "../assets/login/discussion.png";
import FormLogin from "./components/login/FormLogin";

export default async function Home() {
  return (
    <>
      <main className="container mx-auto flex h-screen justify-center items-center">
        <div
          className=" bg-primary w-5/6 md:w-[500px] h-[600px] rounded-3xl flex flex-col justify-center items-center"
          id="tempat-form-login"
        >
          <FormLogin />
        </div>

        <div className="hidden lg:flex">
          <Image
            src={discussion}
            alt="gambar-diskusi"
            width={700}
            height={300}
            priority={true}
          />
        </div>
      </main>
    </>
  );
}
