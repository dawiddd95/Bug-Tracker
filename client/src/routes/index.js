// Now only basics
// after maybe like this: /projects/:id/tickets/:id/comments
export const routes = {
	home: '/',
	dashboard: '/user/dashboard',
	forgotPassword: '/auth/forgot-password',
	signIn: '/auth/sign-in',
	signUp: '/auth/sign-up',
	projects: '/user/projects',
	project: '/user/projects/:id',
	newProject: '/user/projects/new',
	editProject: '/user/projects/:id/edit',
	ticket: '/user/projects/:id/tickets/:id',
	newTicket: '/user/projects/:id/tickets/new',
	profile: '/user/:id/profile',
	users: '/user/admin/users',
	user : '/user/admin/users/:id',
	settings: '/user/settings',
};
