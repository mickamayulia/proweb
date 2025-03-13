// src/App.jsx
import React from 'react';
import ProdukList from './components/ProdukList';
import TambahProduk from './components/TambahProduk';

function App() {
  return (
    <div>
      <h1>Selamat Datang di Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk/>
      <ProdukList />
    </div>
  );
}

export default App;