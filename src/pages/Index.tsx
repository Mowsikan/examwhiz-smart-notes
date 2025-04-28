
import { useState } from "react";
import Header from "@/components/Header";
import QuestionSearch from "@/components/QuestionSearch";
import AnswerDisplay from "@/components/AnswerDisplay";
import { generateAnswer } from "@/services/answerService";
import { Book, Search, Save, Brain, BookOpen, GraduationCap } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-examwhiz-offwhite to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with improved design */}
        <section className="bg-gradient-to-br from-examwhiz-blue via-examwhiz-brightblue to-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <GraduationCap className="h-16 w-16 mx-auto mb-6 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Smart Notes for Exam Success
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Get AI-powered exam answers with just a question. Perfect for last-minute studying.
              </p>
            </div>
            
            {/* Feature Icons with improved styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 mb-4">
              <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <div className="bg-white p-4 rounded-full mb-4 shadow-lg">
                  <Search className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Smart Search</h3>
                <p className="text-sm mt-2 opacity-90">Find answers from across multiple textbooks</p>
              </div>
              
              <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <div className="bg-white p-4 rounded-full mb-4 shadow-lg">
                  <Brain className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Mark-Based Answers</h3>
                <p className="text-sm mt-2 opacity-90">Get content formatted for 2, 5, or 16 mark questions</p>
              </div>
              
              <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <div className="bg-white p-4 rounded-full mb-4 shadow-lg">
                  <Save className="h-8 w-8 text-examwhiz-blue" />
                </div>
                <h3 className="text-lg font-semibold">Save & Share</h3>
                <p className="text-sm mt-2 opacity-90">Keep your notes organized or share with classmates</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search Section with improved styling */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Ask Your Question
              </h2>
              <QuestionSearch onSearch={handleSearch} />
              
              {loading && (
                <div className="flex flex-col justify-center items-center mt-10 mb-6">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-examwhiz-blue"></div>
                  <p className="mt-4 text-examwhiz-blue">Generating your answer...</p>
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
        
        {/* Example Questions with improved styling */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Try These Example Questions
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Get started quickly with these popular exam questions from different subjects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left border-l-4 border-examwhiz-blue"
                onClick={() => handleSearch("Define Newton's Laws of Motion", "2")}
              >
                <h3 className="font-semibold mb-3 text-examwhiz-blue text-lg">Define Newton's Laws of Motion</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Physics</span>
                  <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">2 Marks</span>
                </div>
              </button>
              
              <button 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left border-l-4 border-green-500"
                onClick={() => handleSearch("Explain the process of photosynthesis", "5")}
              >
                <h3 className="font-semibold mb-3 text-green-600 text-lg">Explain the process of photosynthesis</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Biology</span>
                  <span className="ml-auto px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">5 Marks</span>
                </div>
              </button>
              
              <button 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left border-l-4 border-purple-500"
                onClick={() => handleSearch("Describe Newton's Laws of Motion in detail", "16")}
              >
                <h3 className="font-semibold mb-3 text-purple-600 text-lg">Describe Newton's Laws of Motion in detail</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Physics</span>
                  <span className="ml-auto px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">16 Marks</span>
                </div>
              </button>
              
              <button 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left border-l-4 border-orange-500"
                onClick={() => handleSearch("Explain photosynthesis with diagrams and examples", "16")}
              >
                <h3 className="font-semibold mb-3 text-orange-600 text-lg">Explain photosynthesis with diagrams and examples</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Biology</span>
                  <span className="ml-auto px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">16 Marks</span>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-examwhiz-lightblue" />
                <span className="text-2xl font-bold">
                  Exam<span className="text-examwhiz-lightblue">Whiz</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Your AI study companion</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-400 mt-6 md:mt-0">
              &copy; {new Date().getFullYear()} ExamWhiz. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
