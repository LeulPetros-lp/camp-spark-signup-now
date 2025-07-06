
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/ea8841d8-0fa9-4d23-b4ff-c7efe9a30e9d.png" 
            alt="Halwot Questers youth group"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Halwot <span className="text-orange-400">Questers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Where faith meets adventure. Join us for an unforgettable summer experience 
            filled with worship, friendship, and life-changing moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => navigate('/register')}
            >
              Register Now - $299
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/70 mx-auto cursor-pointer" onClick={scrollToFeatures} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            What Makes Halwot Questers Special?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="/lovable-uploads/ea70388c-efc7-46a4-8a60-c01608015f98.png" 
                alt="Halwot Questers community outreach"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-black mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Make a real difference in your community through service projects, outreach programs, and meaningful connections that transform lives.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="/lovable-uploads/f3b99c08-a0e3-4cdb-bf5d-68bfe3ea92e2.png" 
                alt="Halwot Questers youth fellowship"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-black mb-4">Deep Connections</h3>
              <p className="text-gray-600 leading-relaxed">
                Build lifelong friendships and strengthen your relationship with God through small groups, worship sessions, and meaningful conversations.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="/lovable-uploads/ea8841d8-0fa9-4d23-b4ff-c7efe9a30e9d.png" 
                alt="Halwot Questers team building"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-black mb-4">Spiritual Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover your purpose through daily devotions, inspiring messages, and personal reflection time in a supportive community setting.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready for the Quest?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join 200+ teens this summer for a week that will change your life forever.
            </p>
            <p className="text-lg mb-8 opacity-80">
              📅 July 15-22, 2024 • 🏕️ Halwot Questers Camp • 💰 $299 (scholarships available)
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => navigate('/register')}
            >
              Secure Your Spot Today!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Halwot Questers Foundation</h4>
          <p className="text-gray-300 mb-4">
            Questions? Contact our youth pastor at pastor@halwotquesters.org or call (555) 123-4567
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Halwot Questers Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
