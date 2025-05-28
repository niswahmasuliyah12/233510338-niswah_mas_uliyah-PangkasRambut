<template>
  <div class="dashboard">
    <div class="welcome-box">
      <!-- Gambar dari URL eksternal -->
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/05/49/82/1000_F_205498258_AfQmtyR5kO5llwKd6fWRRxcc4xRUbQcb.jpg"
        alt="Barber Shop Illustration"
        class="dashboard-image"
      />
      <h2 class="fade-in">Selamat Datang di Dashboard</h2>
      <p class="fade-in-delay">
        Silakan pilih menu di navigasi untuk melakukan booking atau cek status.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background: linear-gradient(to right, #f0f4f8, #ffffff);
  animation: fadeBg 2s ease-in-out;
}

.welcome-box {
  background: #fff;
  padding: 40px 60px;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  text-align: center;
  animation: popIn 0.6s ease-out;
  max-width: 600px;
}

.dashboard-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 30px;
  animation: fadeInImage 1s ease-out forwards;
  opacity: 0;
  border-radius: 12px;
}

/* Teks */
h2 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 18px;
}

p {
  font-size: 18px;
  color: #555;
}

/* Animasi */
@keyframes fadeBg {
  from {
    background-color: #f7f9fa;
  }
  to {
    background: linear-gradient(to right, #f0f4f8, #ffffff);
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeInText 1s ease forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeInText 1.5s ease forwards;
}

@keyframes fadeInText {
  to {
    opacity: 1;
  }
}

@keyframes fadeInImage {
  to {
    opacity: 1;
  }
}
</style>
