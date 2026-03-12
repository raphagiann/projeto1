import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bem-vindo ao Futuro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Soluções modernas e profissionais para o seu negócio
            </p>
            <div className="space-x-4">
              <Link to="/services" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
                Nossos Serviços
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition inline-block">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Por que nos escolher?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition animate-fade-in">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Rápido</h3>
              <p className="text-gray-600">Performance otimizada para a melhor experiência do usuário</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition animate-fade-in">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Seguro</h3>
              <p className="text-gray-600">Proteção avançada contra ameaças e vulnerabilidades</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition animate-fade-in">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Responsivo</h3>
              <p className="text-gray-600">Funciona perfeitamente em todos os dispositivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8">Junte-se a milhares de clientes satisfeitos</p>
          <Link to="/register" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Criar Conta Grátis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
