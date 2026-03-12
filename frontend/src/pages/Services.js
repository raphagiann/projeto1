import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e aplicações web modernas, responsivas e de alta performance.',
      icon: '💻',
      features: ['React/Vue/Angular', 'Design Responsivo', 'SEO Otimizado']
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com a melhor experiência do usuário.',
      icon: '📱',
      features: ['React Native', 'Flutter', 'PWA']
    },
    {
      title: 'Backend & APIs',
      description: 'APIs RESTful robustas e escaláveis com as melhores práticas de segurança.',
      icon: '⚙️',
      features: ['Spring Boot', 'FastAPI', 'Microserviços']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Infraestrutura em nuvem, CI/CD e automação para máxima eficiência.',
      icon: '☁️',
      features: ['AWS/Azure', 'Docker', 'Kubernetes']
    },
    {
      title: 'Consultoria',
      description: 'Orientação especializada para transformação digital e arquitetura de software.',
      icon: '🎯',
      features: ['Arquitetura', 'Boas Práticas', 'Code Review']
    },
    {
      title: 'Suporte & Manutenção',
      description: 'Suporte contínuo e manutenção para garantir o funcionamento perfeito.',
      icon: '🛠️',
      features: ['24/7 Support', 'Monitoramento', 'Updates']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-600">Soluções completas para todas as suas necessidades tecnológicas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-fade-in">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
