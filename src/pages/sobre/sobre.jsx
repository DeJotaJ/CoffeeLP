import Slider from '../../components/slider'
export default function Produtos(){

    const images = [
        "/balcaoProdutos.jpg",
        "/casalMesa.jpg",
        "/balcaoProdutoCliente-3.jpg",
        "/balcaoProdutoCliente-4.jpg",
        "/balcaoProdutoCliente-5.jpg",
        "/balcaoProdutoCliente.jpg",
        "/casalMesa2.jpg",
    ];

    return(
        <>
            <div 
                id='sobre' 
                className='max-w-full min-h-[100vh] relative
                    flex flex-wrap justify-center items-start gap-y-0
                    
                '>
                <div className='w-full h-auto py-5 flex flex-col md:flex-row bg-[#EFC3A4]/100'>
                    <div className='w-full md:w-[55%] px-5 md:px-10 flex flex-col items-start'>
                        <h2 className='w-full md:w-[85%] my-5 md:px-10 text-3xl text-[#4B1F0E] text-left font-semibold '>SOBRE NÓS</h2>
                        <p className='w-full md:w-[85%] md:h-full md:px-10 md:text-lg text-[#4B1F0E] text-left md:font-semibold rounded-xl'>
                        Nossa cafeteria é um espaço dedicado a oferecer momentos únicos, onde a qualidade é o pilar central de tudo o que fazemos.
                        Especialistas em cafés gelados, buscamos elevar a experiência dos amantes dessa bebida, criando combinações que surpreendem e encantam. 
                        Além dos cafés, oferecemos uma seleção cuidadosa de sobremesas artesanais e salgados, preparados com ingredientes frescos e selecionados.
                        Aqui, cada detalhe importa, desde o atendimento acolhedor até o ambiente que convida à tranquilidade e conexão. Nosso compromisso é ser mais do que uma cafeteria, mas um lugar onde cada visita se transforma em uma memória especial.
                        </p>
                    </div>
                    <div className='w-full md:w-[40%] py-3 px-2 md:h-96 md:py-5'>
                        <img className='h-full rounded-xl border-2 border-[#4B1F0E]' src="./faixada2.jpg" alt="" />
                    </div>
                </div>
                <div className='w-full h-[20rem] md:h-[30rem] px-2 md:px-0 md:pb-5 flex flex-col items-center'>
                    <h2 className='w-full my-5 text-3xl uppercase font-semibold text-[#4B1F0E]'>ONDE ESTAMOS</h2>  
                    <iframe className="w-full md:w-[80%] h-2/3 md:h-full rounded-2xl border-2 border-[#4B1F0E]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d363.5535819661969!2d-73.99932275185486!3d40.74966566850596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b9ec8df3b3%3A0xbabc9e1a561aa098!2sJoe%20Coffee%20Company!5e1!3m2!1spt-BR!2sbr!4v1735569698490!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-full bg-[#EFC3A4]'>
                    <Slider array={images}/>
                </div>
            </div>
        </>
    )
}