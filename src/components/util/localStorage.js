// auth.js
const isAuthenticated = localStorage.getItem('Login') === 'true';
export default isAuthenticated;
