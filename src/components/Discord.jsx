import kids from "../assets/2kid.webp"

function Discord() {
  return (
    <div className="px-6 md:px-96">
        <div className="mb-5"><img className="w-[500px] md:ml-44" src={kids} alt="" /></div>
        <div className="mb-5 text-3xl font-extrabold flex items-center justify-center">Join our adventure</div>
        <div className="mb-5 font-semibold flex items-center justify-center">Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We’re looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.</div>
        <div className="flex items-center justify-center"><button className=" bg-black text-white rounded-3xl py-3 text-center cursor-pointer px-4 hover:bg-red-600 hover:border hover:border-black hover:border-b-4 hover:border-l-4 md:py-3 md:px-7">👾 Join our Discord </button></div>
    </div>
  );
}

export default Discord;
