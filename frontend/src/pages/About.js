import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 animate-slide-up">Sobre Nós</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-4">
              Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras e de alta qualidade.
              Com anos de experiência no mercado, nos especializamos em criar produtos que transformam negócios.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa equipe é composta por profissionais altamente qualificados e apaixonados por tecnologia,
              sempre buscando as melhores práticas e as tecnologias mais modernas do mercado.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Inovação constante
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Qualidade em primeiro lugar
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Compromisso com o cliente
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Transparência e ética
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Projetos Concluídos</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Profissionais</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
