<template>
  <div class="form-container" v-if="booking">
    <h2>Edit Booking</h2>
    <form @submit.prevent="updateBooking">
      <label>Nama:</label>
      <input v-model="booking.nama" type="text" required />

      <label>Tanggal:</label>
      <input v-model="booking.tanggal" type="date" required />

      <label>Jam:</label>
      <input v-model="booking.jam" type="time" required />

      <label>Layanan:</label>
      <select v-model="booking.layanan" required>
        <option>Cukur</option>
        <option>Styling</option>
        <option>Coloring</option>
      </select>

      <button type="submit">Simpan Perubahan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditBooking',
  data() {
    return {
      booking: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    fetch(`http://localhost:3000/bookings/${id}`)
      .then(res => res.json())
      .then(data => {
        this.booking = data;
      });
  },
  methods: {
    updateBooking() {
      fetch(`http://localhost:3000/bookings/${this.booking.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.booking)
      })
        .then(() => {
          alert('Booking berhasil diperbarui!');
          this.$router.push('/status?nama=' + this.booking.nama);
        })
        .catch(err => {
          console.error('Update error:', err);
          alert('Gagal memperbarui booking.');
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
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 16px;
  font-weight: bold;
}
input,
select {
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
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
}
button:hover {
  background-color: #16a085;
}
</style>
