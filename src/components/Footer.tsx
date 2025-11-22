import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
   
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-primary-foreground/20 pb-8 mb-8">
          
           {/* COLUMNA 1 de contacto */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" /> 
                <p>Dirección (Carrera 42 A # 81-18 manrique)</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" /> 
                <p>Teléfono: 3147005575-3207169762-3017159341</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" /> 
                <p>Email: montoyafibras@gmail.com </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-accent" /> 
                <p>Lun-Sáb: 8:00 a.m. - 6:00 p.m.</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: Navegación Rápida */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-accent transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: Servicios Destacados */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent">Servicios</h4>
            <ul className="space-y-3">
              <li>Tanques de Agua a Medida</li>
              <li>Estructuras de Fibra de Vidrio</li>
              <li>Reparaciones</li>
              <li>Asesoria y visita</li>
              <li><a href="#contacto" className="hover:text-accent transition-colors font-semibold">Solicitar Cotización</a></li>
            </ul>
          </div>
          
          {/* COLUMPNA 4 (Pequeña descripción) */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4 text-accent">Fibras Montoya S.A.S.</h4>
            <p className="text-sm opacity-80">
              Expertos en la fabricación de soluciones de almacenamiento y estructurales en fibra de vidrio, garantizando durabilidad y alta resistencia para los sectores industrial y comercial.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4 mt-6">
              <a 
              href="https://www.facebook.com/share/17iWdcjZBD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors" 
              aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a 
              href="https://www.instagram.com/montoyafibras?igsh=cGNqeGxqNXN3OHY4" 
              target="_blank" 
              className="text-primary-foreground hover:text-accent transition-colors" 
              aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>

        {/* DERECHOS RESEVADOS */}
        <div className="text-center text-sm opacity-70 pt-4">
          <p>&copy; {new Date().getFullYear()} Fibras Montoya Soluciones S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};