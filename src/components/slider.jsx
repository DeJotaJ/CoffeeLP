import { useState } from "react";

export default function Carousel({array}) {
  
    const images = array
    console.log(images)

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar 2 imagens
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  // Função para voltar 2 imagens
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + images.length) % images.length
    );
  };

  // Pegue as duas imagens a serem exibidas
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div id="galeria" className="relative w-[100vw] h-auto bg-[#EFC3A4]/0 py-5 flex justify-center items-center flex-wrap">
        <h2 className='w-full my-5 text-3xl uppercase font-semibold text-[#4B1F0E]'>FOTO</h2>
      <button
        onClick={prevImage}
        className="h-10 top-1/2 transform rotate-180 -translate-y-1/2 text-[#4B1F0E] p-2 rounded-full"
      >
        <img src="./setaMarrom.png" alt="" />
      </button>
      <div className="w-[80vw] mx-5 px-0 h-full flex justify-around gap-1">
        {visibleImages.map((image, index) => (
          <div key={index} className="w-1/3 mx-1">
            <img
              src={image}
              alt={`Image ${currentIndex + index + 1}`}
              className="w-full h-[20rem] rounded-lg border-2 border-[#4B1F0E]"
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextImage}
        className="h-10 top-1/2 transform -translate-y-1/2 text-[#4B1F0E] p-2 rounded-full"
      >
        <img src="./setaMarrom.png" alt="" />
      </button>
    </div>
  );
}
