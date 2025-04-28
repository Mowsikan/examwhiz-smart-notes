
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuestionSearchProps {
  onSearch: (question: string, markType: string) => void;
  isLoading: boolean;
}

const QuestionSearch = ({ onSearch, isLoading }: QuestionSearchProps) => {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your exam question here..."
            className="pl-10 py-6 text-lg shadow-sm"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isLoading}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="w-full sm:w-1/3">
            <Select value={markType} onValueChange={setMarkType} disabled={isLoading}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select marks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 Marks</SelectItem>
                <SelectItem value="5">5 Marks</SelectItem>
                <SelectItem value="16">16 Marks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-2/3 bg-examwhiz-blue hover:bg-examwhiz-brightblue text-white py-6"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Answer"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionSearch;
