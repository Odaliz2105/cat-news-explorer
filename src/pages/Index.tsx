import HttpCatSection from "@/components/HttpCatSection";
import NewsApiSection from "@/components/NewsApiSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Demostración de Consumo de API
          </h1>
          <p className="text-xl text-muted-foreground">
            Explora integraciones de API públicas y privadas
          </p>
        </header>

        <div className="space-y-8">
          <HttpCatSection />
          <NewsApiSection />
        </div>

        <footer className="text-center mt-12 text-muted-foreground text-sm">
          <p>Construido con React, TypeScript y Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
