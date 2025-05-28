<template>
  <div id="app">
    <h1 class="title">Booking Pangkas Rambut</h1>

    <!-- Navbar Tampil Kecuali di /login -->
    <nav class="navbar" v-if="$route.path !== '/login'">
      <router-link to="/dashboard">Beranda</router-link>
      <router-link to="/services">Layanan</router-link>
      <router-link to="/booking">Booking</router-link>
      <router-link to="/status">Cek Status</router-link>
      <router-link to="/about">Tentang</router-link>
      <router-link to="/login">Logout</router-link>
    </nav>

    <!-- Router Outlet -->
    <router-view />
  </div>
</template>

<style scoped>
/* === TITLE UTAMA === */
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  color: #4a00e0;
  font-weight: bold;
}

/* === NAVBAR === */
.navbar {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 15px 30px;
  margin: 20px auto;
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  border-radius: 12px;
  max-width: 1000px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.navbar a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.25);
}

/* === RESPONSIVE NAVBAR === */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;
  }

  .navbar a {
    margin-bottom: 8px;
  }
}
</style>
