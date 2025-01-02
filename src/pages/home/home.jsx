export default function Home(){

    return(
        <>
            <div 
                id="inicio" 
                className='relative
                    w-full h-[50dvh] bg-black/50 flex flex-col justify-start items-start text-amber-100
                    md:w-[100vw] md:h-[90vh] md:bg-black/40 md:justify-center
                '>
                    
                    <img className='hidden md:block w-full h-full absolute -z-10' src="/banner02.jpg" alt=""/>
                    <div className="md:hidden w-full h-full md:w-[100vw] md:h-full flex justify-center absolute -z-10">
                        <img className='md:hidden max-w-full h-full' src="/banner02.jpg" alt=""/>
                    </div>
                    <div className="absolute w-full md:top-1/2 py-5 bottom-0 md:w-1/2 md:bottom-1/2 md:space-y-5">
                        <span className='w-full md:w-[50rem] h-auto py-2.5 md:py-5 text-sm md:text-5xl font-bold'>O seu refúgio de aroma e sabor, todos os dias.</span>
                        <span className='w-full md:w-[50rem] h-auto flex justify-center text-[10px] md:text-xl italic'>Entre, sinta o clima, e encontre sua pausa perfeita para relaxar.</span>
                    </div>
            </div>
            <div id="slider" className="w-full h-[5dvh] md:h-[10vh] overflow-hidden relative bg-[#4B1F0E]">
                <div className="flex w-[200%] h-[5dvh] md:h-[10vh] animate-scroll">
                {Array(10)
                    .fill(null)
                    .map((_, index) => (
                    <span
                        key={index}
                        className="h-full flex justify-center items-center px-14 md:px-28 text-[#FEF3C7] text-xl md:text-3xl font-bold whitespace-nowrap"
                    >
                        SOBREMESAS 10% OFF
                    </span>
                    ))}
                </div>
            </div>
        </>
    )
}