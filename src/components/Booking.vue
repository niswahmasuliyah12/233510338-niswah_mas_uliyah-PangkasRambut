<template>
  <div class="form-container">
    <h2 class="form-title">Form Booking Pangkas Rambut</h2>
    <form @submit.prevent="handleBooking">
      <label>Nama:</label>
      <input v-model="nama" type="text" required />

      <label>Tanggal:</label>
      <input v-model="tanggal" type="date" required />

      <label>Jam:</label>
      <input v-model="jam" type="time" required />

      <label>Layanan:</label>
      <select v-model="layanan" required>
        <option value="">Pilih Layanan</option>
        <option>Cukur</option>
        <option>Styling</option>
        <option>Coloring</option>
      </select>

      <button type="submit">Booking Sekarang</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      nama: '',
      tanggal: '',
      jam: '',
      layanan: ''
    };
  },
  methods: {
    handleBooking() {
      this.$router.push({
        path: '/status',
        query: {
          nama: this.nama,
          tanggal: this.tanggal,
          jam: this.jam,
          layanan: this.layanan
        }
      });
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 450px;
  margin: 60px auto;
  background: #fff;
  padding: 35px 40px;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease;
}
.form-title {
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
  font-size: 24px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 16px;
  font-weight: bold;
  color: #34495e;
}
input,
select {
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.3s ease;
}
input:focus,
select:focus {
  border-color: #1abc9c;
  outline: none;
}
button {
  margin-top: 30px;
  padding: 12px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}
button:hover {
  background-color: #16a085;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
