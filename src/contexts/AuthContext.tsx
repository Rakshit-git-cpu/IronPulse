import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  membershipPlan?: string;
  membershipExpiry?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, isAdmin?: boolean) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, isAdmin = false): Promise<boolean> => {
    // Demo credentials
    const ADMIN_EMAIL = 'admin@ironpulse.com';
    const ADMIN_PASSWORD = 'ironpulse2025';
    
    // Demo user accounts
    const demoUsers = [
      { id: '2', name: 'John Doe', email: 'john@example.com', password: 'password123', membershipPlan: 'Premium', membershipExpiry: '2025-12-31' },
      { id: '3', name: 'Jane Smith', email: 'jane@example.com', password: 'password123', membershipPlan: 'Basic', membershipExpiry: '2025-06-30' }
    ];

    if (isAdmin && email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const userData: User = {
        id: '1',
        username: 'admin',
        email: ADMIN_EMAIL,
        name: 'Admin User',
        role: 'admin'
      };
      
      const token = 'demo_token_' + Date.now();
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(userData));
      setUser(userData);
      
      return true;
    } else if (!isAdmin) {
      // Check demo users
      const foundUser = demoUsers.find(u => u.email === email && u.password === password);
      if (foundUser) {
        const userData: User = {
          id: foundUser.id,
          username: foundUser.name.toLowerCase().replace(' ', ''),
          email: foundUser.email,
          name: foundUser.name,
          role: 'user',
          membershipPlan: foundUser.membershipPlan,
          membershipExpiry: foundUser.membershipExpiry
        };
        
        const token = 'demo_token_' + Date.now();
        
        localStorage.setItem('auth_token', token);
        localStorage.setItem('user_data', JSON.stringify(userData));
        setUser(userData);
        
        return true;
      }
    }
    
    return false;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // In a real app, this would make an API call
    // For demo, we'll just create a user
    const newUser: User = {
      id: Date.now().toString(),
      username: userData.name.toLowerCase().replace(' ', ''),
      email: userData.email,
      name: userData.name,
      role: 'user'
    };
    
    const token = 'demo_token_' + Date.now();
    
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(newUser));
    setUser(newUser);
    
    return true;
  };
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isLoading,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};