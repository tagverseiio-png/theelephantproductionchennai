'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '@/lib/api';

interface AdminContextType {
  isAdmin: boolean;
  loading: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  content: any;
  updateContent: (newContent: any) => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    // Check if admin is logged in and verify token
    const initAuth = async () => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        try {
          await api.verifyToken();
          setIsAdmin(true);
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('adminToken');
          setIsAdmin(false);
        }
      }
      setLoading(false);
    };

    // Load content from backend
    const loadContent = async () => {
      try {
        const response = await api.getContent();
        setContent(response.data);
      } catch (error) {
        console.error('Failed to load content:', error);
        // Set content to null if failed to load
        setContent(null);
      }
    };

    initAuth();
    loadContent();
  }, []);

  const login = async (password: string) => {
    try {
      const response = await api.login(password);
      localStorage.setItem('adminToken', response.token);
      setIsAdmin(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminToken');
    api.logout().catch(console.error);
  };

  const updateContent = async (newContent: any) => {
    try {
      await api.updateContent(newContent);
      setContent(newContent);
    } catch (error) {
      console.error('Failed to update content:', error);
      throw error;
    }
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loading, login, logout, content, updateContent }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
