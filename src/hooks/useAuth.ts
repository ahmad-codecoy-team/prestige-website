import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/api';
import type { LoginRequest } from '@/types';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('prestige-token');
    if (token) {
      // TODO: Fetch user data from token or API
      // For now, just mark as loaded
    }
    setLoading(false);
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      const response = await authService.login(credentials);
      localStorage.setItem('prestige-token', response.accessToken);
      setUser(response.user);
      navigate('/home');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    navigate('/login');
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
};
