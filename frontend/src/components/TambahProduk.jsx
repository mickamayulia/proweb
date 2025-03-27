// src/components/TambahProduk.jsx
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function TambahProduk() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi
    if (!nama || !harga) {
      setError('Nama dan Harga wajib diisi');
      setSuccessMessage('');
      return;
    }
    setError('');

    axios.post('http://localhost:3001/produk', { nama, harga })
      .then((res) => {
        setSuccessMessage('Produk berhasil ditambah:');
        setNama('');
        setHarga('');
      })
      .catch((err) => {
        setError('Terjadi kesalahan saat menambahkan produk.');
        console.error('Error menambah produk:', err);
      });
  };

  return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow-lg p-4 rounded w-100" style={{ maxWidth: '800px' }}>
          <h2 className="text-center text-primary fw-bold">Tambah Produk</h2>
          {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}

            <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-white">
              <div className="mb-3">
                <label className="form-label text-primary">Nama Produk:</label>
                <input
                  type="text"
                  className="form-control"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>

        <div className="mb-3">
          <label className="form-label text-primary">Harga:</label>
          <input
            type="number"
            className="form-control"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">Simpan</button>
      </form>
    </div>
    </div>
  );
}

export default TambahProduk;