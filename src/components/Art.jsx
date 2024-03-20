import avator from "../assets/avator.png"
import bg2 from "../assets/bg2.png";

function Art() {
  return (
    <div className="relative">
      {/* Image div */}
      <div className="z-10 relative border-4 ">
        <img  src={bg2} alt="" className="block w-full h-[600px] md:h-[800px]" />
        {/* Centered text div */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white m-6 rounded-3xl p-5 flex-col justify-center  items-center md:w-[1030px] h-[400px]">
            <div className="flex-col justify-center items-center h-[400px]">
                <div className="text-black text-center font-bold text-3xl mb-6 pt-12 md:text-5xl">Art and kindness are our tools of trade</div>
                <div className="md:flex md:justify-center md:items-center md:text-2xl">
                <div className="text-black text-center mb-5 md:w-[800px] md:flex md:justify-center md:items-center">Humankind is a creative force developing relatable characters and epic stories for a global audience across various formats powered by decentralization.</div>
                </div>
                <div className="flex-row items-center justify-center md:flex md:justify-center md:items-center md:gap-5">
                    <div className="md:flex-col md:justify-center md:items-center"> <button className="text-black bg-white rounded-3xl py-2 text-center cursor-pointer border-black border-4 px-24  hover:border hover:white-black hover:border-b-4 hover:border-l-4 md:py-4 md:px-7 mb-4 md:mb-0  ">Learn more</button></div>
            </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
