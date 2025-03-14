import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center text-red-500 mt-10">Məhsul tapılmadı!</h2>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-96  object-cover rounded-lg"
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h1>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-semibold text-green-600 mt-4">Qiymət: ${product.price}</p>

                <Link 
                    to="/" 
                    className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Geri Qayıt
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;
