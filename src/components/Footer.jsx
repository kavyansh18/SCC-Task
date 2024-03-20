import girl from "../assets/girl.webp"
import d from "../assets/discord.svg"
import t from "../assets/twitter.svg"
import i from "../assets/insta.svg"
import l from "../assets/linkedin.svg"
import o from "../assets/opensea.svg"
function Footer() {
  return (
    <div className="flex-col justify-center items-center p-8 md:flex-row">
        <div className="md:flex md:justify-center md:items-center"><img className="w-[600px]" src={girl} alt="" /></div>
        <div className="my-10 ">
            <div className="text-center text-5xl font-extrabold">humankind</div>
            <div className="text-center text-lg">stay human. be kind</div>
        </div>
        <div className="flex justify-center items-center gap-x-6 my-6">
            <div className="w-8"><a href="https://discord.com/invite/robotos" target="_blank"><img src={d} alt="" /></a></div>
            <div className="w-8"><a href="https://twitter.com/humankindart" target="_blank"><img src={t} alt="" /></a></div>
            <div className="w-8"><a href="https://www.instagram.com/humankind.art/" target="_blank"><img src={i} alt="" /></a></div>
            <div className="w-8"><a href="https://www.linkedin.com/company/humankindart/" target="_blank"><img src={l} alt="" /></a></div>
            <div className="w-8"><a href="https://opensea.io/collection/humankind-lunchboxes" target="_blank"><img src={o} alt="" /></a></div>
        </div>
        <div className="flex-col justify-center items-center ">
            <div className="md:flex md:justify-center md:items-center"><button className=" bg-black text-white rounded-3xl py-3 text-center cursor-pointer px-12 hover:bg-red-600 hover:border hover:border-black hover:border-b-4 hover:border-l-4 md:py-3 md:px-7 mb-5 mt-5 ml-12 md:ml-0 ">⚔️ Play Now!</button></div>
            <div  className="md:flex md:justify-center md:items-center"><button className="text-black bg-white rounded-3xl py-2 text-center cursor-pointer border-black border-4 px-6 font-semibold  hover:border hover:white-black hover:border-b-4 hover:border-l-4 md:py-2 md:px-7 mb-4 md:mb-0 ml-12 md:ml-0 ">👾 Join our Discord </button></div>
        </div>
        <div className="text-center mt-8 text-sm">Developed by <a className="text-red-500" href="https://github.com/kavyansh18">Kavyansh</a></div>
    </div>
  );
}

export default Footer;
