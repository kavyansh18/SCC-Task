import c from "../assets/chr.png"
import c1 from "../assets/ch1.png"
import c2 from "../assets/ch2.png"

function Human() {
  return (
    <>
    <div className="bg-black text-white font-extrabold md:text-9xl text-center m-0 p-0 w-full tracking-wider text-6xl">Stay Human</div>
    <div className="relative">
      {/* Image div */}
      <div className="z-10 relative md:overflow-hidden md:h-[700px] bg-black ">
        <img  src={c} alt="" className="block w-full h-[1000px] md:h-auto" />
        {/* Centered text div */}
        <div className="absolute inset-0 h-[100px] w-[270px] ml-12 md:ml-0 mt-48 md:flex md:h-[350px] md:w-full md:px-56 md:justify-center gap-10 ">
          <div className="bg-white text-center mb-8 p-5 rounded-3xl boder border-black border-8 hover:bg-yellow-500 hover:border hover:white-black hover:border-b-[10px] hover:border-l-[10px]">
            <div className="pl-12 mb-5 md:pl-36"><img className="w-28 md:w-32" src={c1} alt="" /></div>
            <div className="font-bold mb-3 text-2xl md:text-4xl">Humankind Studios</div>
            <div className="md:text-xl font-semibold">A creative studio designing the stories, world, and brand of Humankind.</div>
          </div>
          <div className="bg-white text-center mb-8 p-5 rounded-3xl boder border-black border-8 hover:bg-yellow-400 hover:border hover:white-black hover:border-b-[10px] hover:border-l-[10px]">
            <div className="pl-12 mb-5 md:pl-36"><img className="w-28 md:w-32" src={c2} alt="" /></div>
            <div className="font-bold mb-3 text-2xl md:text-4xl">Humankind Fund</div>
            <div className="md:text-xl font-semibold"> fund that helps artists conceive their creations free off economic dependencies.</div>
          </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Human;
