import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    if(products.length === 0) {
        return <h1 className="text-center text-red-500 mt-10">Məhsul yoxdur</h1>
    }
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Məhsullar</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-5 transition transform hover:-translate-y-2 hover:shadow-xl">
                        <img src={product.image} alt={product.name} className="w-full object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <p className="text-lg font-semibold text-green-600 mt-2">Qiymət: ${product.price}</p>
                        <Link 
                            to={`product/${product.id}`} 
                            className="block text-center bg-blue-500 text-white mt-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                        >
                            Ətraflı Bax
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
