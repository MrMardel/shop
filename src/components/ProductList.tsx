import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useSearch } from './Layout';
import ImageSlider from './ImageSlider';
import Sidebar from './Sidebar';
import ServiceFeatures from './ServiceFeatures';

function ProductList() {
  const { searchTerm, selectedCategory, filters } = useSearch();

  const filteredProducts = products.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower);
    
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    
    const matchesFilters = 
      (!filters.onlyDiscount || product.discount) &&
      (!filters.onlyInStock || (product.stock && product.stock > 0)) &&
      (!filters.onlyNew || product.isNew) &&
      (!filters.onlyBestSeller || product.isBestSeller);
    
    return matchesSearch && matchesCategory && matchesFilters;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h2>
        <p className="text-gray-600">Intenta buscar con otros términos o cambiar los filtros</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ImageSlider />
      <ServiceFeatures />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Sidebar />
        <div className="lg:col-span-3">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="break-inside-avoid mb-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;