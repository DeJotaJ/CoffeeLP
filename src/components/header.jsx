export default function Header(){
    return(
        <>
            <header className="absolute top-0 w-full h-[10%] px-5 bg-[#0E0504]/80 flex justify-between items-center">
                <div className="w-16 h-16 mx-24 flex justify-center items-center">
                    <img className="rounded-full" src="./logo1.jpg" alt="" />
                </div>
                <nav className="w-1/2 h-auto flex justify-evenly text-amber-100 text-lg font-medium uppercase">
                    <a className="px-1 hover:font-bold" href="#inicio">Início</a>
                    <a className="px-1 hover:font-bold" href="#produtos">Produtos</a>
                    <a className="px-1 hover:font-bold" href="#galeria">Galeria</a>
                    <a className="px-1 hover:font-bold" href="#sobre">Sobre</a>
                </nav>
            </header>
        </>
    )
}