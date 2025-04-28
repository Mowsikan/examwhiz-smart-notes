
import { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface QuestionSearchProps {
  onSearch: (question: string, markType: string) => void;
}

const QuestionSearch = ({ onSearch }: QuestionSearchProps) => {
  const [question, setQuestion] = useState("");
  const [markType, setMarkType] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSearch(question, markType);
    }
  };

  return (
    <div className="w-full px-4 md:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your exam question here..."
            className="pl-10 py-6 text-lg shadow-sm border border-gray-200 focus:border-examwhiz-blue transition-all"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="w-full sm:w-1/3 relative">
            <Select value={markType} onValueChange={setMarkType}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select marks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 Marks</SelectItem>
                <SelectItem value="5">5 Marks</SelectItem>
                <SelectItem value="16">16 Marks</SelectItem>
              </SelectContent>
            </Select>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-12 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    <strong>2 Marks</strong>: Brief definition/explanation<br />
                    <strong>5 Marks</strong>: Detailed explanation<br />
                    <strong>16 Marks</strong>: Comprehensive answer with examples
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-2/3 bg-examwhiz-blue hover:bg-examwhiz-brightblue text-white py-6 h-12 text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Generate Answer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionSearch;
