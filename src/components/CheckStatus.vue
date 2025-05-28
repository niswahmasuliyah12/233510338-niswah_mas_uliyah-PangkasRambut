<template>
  <div class="status-wrapper">
    <div class="status-card" v-if="nama">
      <h2>Status Booking Berhasil 🎉</h2>
      <div class="booking-info">
        <p><strong>👤 Nama:</strong> {{ nama }}</p>
        <p><strong>📅 Tanggal:</strong> {{ tanggal }}</p>
        <p><strong>⏰ Jam:</strong> {{ jam }}</p>
        <p><strong>💇‍♂️ Layanan:</strong> {{ layanan }}</p>
      </div>
      <div class="success-message">✅ Booking Anda telah dikonfirmasi!</div>
    </div>

    <div v-else class="manual-check">
      <h2>Cek Status Booking</h2>
      <input type="text" placeholder="Masukkan Kode Booking" />
      <button>Cek</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckStatus',
  computed: {
    nama() {
      return this.$route.query.nama;
    },
    tanggal() {
      return this.$route.query.tanggal;
    },
    jam() {
      return this.$route.query.jam;
    },
    layanan() {
      return this.$route.query.layanan;
    }
  }
}
</script>

<style scoped>
.status-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(135deg, #e0f7fa, #f9fbe7);
}

.status-card {
  background: #ffffff;
  padding: 40px 50px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: fadeSlideIn 0.8s ease;
  max-width: 500px;
  width: 100%;
}

.status-card h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 25px;
}

.booking-info p {
  font-size: 18px;
  margin: 10px 0;
  color: #34495e;
  text-align: left;
}

.success-message {
  margin-top: 25px;
  padding: 12px;
  background-color: #d4edda;
  border-left: 6px solid #28a745;
  color: #155724;
  font-weight: bold;
  border-radius: 6px;
}

.manual-check {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.manual-check input {
  padding: 10px;
  width: 70%;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.manual-check button {
  padding: 10px 25px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.manual-check button:hover {
  background-color: #2980b9;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
