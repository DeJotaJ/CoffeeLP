import { useState } from "react";

export default function CarouselProduct({array, title}) {
  
  const images = array
  console.log(images)

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar imagens
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para voltar imagens
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Pegue as duas imagens a serem exibidas
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
    images[(currentIndex + 4) % images.length],
  ];

  return (
    <>
      <h2 className='w-full mt-5 px-20 flex justify-between items-center'>
        <span className="text-3xl text-[#4B1F0E] font-semibold uppercase">
          {title}
        </span>
        <span className="text-sm text-[#4B1F0E] underline cursor-pointer py-1 px-2 rounded-2xl">Ver mais</span>
        
      </h2>
      <div id="galeria" className="relative w-[100vw] h-auto bg-[#EFC3A4]/0 py-5 flex justify-center items-center flex-wrap">
        <button
          onClick={prevImage}
          className="h-10 top-1/2 font-extrabold text-[#EFC3A4] bg-[#4B1F0E] px-2 rounded-full"
        >
          &lt;
        </button>
        <div className="w-[85vw] mx-5 mb-10 px-0 h-full flex justify-around gap-0">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-1/3 mx-1"
              onClick={()=> (setFoco(!foco), setItem(image) )}
            >
              <img
                src={image}
                alt={`Image ${currentIndex + index + 1}`}
                className="w-full h-60 rounded-lg border-2 border-[#4B1F0E]"
                />
            </div>
          ))}
        </div>
        <button
          onClick={nextImage}
          className="h-10 top-1/2 transform font-extrabold text-[#EFC3A4] bg-[#4B1F0E] px-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
