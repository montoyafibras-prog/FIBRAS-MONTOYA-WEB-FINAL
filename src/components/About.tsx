import { CheckCircle } from "lucide-react";

const benefits = [
  "Durabilidad garantizada: productos resistentes a la corrosión y al paso del tiempo.",
  "Tiempos de entrega eficientes: cumplimos con los plazos acordados.",
  "Calidad certificada: materiales de primera y procesos controlados.",
  "Asesoría técnica personalizada: acompañamiento desde el diseño hasta la instalación.",
  "Versatilidad: adaptamos el diseño a las necesidades de su industria o proyecto",
  "Mantenimiento preventivo y correctivo: Reparaciones, optimización y recuperación de estructuras existentes.",
];

const services = [
  "Diseño, fabricación e instalación de productos en fibra de vidrio",
  "Asesoría técnica personalizada para cada tipo de proyecto",
  "Mantenimiento preventivo y correctivo de estructuras existentes",
  "Soluciones a medida, adaptadas a los requerimientos de cada cliente",
];

export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos una empresa dedicada a la fabricación y desarrollo de soluciones en fibra de vidrio, 
              con amplia experiencia en el sector industrial.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nos caracteriza la seriedad, cumplimiento y enfoque técnico en cada proyecto. 
              Nuestra misión es proporcionar productos duraderos y eficientes, respaldados por un servicio
               personalizado y tiempos de entrega óptimos.
            </p>
            <p className="text-lg text-muted-foreground">
              Creemos en la innovación constante y en el uso de materiales de alto 
              rendimiento para ofrecer resultados que superan las expectativas.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Qué Hacemos?
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-lg text-foreground">{service}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              Cada producto se fabrica con precisión, técnica, asegurando estanqueidad, resistencia química y mecánica, ideales para el uso industrial.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center ">
            Beneficios de Trabajar con Nosotros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-secondary rounded-lg border border-border hover:border-accent/50 hover:-translate-y-1 transition-colors "
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1  " />
                <p className="text-lg text-foreground ">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
