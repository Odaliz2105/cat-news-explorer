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
          Private API Consumption - NewsAPI
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Search for the latest news articles by keyword
      </p>

      <div className="flex gap-3 mb-8">
        <Input
          type="text"
          placeholder="Enter keyword (e.g., technology, health, sports)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-2 focus-visible:ring-secondary"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button 
          onClick={handleSearch}
          className="bg-gradient-secondary hover:opacity-90 transition-opacity"
        >
          Search News
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">News Results</h3>
        
        {/* Example news card placeholder */}
        <Card className="p-6 shadow-card border-2 bg-muted/20">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
              <Newspaper className="w-8 h-8 text-muted-foreground opacity-50" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Article Title Will Appear Here
              </h4>
              <p className="text-muted-foreground mb-3 line-clamp-2">
                Article description and preview text will be displayed in this area. 
                It will show a brief summary of the news article content.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                Read full article
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
                Another Article Title
              </h4>
              <p className="text-muted-foreground mb-3 line-clamp-2">
                More news article descriptions will appear here when you perform a search.
                Each article will have an image, title, description, and link.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                Read full article
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>

        <div className="text-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/10">
          <p className="text-muted-foreground">
            More articles will appear here after search
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NewsApiSection;
