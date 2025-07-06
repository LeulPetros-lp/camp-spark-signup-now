
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/ea8841d8-0fa9-4d23-b4ff-c7efe9a30e9d.png" 
            alt="Halwot Questers youth group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Halwot <span className="text-orange-400">Questers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Where faith meets adventure. Join us for an unforgettable summer experience 
            filled with worship, friendship, and life-changing moments.
          </p>
          
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
            onClick={() => navigate('/register')}
          >
            Register Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
