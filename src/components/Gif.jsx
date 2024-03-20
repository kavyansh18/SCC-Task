import bg2 from "../assets/bg2.png";
import gif from "../assets/gif.gif"

function Gif() {
  return (
    <div className="relative">
      {/* Image div */}
      <div className="z-10 relative border-4 ">
        <img  src={bg2} alt="" className="block w-full h-[400px] md:h-[600px]" />
        {/* Centered text div */}
        <div className="absolute inset-0 flex justify-center items-center ">
          <img src={gif} alt="" />
          </div>
        </div>
      </div>
  );
}

export default Gif;
