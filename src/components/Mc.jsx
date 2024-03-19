import bg from "../assets/bg.png"

function Mc(){
    return(
        <div className="mt-16">
            <div className=" md:p-8"> <img src={bg} alt="" /></div>
            <div className="text-center font-Lora text-[18px] md:text-3xl">Creating a magical world for the kid in all of us.</div>
            <div className=" cursor-pointer flex items-center justify-center gap-6 mt-5 h-16 md:mt-7 md:mb-40">
                <div className=" border-black border-4 px-3 py-2 rounded-3xl text-semibold hover:border-t hover:border-r hover:border-7 hover:border-black md:text-xl md:py-4 md:px-9 text-semibold">🎁 Get a Lunchbox</div>
                <div className=" cursor-pointer  bg-black text-white rounded-3xl text-semibold py-3 px-6 hover:bg-red-600 hover:border-4 hover:border-black hover:border-t hover:border-r hover:border-7 md:text-xl md:py-5 md:px-9" >⚔️ Play Now!</div>
            </div>
        </div>
    )
}

export default Mc;