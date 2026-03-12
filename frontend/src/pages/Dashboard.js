import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ users: 0, messages: 0, services: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const [userRes, statsRes] = await Promise.all([
          api.get('/users/me'),
          api.get('/stats')
        ]);
        setUser(userRes.data);
        setStats(statsRes.data);
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Bem-vindo, {user?.name}!</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Total de Usuários</p>
                <p className="text-3xl font-bold text-primary">{stats.users}</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Mensagens</p>
                <p className="text-3xl font-bold text-primary">{stats.messages}</p>
              </div>
              <div className="text-4xl">📧</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Serviços Ativos</p>
                <p className="text-3xl font-bold text-primary">{stats.services}</p>
              </div>
              <div className="text-4xl">⚙️</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Atividades Recentes</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Novo usuário registrado</p>
              <p className="text-sm text-gray-600">Há 2 horas</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Mensagem de contato recebida</p>
              <p className="text-sm text-gray-600">Há 5 horas</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Sistema atualizado</p>
              <p className="text-sm text-gray-600">Há 1 dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
