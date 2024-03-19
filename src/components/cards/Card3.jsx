import cc from "../../assets/c3.webp"
function Card3(){
    return(
        <div className= "border-black border-solid border-[6px] rounded-2xl m-7 p-4 md:flex-row justify-center items-center flex flex-col gap-4 h-[680px] md:mx-[250px] md:h-[510px] mb-10"> 
            <div className="w-[300px] md:w-[2000px]"><img src={cc} alt="" /></div>
            <div>
                <div className="text-bold text-center mb-3 text-lg md:text-3xl md:text-start"><strong>
Bring your ideas to life with the Humankind Fund</strong></div>
                <div className="text-[15px] mb-4 md:text-[20px]">The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.</div>
                <div className="flex flex-col gap-2 justify-center items-center h-[100px] md:flex-row md:justify-start md:text-xl"> 
                    
                    <div > <button className=" bg-yellow-400 rounded-3xl py-3 text-center cursor-pointer px-3 border-2 border-yellow-800 hover:border hover:border-yellow-800 hover:border-b-4 hover:border-l-4">❤️ Learn More</button></div>
                </div>
            </div>
        </div>
    )
}

export default Card3;