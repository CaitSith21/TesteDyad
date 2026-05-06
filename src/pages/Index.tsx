import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-10 space-y-6 border border-white/20">
        <h1 className="text-4xl md:text-5xl font-light text-blue-600 text-center tracking-tight">
          Olá IA
        </h1>
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          Bem‑vindo à sua aplicação! Esta é uma mensagem de boas vindas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
            Começar
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-200">
            Saiba Mais
          </button>
        </div>
      </div>
      <MadeWithDyad className="mt-8" />
      <div className="w-full h-32 bg-[url('/grass.svg')] bg-cover bg-bottom"></div>
    </div>
  );
};

export default Index;