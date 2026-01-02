# Backend Database

Ini adalah repositori backend berbasis Express.js yang menyediakan API untuk sistem manajemen database produk dan user.

## Struktur Project

Berikut adalah penjelasan mengenai struktur folder yang ada di dalam direktori `./src`:

- **`src/Assets`**: Menyimpan file statis seperti gambar atau file publik lainnya yang dapat diakses secara langsung.
- **`src/Config`**: Berisi konfigurasi aplikasi, khususnya koneksi ke database (misalnya menggunakan Sequelize).
- **`src/Controllers`**: Berisi logika bisnis (business logic) aplikasi. Setiap fungsi di sini menangani request dari route dan mengembalikan response yang sesuai.
- **`src/Libs`**: Direktori untuk fungsi bantuan (helper functions) dan library tambahan, seperti manajemen autentikasi, fungsi utilitas umum, dan lain-lain.
- **`src/Middlewares`**: Berisi fungsi middleware Express yang dijalankan sebelum request mencapai controller. Contohnya: validasi autentikasi (`authenticated`), otorisasi role (`authorizeRole`), logging, dan penanganan error.
- **`src/Models`**: Mendefinisikan struktur data atau skema database (menggunakan Sequelize Model). File-file di sini merepresentasikan tabel-tabel di database.
- **`src/Routes`**: Menentukan endpoint API dan menghubungkannya dengan controller yang sesuai. Ini adalah pintu masuk untuk setiap request yang datang ke server.
- **`src/Seeders`**: Berisi skrip untuk mengisi database dengan data awal (dummy data) untuk keperluan development atau testing.

## Cara Menjalankan

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Jalankan server (Development):**

    ```bash
    npm run dev
    ```

3.  **Jalankan server (Production):**
    ```bash
    npm start
    ```

## Lisensi

[ISC](LICENSE)
