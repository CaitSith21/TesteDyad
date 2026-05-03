import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button"; 
import { MadeWithDyad } from "@/components/made-with-dyad"; 
const Index = () => { 
  return ( 
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100"> 
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/reference.jpg')" }} /> 
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-blue-300/30 to-blue-400/30" /> 
      {/* Central card with Frutiger-Aero styling */}
      <Card className="relative w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/30 shadow-2xl"> 
        <CardHeader className="text-center pt-8"> 
          <CardTitle className="text-4xl md:text-5xl font-light text-blue-600 tracking-tight"> Olá IA </CardTitle> 
        </CardHeader> 
        <CardContent className="px-8 text-center"> 
          <p className="text-lg text-gray-600 leading-relaxed"> Bem‑vindo à sua aplicação! Esta página foi inspirada na imagem de referência, combinando o estilo Frutiger Aero com cores suaves e elementos modernos. </p> 
        </CardContent> 
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pb-8"> 
          <Button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all" > Começar </Button> 
          <Button variant="outline" className="w-full sm:w-auto px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all" > Saiba Mais </Button> 
        </CardFooter> 
      </Card> 
      <MadeWithDyad className="absolute bottom-4 left-1/2 -translate-x-1/2" /> 
    </div> 
  ); 
}; 
export default Index;