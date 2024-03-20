import tree from "../assets/tree.webp"

function Tree() {
  return (
    <div className="md:flex justify-center items-center">
       <div><img src={tree} alt="" /></div>
       <div className="md:flex-col mr-24">
       <div className="text-3xl font-extrabold m-5">Building together</div>
       <div className="font-semibold m-5 text-lg">Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</div>
       <div className="m-5"><button className="text-black bg-white rounded-3xl py-2 text-center cursor-pointer border-black border-4 px-6 font-semibold  hover:border hover:white-black hover:border-b-4 hover:border-l-4 md:py-2 md:px-7 mb-4 md:mb-0  ">Explore Careers</button></div> 
       </div>
    </div>
  );
}

export default Tree;
