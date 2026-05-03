import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-600 text-center">
          Olá IA
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Bem‑vindo à sua aplicação! Esta é uma mensagem de boas vindas.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
            Começar
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            Saiba Mais          </button>
        </div>
      </div>
      <MadeWithDyad className="mt-6" />
    </div>
  );
};

export default Index;