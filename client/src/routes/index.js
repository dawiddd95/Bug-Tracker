// Now only basics
// after maybe like this: /projects/:id/tickets/:id/comments
export const routes = {
  home: '/',
  forgotPassword: '/auth/forgot-password',
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  projects: '/projects',
  project: '/projects/:id',
  tickets: '/tickets',
  ticket: '/tickets/:id',
  profile: '/user/:id/profile',
  users: '/admin/users',
  user : '/admin/users/:id',
};
