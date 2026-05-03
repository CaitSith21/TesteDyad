import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Olá IA</h1>
        <p className="text-xl text-gray-600">
          Bem-vindo à sua aplicação! Esta é uma mensagem de boas vindas.
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;