import d from "../assets/design.webp"

function Design() {
  return (
    <div className="py-16 px-8 md:px-64 flex-col justify-center items-center">
    <div className="mb-6 "><img className="md:w-[1000px]" src={d} alt="" /></div>
    <div className="mb-6 text-3xl font-bold md:text-5xl">Designing a universe</div>
    <div className="mb-7 md:text-xl">We’re building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</div>
    <div className="md:flex-col md:justify-center md:items-center"> <button className="text-black bg-white rounded-3xl py-2 text-center cursor-pointer border-black border-4 px-6 font-semibold  hover:border hover:white-black hover:border-b-4 hover:border-l-4 md:py-2 md:px-7 mb-4 md:mb-0  ">Discover Art</button></div>
    </div>
  );
}

export default Design;
