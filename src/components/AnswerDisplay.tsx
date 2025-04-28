
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Share } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AnswerDisplayProps {
  question: string;
  markType: string;
  answer: string | null;
}

const AnswerDisplay = ({ question, markType, answer }: AnswerDisplayProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Answer saved!",
        description: "Your notes have been saved to your account.",
      });
    }, 1000);
  };

  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "Link has been copied to your clipboard.",
    });
  };

  if (!answer) {
    return null;
  }

  return (
    <Card className="w-full mt-8 border-t-4 border-examwhiz-blue shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-gray-800">
          {question}
        </CardTitle>
        <div className="flex items-center mt-1">
          <span className="bg-examwhiz-blue text-white text-xs px-2 py-1 rounded">
            {markType} Mark{parseInt(markType) > 1 ? "s" : ""} Answer
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="answer-content prose max-w-none"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 justify-end border-t pt-4">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleShare}
        >
          <Share size={18} />
          <span>Share</span>
        </Button>
        <Button
          onClick={handleSave}
          disabled={loading}
          className="bg-examwhiz-blue hover:bg-examwhiz-brightblue text-white flex items-center gap-2"
        >
          <Save size={18} />
          <span>{loading ? "Saving..." : "Save to Notes"}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnswerDisplay;
