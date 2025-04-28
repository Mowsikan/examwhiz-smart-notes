
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Share, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AnswerDisplayProps {
  question: string;
  markType: string;
  answer: string | null;
}

const AnswerDisplay = ({ question, markType, answer }: AnswerDisplayProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

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
    navigator.clipboard.writeText(question + "\n\n" + answer?.replace(/<[^>]*>/g, ''));
    toast({
      title: "Content copied!",
      description: "The answer has been copied to your clipboard.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answer?.replace(/<[^>]*>/g, '') || '');
    toast({
      title: "Content copied!",
      description: "The answer has been copied to your clipboard.",
    });
  };

  const handleFeedback = (isPositive: boolean) => {
    setFeedbackGiven(true);
    toast({
      title: isPositive ? "Thanks for your feedback!" : "We'll improve this answer",
      description: isPositive 
        ? "We're glad this answer was helpful." 
        : "Thank you for helping us improve our answers.",
    });
  };

  if (!answer) {
    return null;
  }

  return (
    <Card className="w-full mt-8 border-t-4 border-examwhiz-blue shadow-lg animate-fade-in overflow-hidden">
      <CardHeader className="bg-gray-50 border-b border-gray-100 pb-4">
        <CardTitle className="text-xl font-medium text-gray-800 flex items-center justify-between">
          <div>{question}</div>
          <span className="bg-examwhiz-blue text-white text-xs px-2 py-1 rounded-full ml-2">
            {markType} Mark{parseInt(markType) > 1 ? "s" : ""}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div 
          className="answer-content prose max-w-none"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 justify-between border-t pt-4 bg-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-2">Was this helpful?</span>
          <Button
            variant="outline"
            size="sm"
            className={`${feedbackGiven ? 'bg-green-50 text-green-600' : ''}`}
            onClick={() => handleFeedback(true)}
            disabled={feedbackGiven}
          >
            <ThumbsUp size={16} className="mr-1" />
            <span>Yes</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`${feedbackGiven ? 'bg-red-50 text-red-600' : ''}`}
            onClick={() => handleFeedback(false)}
            disabled={feedbackGiven}
          >
            <ThumbsDown size={16} className="mr-1" />
            <span>No</span>
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={handleCopy}
          >
            <Copy size={16} />
            <span>Copy</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={handleShare}
          >
            <Share size={16} />
            <span>Share</span>
          </Button>
          <Button
            onClick={handleSave}
            disabled={loading}
            size="sm"
            className="bg-examwhiz-blue hover:bg-examwhiz-brightblue text-white flex items-center gap-1"
          >
            <Save size={16} />
            <span>{loading ? "Saving..." : "Save to Notes"}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AnswerDisplay;
