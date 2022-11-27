import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
const Hero = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen grid md:grid-cols-12 gap-5 relative">
      <h1 className="text-5xl md:text-7xl font-bold text-right md:col-start-3 md:col-span-5 text-clr order-1">
        React Conference
      </h1>

      <Image
        alt="banner two"
        src="/images/banner_2.png"
        width={1000000}
        height={1000000}
        className="md:col-start-1 md:col-span-4 w-1/2 md:w-96 order-4 md:order-2"
      />

      <div className="md:col-start-5 md:col-end-8 md:col-span-1 flex flex-col gap-5 order-2 md:order-3">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          veniam ipsa, natus quisquam architecto optio, reiciendis recusandae
          culpa, iusto necessita
        </p>
        <div className="">
          <button className="bg-[#FFC93E] px-6 md:px-14 py-3 rounded-full font-semibold flex items-center gap-4 mx-auto md:mx-0 text-sm">
            Buy Tickets <BsArrowUpRight />
          </button>
        </div>
      </div>

      <Image
        priority={true}
        alt="banner one"
        src="/images/banner_1.png"
        width={1000000}
        height={1000000}
        className="md:col-start-8 md:col-end-12 w-full md:w-96 md:absolute md:top-32 md:ml-5 order-3 md:order-4"
      />
      <p
        onClick={handleScrollDown}
        className="hidden cursor-pointer order-5 col-start-6 -rotate-90 md:absolute bottom-32 md:flex items-center gap-4"
      >
        <FiArrowLeft /> Scroll Down
      </p>
    </div>
  );
};

export default Hero;
