# E-Commerce CRUD App

## Deskripsi
E-Commerce CRUD App adalah aplikasi berbasis web yang memungkinkan pengguna untuk menambahkan, mengedit, melihat, dan menghapus produk. Dibangun dengan:
- **Backend:** Node.js, Express, PostgreSQL
- **Frontend:** React + Vite
- **Database:** PostgreSQL


## Cara Install Dependensi
Pastikan kamu sudah menginstal **Node.js** di komputer.  
Lalu, jalankan perintah berikut di terminal:

1. **Cara install dependensi:**
```bash
   npm install
```

2. **Cara menjalankan backend:**
```bash
   cd backend
   npm install
```

3. **Cara menjalankan frontend:**
```bash
   cd frontend
   npm run dev
```
4. **Cara menginstall Bootstrap:**
```bash
   npm install bootstrap
```

## Daftar Endpoint API
Berikut adalah daftar endpoint yang digunakan dalam aplikasi ini:

### **Mendapatkan Semua Produk**
| Method | Endpoint  | Deskripsi |
|--------|----------|-----------|
| GET    | `/produk` | Mengambil daftar semua produk dalam database |

**Cara Menggunakan:**  
- Kirim request `GET` ke `http://localhost:3001/produk`.  
- Tidak memerlukan **body request**.  
- Contoh respons dari server:  
```json
[
  {
    "id": 1,
    "nama": "Laptop Gaming",
    "harga": 15000000
  },
  {
    "id": 2,
    "nama": "Mouse Wireless",
    "harga": 300000
  }
]
```
### **Menambahkan Produk**
| Method | Endpoint  | Deskripsi |
|--------|----------|-----------|
| POST   | `/produk` | Menambahkan produk baru ke dalam database |

**Cara Menggunakan:**  
- Kirim request `POST` ke `http://localhost:3001/produk`.  
- Gunakan **body request** dalam format JSON seperti berikut:  
  ```json
  {
    "nama": "Smartphone Android",
    "harga": 5000000
  }

### **Mengupdate Produk**
| Method | Endpoint  | Deskripsi |
|--------|----------|-----------|
| PUT    | `/produk/:id` | Memperbarui data produk berdasarkan ID |

#### **Cara Menggunakan:**  
1. Kirim request `PUT` ke `http://localhost:3001/produk/{id}` *(gantilah `{id}` dengan ID produk yang ingin diperbarui, misalnya `http://localhost:3001/produk/1`)*.  
2. Gunakan **body request** dalam format JSON seperti berikut:  
   ```json
   {
     "nama": "Smartphone 5G",
     "harga": 6000000
   }

### **Menghapus Produk**
| Method | Endpoint  | Deskripsi |
|--------|----------|-----------|
| DELETE | `/produk/:id` | Menghapus produk berdasarkan ID |

#### **Cara Menggunakan:**  
1. Kirim request `DELETE` ke `http://localhost:3001/produk/{id}` *(gantilah `{id}` dengan ID produk yang ingin dihapus, misalnya `http://localhost:3001/produk/1`)*.  
2. Jika berhasil, server akan merespons dengan pesan:  
   ```json
   {
     "message": "Produk dihapus"
   }

