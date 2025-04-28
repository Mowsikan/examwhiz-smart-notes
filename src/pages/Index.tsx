
import { useState } from "react";
import Header from "@/components/Header";
import QuestionSearch from "@/components/QuestionSearch";
import AnswerDisplay from "@/components/AnswerDisplay";
import { generateAnswer } from "@/services/answerService";
import { Book, Search, Save } from "lucide-react";

const Index = () => {
  const [question, setQuestion] = useState("");
  const [markType, setMarkType] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchQuery: string, marks: string) => {
    setQuestion(searchQuery);
    setMarkType(marks);
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const generatedAnswer = generateAnswer(searchQuery, marks as "2" | "5" | "16");
      setAnswer(generatedAnswer);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-examwhiz-offwhite">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-examwhiz-blue to-examwhiz-brightblue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Smart Notes for Exam Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get AI-powered exam answers with just a question. Perfect for last-minute studying.
            </p>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 mb-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Search className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Smart Search</h3>
                <p className="text-sm mt-2">Find answers from across multiple textbooks</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Book className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Mark-Based Answers</h3>
                <p className="text-sm mt-2">Get content formatted for 2, 5, or 16 mark questions</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Save className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Save & Share</h3>
                <p className="text-sm mt-2">Keep your notes organized or share with classmates</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Ask Your Question
              </h2>
              <QuestionSearch onSearch={handleSearch} />
              
              {loading && (
                <div className="flex justify-center items-center mt-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-examwhiz-blue"></div>
                </div>
              )}
              
              {answer && !loading && (
                <AnswerDisplay 
                  question={question} 
                  markType={markType} 
                  answer={answer} 
                />
              )}
            </div>
          </div>
        </section>
        
        {/* Example Questions */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Try These Example Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => handleSearch("Define Newton's Laws of Motion", "2")}
              >
                <h3 className="font-semibold mb-2 text-examwhiz-blue">Define Newton's Laws of Motion</h3>
                <p className="text-sm text-gray-600">2 Mark Question</p>
              </button>
              
              <button 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => handleSearch("Explain the process of photosynthesis", "5")}
              >
                <h3 className="font-semibold mb-2 text-examwhiz-blue">Explain the process of photosynthesis</h3>
                <p className="text-sm text-gray-600">5 Mark Question</p>
              </button>
              
              <button 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => handleSearch("Describe Newton's Laws of Motion in detail", "16")}
              >
                <h3 className="font-semibold mb-2 text-examwhiz-blue">Describe Newton's Laws of Motion in detail</h3>
                <p className="text-sm text-gray-600">16 Mark Question</p>
              </button>
              
              <button 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => handleSearch("Explain photosynthesis with diagrams and examples", "16")}
              >
                <h3 className="font-semibold mb-2 text-examwhiz-blue">Explain photosynthesis with diagrams and examples</h3>
                <p className="text-sm text-gray-600">16 Mark Question</p>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Book className="h-6 w-6 mr-2 text-examwhiz-lightblue" />
                <span className="text-xl font-bold">
                  Exam<span className="text-examwhiz-lightblue">Whiz</span>
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ExamWhiz. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
