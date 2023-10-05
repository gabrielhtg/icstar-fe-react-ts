import Navbar from "../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div>
        <section className="bg-bgUtama h-screen flex flex-col flex-wrap items-center">
          <div className="bg-primary w-full h-[300px] absolute"></div>

          <div className="flex flex-col items-center justify-center h-screen z-[5] w-fit">
            <h1 className="text-base-100 text-[30px] self-start">
              <strong>Revenue Achievement</strong>
            </h1>

            <div className="w-full flex flex-wrap justify-center gap-20 mt-[40px]">
              <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 ">
                <div>PT. Solutif</div>
              </div>

              <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 g">
                <div>PT. Solutif</div>
              </div>

              <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 ">
                <div>PT. Solutif</div>
              </div>
            </div>
            <div className="pt-11 ">
              <div className="container mx-auto">
                <h1 className=" text-[30px] pt-20">
                  <strong>Pipeline Summary based on status</strong>
                </h1>
              </div>

              <div className="w-full flex flex-wrap justify-center gap-20 mt-[40px]">
                <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 ">
                  <div>PT. Solutif</div>
                </div>

                <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 ">
                  <div>PT. Solutif</div>
                </div>

                <div className="flex flex-col items-center justify-center bg-base-100 w-[300px] h-[200px] rounded-lg border-primary hover:border-2 ">
                  <div>PT. Solutif</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
