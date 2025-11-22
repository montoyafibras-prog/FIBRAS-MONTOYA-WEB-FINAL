import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_ol2rge5"; 
const TEMPLATE_ID = "template_zis9bko";
const PUBLIC_KEY = "dohXKiVeYekA4t0nB";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //  validation
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos obligatorios.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((response) => {
                // Limpiar el formulario 
                setFormData({ name: '', email: '', phone: '', message: '' }); 
            }, (error) => {
                console.log('FAILED...', error);
                toast({
                    title: "Error de Envío",
                    description: "No se pudo enviar el mensaje. Inténtalo más tarde.",
                    variant: "destructive",
                    duration: 3000,
                });
                });
    

    // Here you would typically send the data to your backend
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto con usted pronto",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto y Ubicacion
          </h2>
          <p className="text-xl text-muted-foreground">
            ¿Necesita un tanque o estructura en fibra de vidrio a medida?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-muted-foreground">3147005575-3207169762-3017159341</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Correo Electrónico</h4>
                  <p className="text-muted-foreground">montoyafibras@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horario de Atención</h4>
                  <p className="text-muted-foreground">Lunes a Sábado, de 8:00 a.m. a 6:00 p.m.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                  <p className="text-muted-foreground">Carrera 42 A # 81-18 manrique</p>
                </div>
              </div>

              <div className="mt-8" hidden  >
                <div className="w-full h-[300px] rounded-lg overflow-hidden border border-border shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6621.4391886999765!2d-75.62439745433485!3d6.175503034419647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468229d0971a77%3A0x2c00524ccc927785!2sVereda%20Olivares!5e1!3m2!1ses-419!2sco!4v1762903180821!5m2!1ses-419!2sco"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Ubicación de Fibras Montoya"
                  />
                </div>
              </div>



            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground font-semibold mb-2">
                ➡️ Agende una visita técnica o solicite su cotización hoy mismo ➡️
              </p>
              <p className="text-muted-foregroun ">
                Nuestro equipo le brindará una atención rápida, técnica y profesional.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envíenos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nombre completo *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Correo electrónico *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  pattern="[0-9]{7,15}"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:-translate-y-1 hover:text-background"
                size="lg"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
