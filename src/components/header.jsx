export default function Header(){
    return(
        <>
            <header className="absolute top-0 w-full h-[7%] md:h-[10%] px-5 z-10 bg-[#0E0504]/75 flex justify-between items-center">
                <div className="w-9 h-9 md:w-16 md:h-16 md:mx-24 flex justify-center items-center">
                    <img className="rounded-full" src="./logo1.jpg" alt="" />
                </div>
                <div className="md:hidden w-16 h-16 flex justify-end items-center">
                    <img className="w-8 h-8 rounded-full" src="./Menu.png" alt="" />
                </div>
                <nav className="hidden w-1/2 h-auto md:flex justify-evenly text-amber-100 text-lg font-medium uppercase">
                    <a className="px-1 hover:font-bold" href="#inicio">Início</a>
                    <a className="px-1 hover:font-bold" href="#produtos">Produtos</a>
                    <a className="px-1 hover:font-bold" href="#galeria">Galeria</a>
                    <a className="px-1 hover:font-bold" href="#sobre">Sobre</a>
                </nav>
            </header>
        </>
    )
}