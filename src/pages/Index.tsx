import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background image with subtle tint */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/reference.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-indigo-300" />

      {/* Central card with Frutiger Aero styling */}
      <Card className="relative w-full max-w-lg bg-white/90 rounded-[3rem] border border-white/30 shadow-2xl backdrop-blur-2xl p-10 space-y-6">
        <CardHeader className="text-center pt-8">
          <CardTitle className="text-4xl md:text-5xl font-light text-indigo-600 tracking-tight">
            Olá IA
          </CardTitle>
        </CardHeader>

        <CardContent className="px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Bem‑vindo à sua aplicação! Esta página foi inspirada na imagem de referência, combinando o estilo Frutiger Aero com cores suaves e elementos modernos.
          </p>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
          <Button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md">
            Começar
          </Button>
          <Button variant="outline" className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-200">
            Saiba Mais
          </Button>
        </CardFooter>
      </Card>

      {/* Footer credit */}
      <MadeWithDyad className="absolute bottom-4 left-1/2 -translate-x-1/2 mt-8" />
    </div>
  );
};

export default Index;