
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
            alt="Beautiful lake surrounded by mountains and trees"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-green-600/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Camp <span className="text-yellow-300">Renewal</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Where faith meets adventure. Join us for an unforgettable summer experience 
            filled with worship, friendship, and life-changing moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => navigate('/register')}
            >
              Register Now - $299
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full transition-all duration-300"
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
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            What Makes Camp Renewal Special?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                alt="Nature adventure"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Epic Adventures</h3>
              <p className="text-gray-600 leading-relaxed">
                From hiking mountain trails to lake activities, experience God's creation through thrilling outdoor adventures that build courage and confidence.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Group gathering"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Deep Connections</h3>
              <p className="text-gray-600 leading-relaxed">
                Build lifelong friendships and strengthen your relationship with God through small groups, worship sessions, and meaningful conversations.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80" 
                alt="Pine forest"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Spiritual Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover your purpose through daily devotions, inspiring messages, and personal reflection time in nature's peaceful setting.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready for the Adventure?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join 200+ teens this summer for a week that will change your life forever.
            </p>
            <p className="text-lg mb-8 opacity-80">
              📅 July 15-22, 2024 • 🏕️ Pine Ridge Mountain Camp • 💰 $299 (scholarships available)
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => navigate('/register')}
            >
              Secure Your Spot Today!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Grace Community Church</h4>
          <p className="text-gray-300 mb-4">
            Questions? Contact our youth pastor at pastor@gracechurch.org or call (555) 123-4567
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Grace Community Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
