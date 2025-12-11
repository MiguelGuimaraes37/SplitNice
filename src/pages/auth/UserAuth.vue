<template>
  <div
    className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
  >
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        SplitWise
      </h2>

      <form className="space-y-4" @submit.prevent="">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1"
            >Username</label
          >
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Maria37"
            v-model.trim="username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
            v-model.trim="password"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span
              className="ml-2 text-sm text-gray-600"
              @click="rememberMe = true"
              >Remember me</span
            >
          </label>
          <a
            href="#"
            className="text-sm text-indigo-600 hover:text-indigo-500"
            @click="forgotPassword = true"
            >Forgot password?</a
          >
        </div>

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          @click="login"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-500 font-medium"
          >Sign up</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const forgotPassword = ref(false);
const store = useStore();

const mode = ref('login');

async function login() {
  if (username.value === '' || password.value === '') return;

  const actionPayload = {
    username: username.value,
    password: password.value,
  };

  await store.dispatch('login', actionPayload);

  // try {
  //   if (mode.value === 'login') {
  //     console.log('Test');
  //   }
  // } catch (error) {
  //   console.log('Failed to authenticate. Check your login data');
  // }
}
</script>
