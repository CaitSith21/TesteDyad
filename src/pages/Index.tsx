import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-amber-50 overflow-hidden">
      {/* Textura de papel envelhecido como fundo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+PC9zdmc+')] opacity-20" />
      
      {/* Bolhas de água no fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/50 rounded-full animate-bubble"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200/50 rounded-full animate-bubble animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-200/50 rounded-full animate-bubble animation-delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200/50 rounded-full animate-bubble animation-delay-3000"></div>
      </div>
      
      {/* Grama decorativa na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,106.7C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#22c55e" 
            opacity="0.6"
          />
          <path 
            d="M0,104L48,101.3C96,99,192,93,288,96C384,99,480,112,576,117.3C672,123,768,123,864,117.3C960,112,1056,101,1152,98.7C1248,96,1344,104,1392,108L1440,112L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#16a34a" 
            opacity="0.8"
          />
        </svg>
      </div>
      
      {/* Container principal com estilo de caderno */}
      <div className="relative w-full max-w-2xl mx-auto p-6 z-10">
        <Card className="bg-amber-50/90 border-amber-200 shadow-lg rounded-2xl overflow-hidden">
          {/* Cabeçalho com título medieval */}
          <CardHeader className="text-center py-8 border-b border-amber-200">
            <CardTitle className="text-4xl md:text-5xl font-bold text-amber-800 tracking-wider">
              Cardápio do Dia
            </CardTitle>
            <p className="text-amber-600 mt-2 text-lg">Cozinha caseira e artesanal</p>
          </CardHeader>
          
          {/* Conteúdo do cardápio */}
          <CardContent className="py-6">
            <div className="space-y-4">
              {/* Seção de pratos principais */}
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Pratos Principais</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-100/50 rounded-lg">
                    <span className="text-amber-900 font-medium">Sopa de Legumes</span>
                    <span className="text-amber-700 font-bold">R$ 25,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-100/50 rounded-lg">
                    <span className="text-amber-900 font-medium">Pizza de Queijo</span>
                    <span className="text-amber-700 font-bold">R$ 35,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-100/50 rounded-lg">
                    <span className="text-amber-900 font-medium">Strogonoff de Carne</span>
                    <span className="text-amber-700 font-bold">R$ 45,00</span>
                  </div>
                </div>
              </div>
              
              {/* Seção de sobremesas */}
              <div className="border-l-4 border-amber-600 pl-4 mt-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Sobremesas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-100/50 rounded-lg">
                    <span className="text-amber-900 font-medium">Sorvete de Morango</span>
                    <span className="text-amber-700 font-bold">R$ 15,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-100/50 rounded-lg">
                    <span className="text-amber-900 font-medium">Bolo de Chocolate</span>
                    <span className="text-amber-700 font-bold">R$ 20,00</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          {/* Rodapé com botões */}
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pb-8 pt-6 border-t border-amber-200">
            <Button
              className="w-full sm:w-auto px-8 py-3 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all shadow-md"
            >
              Enviar Pedido
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-3 border-amber-600 text-amber-700 rounded-full font-medium hover:bg-amber-100 transition-all"
            >
              Ver Cardápio Completo
            </Button>
          </CardFooter>
        </Card>
      </div>

      <MadeWithDyad className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20" />
    </div>
  );
};

export default Index;