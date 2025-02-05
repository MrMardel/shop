import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
        <Link 
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Link 
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-8 group"
      >
        <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
        Volver al catálogo
      </Link>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110">
                <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
              <button className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110">
                <Share2 className="h-6 w-6 text-gray-600 hover:text-indigo-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              {product.category}
            </span>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Características destacadas</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Calidad premium garantizada</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Envío gratuito a todo el país</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Garantía de 12 meses</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg">
                Contactar para más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;