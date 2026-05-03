import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen water-gradient relative overflow-hidden">
      {/* Wave decoration */}
      <div className="wave-decoration opacity-50" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-blue-100 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-blue-200 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero section */}
          <div className="water-card rounded-3xl p-8 md:p-12 lg:p-16 mx-4 backdrop-blur-sm">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full water-gradient flex items-center justify-center shadow-lg">
                <Droplets className="w-12 h-12 md:w-14 md:h-14 text-blue-500" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Olá IA
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bem-vindo à sua aplicação! Esta é uma mensagem de boas vindas 
              especialmente criada para você explorar as possibilidades.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Inteligência</h3>
                <p className="text-sm text-gray-600">Potência e inovação em cada detalhe</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 mx-auto">
                  <Droplets className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fluidez</h3>
                <p className="text-sm text-gray-600">Experiência suave e natural</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Inovação</h3>
                <p className="text-sm text-gray-600">Sempre um passo à frente</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="water-button text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg"
                onClick={() => navigate('/')}
              >
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg font-semibold"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-gray-500 text-sm">
            <MadeWithDyad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;