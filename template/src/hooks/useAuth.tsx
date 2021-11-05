import React, { createContext, useCallback, useContext } from 'react';

interface AuthContextProps {
  loginOffline: () => Promise<boolean>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const loginOffline = useCallback(async () => {
    try {
      const req = true;

      return req;
    } catch (error) {
      return false;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loginOffline }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
