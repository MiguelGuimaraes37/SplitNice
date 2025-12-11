export default {
  async login(context, payload) {
    console.log('Login Action');
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },

  async auth(_, payload) {
    const mode = payload.mode;
    console.log('test');
    if (mode === 'login') {
      if (payload.username === 'Maria37' && payload.password === '1234')
        console.log('I logged in');
    }
  },
};
