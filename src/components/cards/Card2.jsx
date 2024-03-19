function Card2(){
    return(
        <div className=" border-black border-solid border-[6px] rounded-2xl m-7 p-4 md:flex-row justify-center items-center flex flex-col gap-4 h-[830px] md:mx-[250px] md:h-[510px] mb-10"> 
            <div className="w-[300px] md:w-[1600px]"><img className=" rounded-3xl" src="src/assets/c2.png" alt="" /></div>
            <div>
                <div className="text-bold text-center mb-3 text-2xl md:text-3xl md:text-start"><strong>Play Herokind!</strong></div>
                <div className="text-[15px] mb-4 md:text-[20px]">Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.

                Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.</div>
                <div className="flex flex-col gap-2 justify-center items-center h-[100px] md:flex-row md:justify-start md:text-xl"> 
                    <div > <button className=" bg-yellow-400 rounded-3xl py-3 text-center cursor-pointer px-3 border-2 border-yellow-800 hover:border hover:border-yellow-800 hover:border-b-4 hover:border-l-4">⚔️ Play Now!</button></div>
                </div>
            </div>
        </div>
    )
}

export default Card2;