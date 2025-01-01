export default function Home(){

    return(
        <>
            <div id="inicio" className='w-[100vw] h-[90vh] bg-black/30 flex flex-col justify-center items-start text-amber-100'>
                <img className='w-full h-full absolute -z-10' src="/banner02.jpg" alt=""/>
                <span className='w-[50rem] h-auto py-5 text-5xl font-bold'>O seu refúgio de aroma e sabor, todos os dias.</span>
                <span className='w-[50rem] h-auto flex justify-center text-xl italic'>Entre, sinta o clima, e encontre sua pausa perfeita para relaxar.</span>
            </div>
            <div id="slider" className="w-full h-[10vh] overflow-hidden relative bg-[#4B1F0E]">
                <div className="flex w-[200%] h-[10vh] animate-scroll">
                {Array(10)
                    .fill(null)
                    .map((_, index) => (
                    <span
                        key={index}
                        className="flex justify-center items-center px-28 h-full text-[#FEF3C7] text-3xl font-bold whitespace-nowrap"
                    >
                        SOBREMESAS 10% OFF
                    </span>
                    ))}
                </div>
            </div>
        </>
    )
}