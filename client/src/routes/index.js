// Definiujemy tutaj wszystkie ścieżki URL jakie chcemy użyć w naszej aplikacji
export const routes = {
  home: '/',
  contact: '/contact-us',
  register: '/register',
  login: '/login',
  products: '/products',
  product: '/products/:id',
  // Routy CRUD admina
  clients: '/admin/clients',
  client: '/admin/clients/:id',
  newClient: '/admin/clients/new',
  updateClient: '/admin/clients/:id/edit',
};
