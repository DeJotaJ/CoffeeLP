import { useState } from "react"

export default function Header(){

    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <header className="absolute top-0 w-full h-[7%] md:h-[10%] md:px-5 z-10 bg-[#0E0504]/75 flex justify-between items-center">
                <div className="w-16 h-16 md:mx-24 flex justify-center items-center">
                    <img className="w-9 h-9 rounded-full flex justify-center" src="./logo1.jpg" alt="" />
                </div>
                <div className="md:hidden w-16 h-16 flex justify-center items-center" onClick={() => setMenuOpen(true)}>
                    <img className="w-8 h-8 rounded-full " src="./Menu.png" alt="" />
                </div>
                <nav className={`
                        md:w-1/2 md:h-auto md:-top-0 md:flex md:flex-row md:justify-evenly text-amber-100 md:text-lg font-medium uppercase  md:relative
                        absolute w-full h-[100vh] -top-[100vh] text-xl tranform duration-75
                        ${menuOpen === true ? 'top-[0vh]':'-top-[100vh]'}
                `}>
                    <div className="md:w-full md:h-auto min-h-[10vh] py-2 flex flex-col justify-evenly gap-0 md:p-0 md:flex md:flex-row md:justify-evenly bg-[#4B1F0E]/100 md:bg-[#4B1F0E]/0">
                        <a className="py-2 hover:bg-white/10 md:px-1 hover:font-bold" href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
                        <a className="py-2 hover:bg-white/10 md:px-1 hover:font-bold" href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
                        <a className="py-2 hover:bg-white/10 md:px-1 hover:font-bold" href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
                        <a className="py-2 hover:bg-white/10 md:px-1 hover:font-bold" href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
                    </div>
                    <div className={`bg-black/50 w-full min-h-[100vh] ${menuOpen === true ? 'block':'hidden'} md:hidden `} onClick={() => setMenuOpen(false)}>
                    
                    </div>
                </nav>
            </header>
        </>
    )
}