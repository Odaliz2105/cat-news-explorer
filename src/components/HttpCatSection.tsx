import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const HttpCatSection = () => {
  const [httpCode, setHttpCode] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleShowCat = () => {
    if (httpCode) {
      setImageUrl(`https://http.cat/${httpCode}`);
    }
  };

  return (
    <Card className="p-8 shadow-card-lg bg-card backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-gradient-primary">
          <Cat className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Consumo de API Pública - HTTP Cat
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Ingresa un código de estado HTTP para ver la imagen de gato correspondiente
      </p>

      <div className="flex gap-3 mb-6">
        <Input
          type="text"
          placeholder="Ingresa código HTTP (ej., 200, 404, 500)"
          value={httpCode}
          onChange={(e) => setHttpCode(e.target.value)}
          className="flex-1 border-2 focus-visible:ring-primary"
          onKeyPress={(e) => e.key === 'Enter' && handleShowCat()}
        />
        <Button 
          onClick={handleShowCat}
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          Mostrar Gato
        </Button>
      </div>

      <div className="min-h-[400px] rounded-lg border-2 border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`HTTP Cat ${httpCode}`}
            className="max-w-full max-h-[400px] object-contain rounded-lg animate-in fade-in-50 duration-500"
            onError={() => setImageUrl("")}
          />
        ) : (
          <div className="text-center p-8">
            <Cat className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">
              La imagen del gato aparecerá aquí
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default HttpCatSection;
