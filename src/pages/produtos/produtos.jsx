import { useState } from "react";
import Slider from '../../components/sliderProduct';

export default function Produtos(){

    const cafes = [

        { title: "Café Gelado Preparado", img: "cafes/BrewedIcedCoffee.jpg", desc: "Café Gelado Preparado é feito com 1/2 xícara de café Black Silk ou 3 colheres de sopa de café instantâneo torrado clássico, adicionado a 3 xícaras de água fria, divididas e Cubos de gelo. Adoçante e Cremeira são opcionais." },
        { title: "Mocha Gelado", img: "cafes/MochaIced.jpg", desc: "Mocha Gelado é feito com 1 cápsula Black Silk K-Cup®, preparada na menor configuração, resfriada. 1/2 xícara de leite, 3 a 4 colheres de sopa de xarope de chocolate com sabor de sundae Smucker’s® ou sua cobertura de chocolate favorita da Smucker’s®, além de mais para enfeitar Chantilly ou espuma fria. Granulado de chocolate ou cacau em pó são opcionais."},
        { title: "Café Gelado com Caramelo", img: "cafes/CarameloMacchiato.jpg", desc: "Café Gelado com Caramelo é feito com 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de água fria ou em temperatura ambiente, 1/3 xícara de leite achocolatado, 2 colheres de sopa de xarope de caramelo Smucker’s® Sundae Syrup, mais um pouco extra para enfeitar. 1/4 colher de chá de extrato de baunilha e 6 a 7 cubos de gelo. Chantilly ou espuma fria ou Adoçante, opcionais."},
        { title: "Café Gelado com Chocolate e Churros", img: "cafes/ChurrosComChocolateIced.jpg" , desc: "Café Gelado com Chocolate e Churros  é feito com 1 colher de chá cheia de café gelado instantâneo ou 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de xarope sabor chocolate Smucker's® Sundae Syrup ™, 1 colher de sopa de açúcar mascavo, uma pitada de sal, respingo de água, 3/4 xícara de leite e gelo. Chantilly ou espuma fria."},
        { title: "Café Gelado Cremoso e Doce", img: "cafes/CreamySweetIced.jpg" , desc: "Café Gelado Cremoso e Doce é feito com 1 cápsula Black Silk K-Cup®, preparada e resfriada ou 1 cápsula K-Cup® de café colombiano, preparada e resfriada, 2 a 3 colheres de sopa de leite condensado adoçado e cubos de gelo."},
        { title: "Café Gelado com Mel", img: "cafes/HoneyIced Coffee.jpg" , desc: "Café Gelado com Mel é feito com 3/4 xícara de café colombiano preparado e resfriado ou 1 cápsula K-Cup® de café colombiano preparada e resfriada, gelo e um fiozinho de mel. Leite ou creme é opcional."},
        { title: "Café Gelado Instantâneo", img: "cafes/InstantIced.jpg" , desc: "Café Gelado Instantâneo é feito com 1 colher de chá cheia de café instantâneo torrado clássico ou 1 colher de chá cheia de café gelado instantâneo, 3/4 xícara de água em temperatura ambiente ou fria e cubos de gelo. Adoçante e Cremeira é opcional."},
        { title: "Café Gelado Instantâneo com Baunilha francesa", img: "cafes/InstantFrenchVanilla.jpg" , desc: "Café Gelado Instantâneo com Baunilha Francesa é feito com 1 colher de chá cheia de café instantâneo torrado clássico ou 1 colher de chá cheia de café gelado instantâneo, 1/2 xícara de água fria ou em temperatura ambiente, 1/4 xícara de creme de café sabor baunilha francesa e cubos de gelo. Chantilly ou espuma fria é opcional."},
        { title: "Café Gelado Cremoso e Doce", img: "cafes/CreamySweetIced.jpg" , desc: "Café Gelado Cremoso e Doce é feito com 1 cápsula Black Silk K-Cup®, preparada e resfriada ou 1 cápsula K-Cup® de café colombiano, preparada e resfriada, 2 a 3 colheres de sopa de leite condensado adoçado e cubos de gelo."},
        { title: "Café Gelado com Mel", img: "cafes/HoneyIced Coffee.jpg" , desc: "Café Gelado com Mel é feito com 3/4 xícara de café colombiano preparado e resfriado ou 1 cápsula K-Cup® de café colombiano preparada e resfriada, gelo e um fiozinho de mel. Leite ou creme é opcional."},
    ];
    
    const doces = [

        { title: "Café Gelado Preparado", img: "doces/pancakeFrutasVermelhas.jpg", desc: "Café Gelado Preparado é feito com 1/2 xícara de café Black Silk ou 3 colheres de sopa de café instantâneo torrado clássico, adicionado a 3 xícaras de água fria, divididas e Cubos de gelo. Adoçante e Cremeira são opcionais." },
        { title: "Mocha Gelado", img: "doces/pancakeGranolaMel.jpg", desc: "Mocha Gelado é feito com 1 cápsula Black Silk K-Cup®, preparada na menor configuração, resfriada. 1/2 xícara de leite, 3 a 4 colheres de sopa de xarope de chocolate com sabor de sundae Smucker’s® ou sua cobertura de chocolate favorita da Smucker’s®, além de mais para enfeitar Chantilly ou espuma fria. Granulado de chocolate ou cacau em pó são opcionais."},
        { title: "Café Gelado com Caramelo", img: "doces/pancakeKinder.jpg", desc: "Café Gelado com Caramelo é feito com 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de água fria ou em temperatura ambiente, 1/3 xícara de leite achocolatado, 2 colheres de sopa de xarope de caramelo Smucker’s® Sundae Syrup, mais um pouco extra para enfeitar. 1/4 colher de chá de extrato de baunilha e 6 a 7 cubos de gelo. Chantilly ou espuma fria ou Adoçante, opcionais."},
        { title: "Café Gelado com Chocolate e Churros", img: "doces/pancakeNutellaCaramelo.jpg" , desc: "Café Gelado com Chocolate e Churros  é feito com 1 colher de chá cheia de café gelado instantâneo ou 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de xarope sabor chocolate Smucker's® Sundae Syrup ™, 1 colher de sopa de açúcar mascavo, uma pitada de sal, respingo de água, 3/4 xícara de leite e gelo. Chantilly ou espuma fria."},
        { title: "Café Gelado Cremoso e Doce", img: "doces/browniedDuo.jpg" , desc: "Café Gelado Cremoso e Doce é feito com 1 cápsula Black Silk K-Cup®, preparada e resfriada ou 1 cápsula K-Cup® de café colombiano, preparada e resfriada, 2 a 3 colheres de sopa de leite condensado adoçado e cubos de gelo."},
        { title: "Café Gelado com Mel", img: "doces/browniedDoceDeLeite.jpg" , desc: "Café Gelado com Mel é feito com 3/4 xícara de café colombiano preparado e resfriado ou 1 cápsula K-Cup® de café colombiano preparada e resfriada, gelo e um fiozinho de mel. Leite ou creme é opcional."},
    ];

    const cafesImg = cafes.map(image => image.img);
    const docesImg = doces.map(image => image.img);

    const [foco, setFoco] = useState();
    const [item, setItem] = useState({});

    return(
        <>
            
            <div 
                id='produtos' 
                className='w-[100vw] pt-5 
                    bg-[#EFC3A4]
                    flex flex-wrap justify-center
                '>
                <div className="w-full flex">
                    <div className="w-1/2 min-h-96 py-5 px-10 flex flex-wrap justify-center gap-7">
                        {cafes.slice(0, 4).map((image, index) =>(
                            <span key={index} className='relative w-52 h-48 mx-5 my-0 rounded-lg overflow-y-hidden shadow-[#0E0504] shadow-sm cursor-pointer'>
                                <img className='peer w-full h-full rounded-lg border-2 border-[#4B1F0E] peer' src={image.img} alt="" />
                                <div className={`
                                    absolute top-full w-full h-full flex justify-center items-center bg-[#4B1F0E]/80 rounded-lg 
                                    text-[#EFC3A4] text-xl uppercase font-semibold ${foco ? 'text-black' : ''}
                                    peer-hover:top-0 hover:top-0 transition-* duration-200
                                `}
                                onClick={()=> (setFoco(!foco), setItem(image) )}
                                > 
                                    {image.title}
                                </div>
                            </span>
                        ))}
                    </div>
                    <div className="w-1/2 min-h-96 flex flex-col justify-center items-center">
                        <h2 className='h-[20%] flex items-center text-2xl uppercase font-semibold text-[#4B1F0E]'>
                            Cafés Gelados
                        </h2>
                        <p className='w-full h-70% px-7 text-lg text-[#4B1F0E] text-left font-semibold rounded-xl'>
                            Nossa cafeteria é um espaço dedicado a oferecer momentos únicos, onde a qualidade é o pilar central de tudo o que fazemos.
                            Especialistas em cafés gelados, buscamos elevar a experiência dos amantes dessa bebida, criando combinações que surpreendem e encantam. 
                            Além dos cafés, oferecemos uma seleção cuidadosa de sobremesas artesanais e salgados, preparados com ingredientes frescos e selecionados.
                            Aqui, cada detalhe importa, desde o atendimento acolhedor até o ambiente que convida à tranquilidade e conexão. Nosso compromisso é ser mais do que uma cafeteria, mas um lugar onde cada visita se transforma em uma memória especial.
                        </p>
                        <h2 className='my-10 py1 px-2 rounded-lg flex items-center text-sm font-semibold bg-[#4B1F0E] text-amber-100  cursor-pointer'>
                            Ver mais
                        </h2>
                    </div>
                </div>
                <div className="w-full flex bg-[#4B1F0E]">
                    <div className="w-1/2 min-h-96 flex flex-col justify-center items-center">
                        <h2 className='h-[20%] flex items-center text-2xl uppercase font-semibold text-amber-100'>
                            Cafés Gelados
                        </h2>
                        <p className='w-full h-full px-7 text-lg text-amber-100 text-left font-semibold rounded-xl'>
                            Nossa cafeteria é um espaço dedicado a oferecer momentos únicos, onde a qualidade é o pilar central de tudo o que fazemos.
                            Especialistas em cafés gelados, buscamos elevar a experiência dos amantes dessa bebida, criando combinações que surpreendem e encantam. 
                            Além dos cafés, oferecemos uma seleção cuidadosa de sobremesas artesanais e salgados, preparados com ingredientes frescos e selecionados.
                            Aqui, cada detalhe importa, desde o atendimento acolhedor até o ambiente que convida à tranquilidade e conexão. Nosso compromisso é ser mais do que uma cafeteria, mas um lugar onde cada visita se transforma em uma memória especial.
                        </p>
                        <h2 className='my-10 py1 px-2 rounded-lg flex items-center text-sm font-semibold bg-amber-100 text-[#4B1F0E] cursor-pointer'>
                            Ver mais
                        </h2>
                    </div>
                    <div className="w-1/2 min-h-96 py-5 px-10 flex flex-wrap justify-center gap-7">
                        {cafes.slice(0, 4).map((image, index) =>(
                            <span key={index} className='relative w-52 h-48 mx-5 my-0 rounded-lg overflow-y-hidden shadow-[#0E0504] shadow-sm cursor-pointer'>
                                <img className='peer w-full h-full rounded-lg border-2 border-[#EFC3A4] peer' src={image.img} alt="" />
                                <div className={`
                                    absolute top-full w-full h-full flex justify-center items-center bg-[#4B1F0E]/80 rounded-lg 
                                    text-amber-100 text-xl uppercase font-semibold ${foco ? 'text-black' : ''}
                                    peer-hover:top-0 hover:top-0 transition-* duration-200
                                `}
                                onClick={()=> (setFoco(!foco), setItem(image) )}
                                > 
                                    {image.title}
                                </div>
                            </span>
                        ))}
                    </div>
                </div>
                <div className={`
                    w-[43vw] h-[60vh] mt-1 scale-[1%] opacity-0 absolute bg-[#4B1F0E] rounded-2xl
                    flex transform duration-300
                    ${foco ? 'scale-[100%] opacity-100 left-[3.5vw] -mt-0' : ' -left-[3.5vw]'} 
                `}>
                    <span className="absolute top-1 right-3 text-amber-100 text-3xl font-extrabold" onClick={()=> setFoco(!foco)}> X </span>
                    <div className="w-1/2 h-full p-10 flex justify-center items-center border-r-2 border-amber-100">
                        <img className="w-full h-2/3 rounded-3xl" src={item.img} alt="" />
                    </div>
                    <div className="w-1/2 h-full py-5 px-5 flex flex-col items-star border">
                        <span className="w-full my-5 text-center text-amber-100 text-2xl uppercase font-semibold">{item.title}</span>
                        <p className="max-h-full my-1 text-amber-100 flex justify-start text-left text-md font-semibold">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}