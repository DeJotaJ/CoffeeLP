export default function Header(){
    return(
        <>
            <header className="w-full min-h-[15%] py-3 bg-[#0E0504]/100 flex justify-between">
                <div className="w-1/2 flex items-center">
                    <div className="w-1/3 h-16 mx-24 flex justify-center items-center">
                        <img className="rounded-full w-16 h-16" src="./logo1.jpg" alt="" />
                    </div>
                    <nav className="w-1/3 h-auto flex flex-col justify-evenly text-amber-100 text-base uppercase">
                        <a className="px-1 hover:font-bold" href="#inicio">Início</a>
                        <a className="px-1 hover:font-bold" href="#produtos">Produtos</a>
                        <a className="px-1 hover:font-bold" href="#sobre">Sobre</a>
                    </nav>
                    <nav className="w-1/3 h-auto flex flex-col justify-evenly text-amber-100">
                        <a className="px-1 hover:font-bold text-base font-medium uppercase">CONTATOS:</a>
                        <a className="px-1 hover:font-bold font-medium" href="#">Instagram</a>
                        <a className="px-1 hover:font-bold font-medium" href="#">E-mail</a>
                    </nav>
                </div>
                <div className="w-1/2 h-auto flex flex-col justify-center text-amber-100">
                    <span>
                        © Copyright by CoffeeLP - Todos os direitos reservados
                    </span>
                    <span>
                        Desenvolvido por <b><a href="#">DeJota</a></b>
                    </span>
                </div>
            </header>
        </>
    )
}