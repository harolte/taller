import React from "react";
import Footer from "./Footer"; 

const Taller = () => {
  const handleGoHome = () => {
    // Redirige a una URL externa
    window.location.href = 'https://main.d279we5xa4psmh.amplifyapp.com/';
  };

  return (
    <div className="text-center">
      <img
        src="https://i.ibb.co/BGs3hHY/metaverso.jpg"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Taller"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Adios Mundo</h5>
      <p className="text-gray-500">Harolt Kruchinsky</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGoHome}
      >
        Regresar a Home
      </button>
      <Footer />
    </div>
  );
};

export default Taller;
