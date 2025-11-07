import CEO from "@/assets/gif/ceo-gif.gif";

export default function AboutUs() {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-gradient-to-b from-white via-gray-300 to-white">
      <div
        className="relative flex py-10 mb-20 h-[50vh] md:h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${CEO.src})` }}
      >
        <div className="flex justify-center w-full">
          <h3 className="text-[#82A67D] font-bold text-[30px] md:text-[50px] lg:[75px]">
            What We Do
          </h3>
        </div>
      </div>
    </div>
  );
}
