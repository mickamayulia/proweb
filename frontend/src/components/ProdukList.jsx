import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [editProduk, setEditProduk] = useState(null);
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => {
        setProduk(response.data);
      })
      .catch((error) => {
        console.error('Terjadi error:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch(err => console.error(err));
  };

  const handleEdit = (item) => {
    setEditProduk(item.id);
    setNama(item.nama);
    setHarga(item.harga);
  };

  const handleSave = () => {
    axios.put(`http://localhost:3001/produk/${editProduk}`, { nama, harga })
      .then(() => {
        setProduk(produk.map((p) => (p.id === editProduk ? { ...p, nama, harga } : p)));
        setEditProduk(null);
        setNama('');
        setHarga('');
      })
      .catch(err => console.error(err));
  };

  const handleCancel = () => {
    setEditProduk(null);
    setNama('');
    setHarga('');
  };

  return (
    <div className="d-flex flex-column align-items-center">
  {/* Daftar Produk */}
  <div className="card shadow-lg p-5 rounded w-100 mb-4" style={{ maxWidth: '800px' }}>
    <h2 className="text-center text-primary fw-bold">Daftar Produk</h2>
    <div className="row justify-content-center">
      <div className="w-100">
        <ul className="list-group">
          {produk.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.nama} - Rp{item.harga}</span>
              <div>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Form Edit Produk - Hanya muncul jika editProduk ada */}
  {editProduk && (
    <div className="card shadow-lg p-5 rounded w-100" style={{ maxWidth: '800px' }}>
      <h3 className="text-center text-primary fw-bold">Edit Produk</h3>
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
      <div className="d-flex justify-content-between">
        <button className="btn btn-success" onClick={handleSave}>Simpan</button>
        <button className="btn btn-secondary" onClick={handleCancel}>Batal</button>
      </div>
    </div>
  )}
</div>

  );
}

export default ProdukList;
