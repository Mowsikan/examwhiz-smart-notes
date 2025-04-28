
import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getApiKey, setApiKey } from "@/utils/apiKeys";
import { useToast } from "@/components/ui/use-toast";

const ConfigPanel = () => {
  const { toast } = useToast();
  const [huggingFace, setHuggingFace] = useState(getApiKey("HUGGING_FACE"));
  const [gemini, setGemini] = useState(getApiKey("GEMINI"));
  const [googleBooks, setGoogleBooks] = useState(getApiKey("GOOGLE_BOOKS"));

  const handleSave = () => {
    setApiKey("HUGGING_FACE", huggingFace);
    setApiKey("GEMINI", gemini);
    setApiKey("GOOGLE_BOOKS", googleBooks);
    
    toast({
      title: "Settings saved",
      description: "Your API keys have been updated successfully.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-20 right-4">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>API Configuration</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="huggingface">HuggingFace API Key</Label>
            <Input
              id="huggingface"
              value={huggingFace}
              onChange={(e) => setHuggingFace(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gemini">Gemini API Key</Label>
            <Input
              id="gemini"
              value={gemini}
              onChange={(e) => setGemini(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="googlebooks">Google Books API Key</Label>
            <Input
              id="googlebooks"
              value={googleBooks}
              onChange={(e) => setGoogleBooks(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConfigPanel;
