import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Newspaper, ExternalLink } from "lucide-react";

const NewsApiSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // API call will be implemented later
    console.log("Searching for:", searchQuery);
  };

  return (
    <Card className="p-8 shadow-card-lg bg-card backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-gradient-secondary">
          <Newspaper className="w-6 h-6 text-secondary-foreground" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
          Consumo de API Privada - NewsAPI
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Busca los últimos artículos de noticias por palabra clave
      </p>

      <div className="flex gap-3 mb-8">
        <Input
          type="text"
          placeholder="Ingresa palabra clave (ej., tecnología, salud, deportes)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-2 focus-visible:ring-secondary"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button 
          onClick={handleSearch}
          className="bg-gradient-secondary hover:opacity-90 transition-opacity"
        >
          Buscar Noticias
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Resultados de Noticias</h3>
        
        {/* Example news card placeholder */}
        <Card className="p-6 shadow-card border-2 bg-muted/20">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
              <Newspaper className="w-8 h-8 text-muted-foreground opacity-50" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                El Título del Artículo Aparecerá Aquí
              </h4>
              <p className="text-muted-foreground mb-3 line-clamp-2">
                La descripción del artículo y el texto de vista previa se mostrarán en esta área. 
                Mostrará un breve resumen del contenido del artículo de noticias.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                Leer artículo completo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card border-2 bg-muted/20">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
              <Newspaper className="w-8 h-8 text-muted-foreground opacity-50" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Otro Título de Artículo
              </h4>
              <p className="text-muted-foreground mb-3 line-clamp-2">
                Más descripciones de artículos de noticias aparecerán aquí cuando realices una búsqueda.
                Cada artículo tendrá una imagen, título, descripción y enlace.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                Leer artículo completo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>

        <div className="text-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/10">
          <p className="text-muted-foreground">
            Más artículos aparecerán aquí después de la búsqueda
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NewsApiSection;
