import logo from "../assets/logo.ico"
import menu from "../assets/menu.svg"
function Navbaar(){
    return(
        <div className=" bg-white fixed top-0 w-full z-10 py-2 px-2 flex justify-between items-center z-50">
            <div className="flex">
                <div><img className="w-12 h-8 pr-0" src={logo} alt="" /></div>
                <div className="font-[800] text-[20px] font-TT Commons Pro sm:bg-red-600">humankind</div>
            </div>
            <div className="hidden md:pr-6 md:flex md:gap-7 font-TT Commons Pro md:font-[700] md:text-[15px]">
                <div className="flex justify-between items-center hover:text-gray-500 cursor-pointer">Wrestle</div>
                <div className="flex justify-between items-center hover:text-gray-500 cursor-pointer">Collectibles</div>
                <div className="flex justify-between items-center hover:text-gray-500 cursor-pointer">Shop</div>
                <div className="flex justify-between items-center hover:text-gray-500 cursor-pointer">Community</div>
                <div className="flex justify-between items-center hover:text-gray-500 cursor-pointer">Subscribe</div>
                <div className="text-white bg-black rounded-3xl md:px-6 py-2 hover:bg-red-600 border-[3 px] border-black md:pl-5 cursor-pointer">Play Now! 💀</div>
            </div>
            <div className="md:hidden pr-4 cursor-pointer"><img src={menu} alt="" /></div>
        </div>
    )
}

export default Navbaar;