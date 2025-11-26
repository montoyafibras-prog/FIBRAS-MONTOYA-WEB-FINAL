import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

// --- 1. Definición de Imágenes ---
const images = [
  '/Carousel/Destacada1.jpg',
  '/Carousel/Destacada2.jpg',
  '/Carousel/Destacada3.jpg',
  '/Carousel/Destacada4.jpg',
  '/Carousel/Destacada5.jpg',
  '/Carousel/Destacada6.jpg',
  '/Carousel/Destacada7.jpg',
  '/Carousel/Destacada8.jpg',
  '/Carousel/Destacada9.jpg',
  '/Carousel/Destacada10.jpg',
  '/Carousel/Destacada11.jpg',
  '/Carousel/Destacada12.jpg',
  '/Carousel/Destacada13.jpg',
  '/Carousel/Destacada14.jpg',
];

export const ImageCarousel = () => {
  // Configura Embla, obtiene emblaRef para el HTML y emblaApi para las funciones
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Galería de Proyectos
        </h2>

        {/* CONTENEDOR PRINCIPAL */}
        <div 
            className="overflow-hidden relative rounded-lg shadow-xl border border-border" 
            
        > 
           
            <div ref={emblaRef} className="overflow-hidden"> 
                {/* CONTAINER */}
                <div className="flex">
                    {images.map((src, index) => (
                        
                        <div
                            className="flex-shrink-0 w-full min-w-0 h-[500px]" 
                            key={index}
                            style={{ flexBasis: '100%' }}
                        >
                            <img
                                src={src}
                                alt={`Proyecto Fibras Montoya ${index + 1}`}
                                
                                className="w-full h-full object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* BOTÓN IZQUIERDO  */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-white/50 rounded-full hover:bg-white/80 transition z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => emblaApi && emblaApi.scrollPrev()}
              
            >
                <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* BOTÓN DERECHO*/}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-white/50 rounded-full hover:bg-white/80 transition z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => emblaApi && emblaApi.scrollNext()}
                
            >
                <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

        </div>
      </div>
    </section>
  );
};