# 🃈 Aplikasi Booking Pangkas Rambut - Vue 3 + Pinia

Aplikasi ini adalah sistem **booking layanan barbershop online** berbasis **Vue 3**, dengan menggunakan **Vue Router** untuk navigasi halaman dan **Pinia** sebagai state management. Aplikasi ini memungkinkan pengguna untuk melakukan booking layanan pangkas rambut, mengecek status, dan mengedit pesanan dengan antarmuka yang modern dan responsif.

---

## 🚀 Fitur Utama

* ✅ Login pelanggan sederhana
* ✅ Booking layanan (Cukur, Styling, Coloring)
* ✅ Cek status booking berdasarkan nama
* ✅ Edit data booking
* ✅ Daftar layanan dan harga
* ✅ Navigasi menggunakan Vue Router
* ✅ State global dengan Pinia (untuk menyimpan nama pengguna)
* ✅ Tampilan responsive dengan background bergambar

---

## 🧱 Struktur Folder

```bash
src/
├── assets/               # Gambar dan aset statis
├── components/           # Komponen halaman utama (Dashboard, Booking, dsb)
│   ├── Dashboard.vue
│   ├── Booking.vue
│   ├── EditBooking.vue
│   ├── CheckStatus.vue
│   ├── Login.vue
│   ├── Services.vue
│   ├── About.vue
├── router/
│   └── index.js          # Konfigurasi Vue Router
├── stores/
│   └── user.js           # Pinia store untuk menyimpan nama user
├── App.vue               # Root komponen aplikasi
├── main.js               # Entry point aplikasi
```

---

## 🧾 Penjelasan Tiap Komponen

### 🔐 `Login.vue`

* Form login sederhana tanpa autentikasi backend.
* Menyimpan `username` ke Pinia Store dan redirect ke `/dashboard`.

### 🏠 `Dashboard.vue`

* Tampilan selamat datang dengan animasi fade-in dan ikon barbershop.
* Menyediakan pesan singkat dan instruksi.

### 💇 `Booking.vue`

* Form untuk melakukan booking dengan input nama, tanggal, jam, dan jenis layanan.
* Data booking dikirim menggunakan `fetch()` ke `localhost:3000/bookings` (JSON Server).

### ✏️ `EditBooking.vue`

* Mengambil data booking berdasarkan `:id` dari URL.
* Menyediakan form untuk mengedit data booking.
* Menggunakan metode `PUT` untuk memperbarui booking.

### 🔎 `CheckStatus.vue`

* Menampilkan daftar booking yang sesuai dengan nama pengguna.
* Menggunakan query parameter (`?nama=...`) untuk filtering.

### 💰 `Services.vue`

* Menampilkan daftar layanan dan harga.
* Desain bersih dengan tampilan list tanpa bullet.

### 📟 `About.vue`

* Komponen statis untuk informasi tambahan tentang barbershop.

---

## 🌐 Routing (`router/index.js`)

Dikelola menggunakan Vue Router:

```js
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/dashboard', component: Dashboard },
  { path: '/services', component: Services },
  { path: '/booking', component: Booking },
  { path: '/status', component: CheckStatus },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/edit/:id', component: EditBooking }
];
```

---

## 🧠 Pinia Store (`stores/user.js`)

Menyimpan `username` pengguna untuk dipakai antar komponen.

```js
export const useUserStore = defineStore('user', {
  state: () => ({
    username: ''
  }),
  actions: {
    setUsername(name) {
      this.username = name;
    },
    logout() {
      this.username = '';
    }
  }
});
```

---

## 🧰 Testing (`Booking.spec.js`)

Unit test untuk `Booking.vue` menggunakan **Vitest** dan **Vue Test Utils**.

* ✅ Cek input form muncul
* ✅ Cek submit memanggil `fetch` dan redirect

---

## 🎨 Tampilan (`App.vue`)

* Navbar tampil di semua halaman kecuali `/login`
* Background gambar penuh
* Navbar responsif dan modern
* Menggunakan `router-link` untuk navigasi antar halaman

---

## ▶️ Menjalankan Proyek

1. **Install dependency:**

   ```bash
   npm install
   ```

2. **Jalankan JSON Server (jika menggunakan dummy backend):**

   ```bash
   npx json-server --watch db.json --port 3000
   ```

3. **Jalankan Vue app:**

   ```bash
   npm run dev
   ```

---

## 📦 Teknologi yang Digunakan

* [Vue 3](https://vuejs.org/)
* [Pinia](https://pinia.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vitest](https://vitest.dev/)
* [JSON Server (Mock API)](https://github.com/typicode/json-server)

---

## 📌 Catatan

* Login belum menggunakan sistem autentikasi backend.
* JSON Server digunakan sebagai mock backend lokal.
* Data hanya disimpan sementara (tidak ada database permanen).
