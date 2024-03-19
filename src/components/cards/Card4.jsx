function Card4(){
    return(
        <div className="border-black border-solid border-[6px] rounded-2xl m-7 p-4 md:flex-row justify-center items-center flex flex-col gap-4 h-[680px] md:mx-[250px] md:h-[510px] mb-10"> 
            <div className="w-[300px] md:w-[2000px]"><img src="src/assets/c4.gif" alt="" /></div>
            <div>
                <div className="text-bold text-center mb-3 text-lg md:text-3xl md:text-start"><strong>Grab your lunchbox. It will be a long journey.</strong></div>
                <div className="text-[15px] mb-4 md:text-[20px]">We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!

                Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.</div>
                <div className="flex flex-col gap-2 justify-center items-center h-[100px] md:flex-row md:justify-start md:text-xl"> 
                    <div ><button className=" bg-black text-white rounded-3xl py-3 text-center cursor-pointer px-4 hover:bg-red-600 hover:border hover:border-black hover:border-b-4 hover:border-l-4 md:py-4 md:px-7">🌊 Get one from Opensea</button></div>
                    <div> <button className=" bg-white rounded-3xl py-2 text-center cursor-pointer border-black border-4 px-14  hover:border hover:border-black hover:border-b-4 hover:border-l-4 md:py-4 md:px-7">🌮 Learn more</button></div>
                </div>
            </div>
        </div>
    )
}

export default Card4;