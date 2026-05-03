import { MadeWithDyad } from "@/components/made-with-dyad";
import { Flower } from "lucide-react";

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Background mountain silhouette */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-300/40 to-transparent"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 30%, 80% 50%, 60% 20%, 40% 40%, 20% 10%, 0 30%)' }}
      />

      {/* Floating cloud shapes */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white/30 backdrop-blur-md rounded-full animate-drift" />
      <div className="absolute top-40 right-16 w-40 h-20 bg-white/20 backdrop-blur-md rounded-full animate-drift delay-1000" />

      {/* Floating flower decorations */}
      <div className="absolute top-1/4 left-8 animate-float">
        <Flower className="w-8 h-8 text-pink-400/70" />
      </div>
      <div className="absolute top-1/3 right-12 animate-float delay-500">
        <Flower className="w-6 h-6 text-purple-400/70" />
      </div>
      <div className="absolute bottom-1/4 left-16 animate-float delay-1000">
        <Flower className="w-10 h-10 text-blue-400/70" />
      </div>
      <div className="absolute bottom-1/3 right-8 animate-float delay-1500">
        <Flower className="w-7 h-7 text-pink-300/70" />
      </div>

      {/* Main glassmorphism card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-10 space-y-6 border border-white/30">
        <h1 className="text-4xl md:text-5xl font-light text-blue-600 text-center tracking-tight">
          Olá IA
        </h1>
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          Bem‑vindo à sua aplicação! Esta é uma mensagem de boas vindas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Começar
          </button>
          <button className="px-6 py-3 bg-white/80 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Saiba Mais
          </button>
        </div>
      </div>

      <MadeWithDyad className="mt-8 relative z-10" />
    </div>
  );
};

export default Index;