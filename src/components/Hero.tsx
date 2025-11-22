import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tanks.jpg";



export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Fibras Montoya Soluciones S.A.S
        </h1>
        
        <p className="text-xl md:text-2x9 text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
          Fabricamos tanques de almacenamiento de agua potable  y de productos quimicos en fibra de vidrio diseñados para ofrecer resistencia, durabilidad y alto rendimiento.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Descubra nuestros productos que están orientados a cubrir las necesidades del sector industrial, comercial y residencial, garantizando calidad certificada y tiempos de entrega eficientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:text-background transition-all hover:-translate-y-1"
          >
            Solicitar Cotización
          </Button>
         
        </div>
        <div className="mt-8 text-primary-foreground/90 text-lg font-semibold ">
          💧 Innovación, precisión y compromiso en cada proyecto
        </div>
      </div>
    </section>
  );
};
