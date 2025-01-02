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

        { title: "Panqueca de Frutas Vermelhas", img: "doces/pancakeFrutasVermelhas.jpg", desc: "Café Gelado Preparado é feito com 1/2 xícara de café Black Silk ou 3 colheres de sopa de café instantâneo torrado clássico, adicionado a 3 xícaras de água fria, divididas e Cubos de gelo. Adoçante e Cremeira são opcionais." },
        { title: "Panqueca de Granola e Mel", img: "doces/pancakeGranolaMel.jpg", desc: "Mocha Gelado é feito com 1 cápsula Black Silk K-Cup®, preparada na menor configuração, resfriada. 1/2 xícara de leite, 3 a 4 colheres de sopa de xarope de chocolate com sabor de sundae Smucker’s® ou sua cobertura de chocolate favorita da Smucker’s®, além de mais para enfeitar Chantilly ou espuma fria. Granulado de chocolate ou cacau em pó são opcionais."},
        { title: "Panqueca de Kinder", img: "doces/pancakeKinder.jpg", desc: "Café Gelado com Caramelo é feito com 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de água fria ou em temperatura ambiente, 1/3 xícara de leite achocolatado, 2 colheres de sopa de xarope de caramelo Smucker’s® Sundae Syrup, mais um pouco extra para enfeitar. 1/4 colher de chá de extrato de baunilha e 6 a 7 cubos de gelo. Chantilly ou espuma fria ou Adoçante, opcionais."},
        { title: "Panqueca de Nutella e Caramelo", img: "doces/pancakeNutellaCaramelo.jpg" , desc: "Café Gelado com Chocolate e Churros  é feito com 1 colher de chá cheia de café gelado instantâneo ou 1 colher de chá cheia de café instantâneo torrado clássico, 1 colher de sopa de xarope sabor chocolate Smucker's® Sundae Syrup ™, 1 colher de sopa de açúcar mascavo, uma pitada de sal, respingo de água, 3/4 xícara de leite e gelo. Chantilly ou espuma fria."},
        { title: "Brownie Duo", img: "doces/browniedDuo.jpg" , desc: "Café Gelado Cremoso e Doce é feito com 1 cápsula Black Silk K-Cup®, preparada e resfriada ou 1 cápsula K-Cup® de café colombiano, preparada e resfriada, 2 a 3 colheres de sopa de leite condensado adoçado e cubos de gelo."},
        { title: "Brownie de Doce de Leite", img: "doces/browniedDoceDeLeite.jpg" , desc: "Café Gelado com Mel é feito com 3/4 xícara de café colombiano preparado e resfriado ou 1 cápsula K-Cup® de café colombiano preparada e resfriada, gelo e um fiozinho de mel. Leite ou creme é opcional."},
    ];

    const cafesImg = cafes.map(image => image.img);
    const docesImg = doces.map(image => image.img);

    const [foco, setFoco] = useState();
    const [foco2, setFoco2] = useState();
    const [item, setItem] = useState({});

    return(
        <>
            
            <div 
                id='produtos' 
                className='w-[100vw] h-auto pt-5 bg-[#EFC3A4] flex flex-wrap md:justify-center relative
                '>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="
                        w-full px-2 flex justify-around gap-1
                        md:w-1/2 md:min-h-96 md:py-5 md:px-10 md:flex-wrap md:justify-center md:gap-7
                    ">
                        {cafes.slice(0, 4).map((image, index) =>(
                            <span 
                                key={index} 
                                className='relative w-28 h-24 my-0 rounded-lg overflow-y-hidden shadow-[#0E0504] shadow-sm cursor-pointer
                                            md:w-52 md:h-48 md:mx-5
                            '
                            onClick={()=> (setFoco(!foco), setItem(image) )}
                            >
                                <img className='peer w-full h-full rounded-lg border-2 border-[#4B1F0E] peer' src={image.img} alt="" />
                                <div className={`
                                    absolute top-full w-full h-full flex justify-center items-center bg-[#4B1F0E]/80 rounded-lg 
                                    text-[#EFC3A4] text-[10px] md:text-xl uppercase font-semibold ${foco ? 'text-black' : ''}
                                    peer-hover:top-0 hover:top-0 transition-* duration-200
                                `}
                                
                                > 
                                    {image.title}
                                </div>
                            </span>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 md:min-h-96 flex flex-col justify-start items-center">
                        <h2 className='h-[30%] py-3 md:py-0 flex items-center text-lg md:text-4xl uppercase font-semibold text-[#4B1F0E]'>
                            Cafés Gelados
                        </h2>
                        <p className='w-full h-70% px-7 md:text-2xl text-[#4B1F0E] text-left md:font-semibold rounded-xl'>
                            Nossa cafeteria é especialistas em cafés gelados, buscamos elevar a experiência dos amantes dessa bebida, criando combinações que surpreendem e encantam. Aqui, cada detalhe importa.
                        </p>
                        <h2 className='my-2 md:my-10 py-1 px-2 rounded-lg flex items-center text-[10px] md:text-sm font-semibold bg-[#4B1F0E] text-amber-100  cursor-pointer'>
                            Ver mais
                        </h2>
                    </div>
                    <div onClick={()=> setFoco(!foco)} className={`w-[100dvw] h-[150dvh] md:w-1/2 md:h-[60vh] flex justify-center items-center absolute z-20 bg-black/50 md:bg-black/0 md:z-0 overflow-y-hidden ${foco ? 'block md:left-2' : 'hidden md:-left-[3.5vw]'}`}>
                        <div className={`
                            md:w-full md:h-[95%] md:mt-0
                            w-full scale-[1%] opacity-0 bg-[#4B1F0E] rounded-2xl
                            flex flex-col items-center md:flex-row transform duration-300
                            ${foco ? 'scale-[100%] opacity-100 md:left-[3.5vw] md:-mt-0' : 'md:-left-[3.5vw]'} 
                        `} onClick={()=> setFoco(!foco)}>
                            <span className="absolute top-1 right-3 text-amber-100 text-3xl font-extrabold" onClick={()=> setFoco(!foco)}> X </span>
                            <div className="md:w-1/2 h-full p-10 flex justify-center items-center border-r-2 border-amber-100">
                                <img className="w-full h-2/3 rounded-3xl" src={item.img} alt="" />
                            </div>
                            <div className="md:w-1/2 h-full py-5 px-5 flex flex-col items-star">
                                <span className="w-full my-5 text-center text-amber-100 text-2xl uppercase font-semibold">{item.title}</span>
                                <p className="max-h-full my-1 text-amber-100 flex justify-start text-left text-md font-semibold">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row bg-[#4B1F0E]">
                    <div className="w-full order-2 md:order-1 md:w-1/2 md:min-h-96 flex flex-col justify-start items-center">
                        <h2 className='h-[30%] py-3 md:py-0 flex items-center text-lg md:text-4xl uppercase font-semibold text-amber-100'>
                            Sobremesas
                        </h2>
                        <p className=' w-full h-70% px-7 md:text-2xl text-amber-100 text-left md:font-semibold rounded-xl'>
                            Além dos cafés, oferecemos uma seleção cuidadosa de sobremesas artesanais e salgados, preparados com ingredientes frescos e selecionados. Aqui, cada detalhe também importa.
                        </p>
                        <h2 className='my-2 md:my-10 py-1 px-2 rounded-lg flex items-center text-[10px] md:text-sm font-semibold bg-amber-100 text-[#4B1F0E]  cursor-pointer'>
                            Ver mais
                        </h2>
                    </div>
                    <div className="w-full p-2 flex justify-around gap-1 order-1 md:order-2
                        md:w-1/2 md:min-h-96 md:py-4 md:px-10 md:flex-wrap md:justify-center md:gap-7">
                        {doces.slice(0, 4).map((image, index) =>(
                            <span key={index} className='relative w-28 h-24  md:w-52 md:h-48 md:mx-5 my-0 rounded-lg overflow-y-hidden shadow-[#0E0504] shadow-sm cursor-pointer'
                                onClick={()=> (setFoco2(!foco2), setItem(image) )}
                            >
                                <img className='peer w-full h-full rounded-lg border-2 border-[#EFC3A4] peer' src={image.img} alt="" />
                                <div className={`
                                    absolute top-full w-full h-full flex justify-center items-center bg-[#4B1F0E]/80 rounded-lg 
                                    text-amber-100 text-[10px] md:text-xl uppercase font-semibold ${foco2 ? 'text-black' : ''}
                                    peer-hover:top-0 hover:top-0 transition-* duration-200
                                `}> 
                                    {image.title}
                                </div>
                            </span>
                        ))}
                    </div>
                    <div onClick={()=> setFoco2(!foco2)} className={`w-[100dvw] h-[150dvh] md:w-1/2 md:h-[60vh] flex justify-center items-center absolute z-20 bg-black/50 md:bg-black/0 md:z-0 overflow-y-hidden ${foco2 ? 'block md:left-2' : 'hidden md:-left-[3.5vw]'}`}>
                        <div className={`
                            md:w-full md:h-[95%] md:mt-0
                            w-full scale-[1%] opacity-0 bg-[#EFC3A4] rounded-2xl
                            flex flex-col items-center md:flex-row transform duration-300
                            ${foco2 ? 'scale-[100%] opacity-100 md:left-[3.5vw] md:-mt-0' : 'md:-left-[3.5vw]'} 
                        `} onClick={()=> setFoco2(!foco2)}>
                            <span className="absolute top-1 right-3 text-[#4B1F0E] text-3xl font-extrabold" onClick={()=> setFoco2(!foco2)}> X </span>
                            <div className="md:w-1/2 h-full p-10 flex justify-center items-center border-r-2 border-[#4B1F0E]">
                                <img className="w-full h-2/3 rounded-3xl" src={item.img} alt="" />
                            </div>
                            <div className="md:w-1/2 h-full py-5 px-5 flex flex-col items-star">
                                <span className="w-full my-5 text-center text-[#4B1F0E] text-2xl uppercase font-semibold">{item.title}</span>
                                <p className="max-h-full my-1 text-[#4B1F0E] flex justify-start text-left text-md font-semibold">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}