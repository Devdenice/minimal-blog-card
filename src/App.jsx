import cactus from "../public/cactus_img.jpg";

function App() {
  return (
    <>
      <section className=" w-full h-[100vh] flex justify-center items-center">
        <div className="bg-[#FFFFFF] shadow w-[23rem] rounded-xl p-3.5 relative">
          <div className="">
            <img
              src={cactus}
              width={150}
              height={150}
              alt="cactus image"
              className="rounded-lg bg-contain w-full"
            />
          </div>
          <div className="my-3.5 rounded-full bg-[#E6D6FC] px-1 py-1 w-16 text-center font-semibold text-[#883AE1]">
            <h1 className="text-[10px]">Design</h1>
          </div>
          <div className="mb-[0.375rem]">
            <h2 className="text-[1.125rem] text-[#20293A] font-semibold">
              Embracing Minimalism
            </h2>
          </div>
          <div>
            <p className="text-[14px] text-[#6C727F]">
              From minimalist sculptures to minimalist paintings, this blog will
              inspire you to appreciate the beauty that lies in simplicity.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-12 h-px bg-[#E5EAF0]"></div>

          <div className="mt-[1.25rem] py-4 flex justify-items-start relative">
            <h3 className="text-[12px] absolute left-0 bottom-0  text-[#6C727F]">
              Annie Spratt
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
