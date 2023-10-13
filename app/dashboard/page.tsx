import Pipeline from "../components/dashboard/Pipeline";
import TempatBusinessUnit from "../components/dashboard/TempatBusinessUnit";
import Navbar from "../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div>
        <section className="bg-bgUtama lg:h-screen ">
          <div className="bg-primary w-full h-[350px] absolute top-0">
            <div className="container mx-auto flex justify-between  ">
              <h1 className="text-base-100 text-[35px] pt-32 self-start">
                <strong>Revenue Achievement</strong>
              </h1>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs self-end mt-32"
              />
            </div>
          </div>

          <div className="container mx-auto ">
            <h1 className="text-base-100 text-[30px]">
              {/* <strong>Revenue Achievement</strong> */}
            </h1>
            <div className="container mx-auto pt-56">
              <TempatBusinessUnit />
            </div>
            <div className="pt-11 ">
              <div className="container mx-auto">
                <h1 className=" text-[30px] pt-20">
                  <strong>Pipeline Summary based on status</strong>
                </h1>
              </div>
              <Pipeline />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
