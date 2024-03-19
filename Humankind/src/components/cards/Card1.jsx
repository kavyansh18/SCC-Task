function Card1(){
    return(
        <div className=" border-black border-solid border-[6px] rounded-2xl m-7 p-4 flex justify-center items-center gap-4 h-[400px]"> 
            <div className="w-[800px]"><img src="src/assets/c1.png" alt="" /></div>
            <div>
                <div className="text-bold text-center mb-3 text-lg"><strong>Wrestle. Wrestle. Wrestle!</strong></div>
                <div className="text-[15px] mb-4 ">Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.</div>
                <div className="flex flex-col gap-2 justify-center items-center h-[100px]">
                    <div ><button className=" bg-black text-white rounded-3xl py-3 text-center cursor-pointer px-4 hover:bg-red-600 hover:border hover:border-black hover:border-b-4 hover:border-l-4">🤓 Learn More</button></div>
                    <div > <button className=" bg-yellow-400 rounded-3xl py-3 text-center cursor-pointer px-3 border-2 border-yellow-800 hover:border hover:border-yellow-800 hover:border-b-4 hover:border-l-4">🤼 Wrestle Now!</button></div>
                </div>
            </div>
        </div>
    )
}

export default Card1;