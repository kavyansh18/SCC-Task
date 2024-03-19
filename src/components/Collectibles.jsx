import avator from "../assets/avator.png"
import bg2 from "../assets/bg2.png";

function Collectibles() {
  return (
    <div className="relative">
      {/* Image div */}
      <div className="z-10 relative border-4 ">
        <img  src={bg2} alt="" className="block w-full h-[600px] md:h-[800px]" />
        {/* Centered text div */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black m-6 rounded-3xl p-5 flex-col justify-center  items-center md:w-[1030px]">
            <div className="flex justify-center items-center"><img className="mb-7 " src={avator} alt="" /></div>
            <div className="text-white text-center font-bold text-3xl mb-6">Humankind Collectibles</div>
            <div className="md:flex md:justify-center md:items-center md:text-2xl">
            <div className="text-white text-center mb-5 md:w-[800px] md:flex md:justify-center md:items-center">Back in 2022, we launched a set of diverse and unique art collectibles featuring the Humankind species, the most prevalent in The Land of Kinds.</div>
            </div>
            <div className="flex-row items-center justify-center md:flex md:justify-center md:items-center md:gap-5">
                <div className="md:flex-col md:justify-center md:items-center"> <button className="text-white bg-black rounded-3xl py-2 text-center cursor-pointer border-white border-4 px-24  hover:border hover:white-black hover:border-b-4 hover:border-l-4 md:py-4 md:px-7 mb-4 md:mb-0  ">Learn more</button></div>
                <div className="md:flex-col md:justify-center md:items-center"> <button className=" bg-white rounded-3xl py-3 text-center cursor-pointer border-black border-4 px-14  hover:border hover:border-black hover:border-b-4 hover:border-l-4 md:py-4 md:px-7">Get one from Opensea</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collectibles;
