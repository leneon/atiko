export const login = (email, password) => {
  const user = {
    id: Date.now(),
    email,
    name: email.split('@')[0],
    token: 'mock-jwt-token-' + Date.now()
  };
  localStorage.setItem('atikoUser', JSON.stringify(user));
  return user;
};

export const loginWithGoogle = () => {
  const user = {
    id: Date.now(),
    email: 'user@gmail.com',
    name: 'Utilisateur Google',
    token: 'mock-google-token-' + Date.now()
  };
  localStorage.setItem('atikoUser', JSON.stringify(user));
  return user;
};

export const register = (name, email, password) => {
  const user = {
    id: Date.now(),
    email,
    name,
    token: 'mock-jwt-token-' + Date.now()
  };
  localStorage.setItem('atikoUser', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('atikoUser');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('atikoUser');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!getCurrentUser();
};