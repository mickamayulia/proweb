import React from 'react';
import TambahProduk from './components/TambahProduk';
import ProdukList from './components/ProdukList';

function App() {
  return (
    <div id="root" className="min-h-screen flex flex-col items-center bg-blue-800 p-5">
    <div className="w-full max-w-[1000px] mx-auto bg-blue-100 p-6 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-6">
        Aplikasi E-Commerce Sederhana
      </h1>
      <div className="w-full max-w-4xl">
        <TambahProduk />
        <ProdukList />
        </div>
      </div>
    </div>
  );
}

export default App;