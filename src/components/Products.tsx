import { Droplets, Recycle, Trash2, Shield, Waves, Bath } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: Droplets,
    title: "Tanques de Almacenamiento",
    description: "Tanques de agua y quimicos de cualquier capacidad, diseñados a medida para sus necesidades.",
  },
  {
    icon: Recycle,
    title: "Pozos Sépticos",
    description: "Pozos sépticos modulares de alta resistencia y larga durabilidad.",
  },
  {
    icon: Trash2,
    title: "Chuts de Basura",
    description: "Sistemas de recolección eficientes para edificios y complejos residenciales.",
  },
  {
    icon: Shield,
    title: "Impermeabilización",
    description: "Soluciones de impermeabilización para superficies industriales y residenciales.",
  },
  {
    icon: Waves,
    title: "Plantas de Tratamiento",
    description: "Plantas de tratamiento de agua y sistemas integrados de última generación.",
  },
  {
    icon: Bath,
    title: "Productos Personalizados",
    description: "Jacuzzis, lavamanos y estructuras customizadas en fibra de vidrio.",
  },
];

export const Products = () => {
  return (
    <section id="productos" className="py-20 bg-secondary ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Descubra nuestra línea completa de soluciones en fibra de vidrio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card hover:border-accent/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <product.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground font-bold">
            Todos nuestros productos son fabricados con materiales de primera calidad, bajo estándares técnicos exigentes, lo que asegura larga vida útil, bajo mantenimiento y excelente desempeño.
          </p>
        </div>
      </div>
    </section>
  );
};
