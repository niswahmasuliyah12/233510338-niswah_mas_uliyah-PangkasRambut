<template>
  <div class="login-container">
    <h2>Login Pelanggan</h2>
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 100px auto;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}
input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  padding: 10px 25px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #16a085;
}
</style>
