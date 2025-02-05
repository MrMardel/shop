import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ExternalLink, Zap, Star, AlertTriangle } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button 
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
          aria-label="Favorito"
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount && (
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
              <Zap className="h-4 w-4" />
              {product.discount}% OFF
            </span>
          )}
          {product.isNew && (
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
              ¡Nuevo!
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
              <Star className="h-4 w-4" />
              Más Vendido
            </span>
          )}
          {product.stock !== undefined && product.stock <= 5 && (
            <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              ¡Últimas {product.stock} unidades!
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-4 left-4 text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.description}</p>
        <Link 
          to={`/producto/${product.id}`}
          className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
        >
          <span>Ver detalles</span>
          <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;