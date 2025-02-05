import React from 'react';
import { useSearch } from './Layout';
import { Filter } from 'lucide-react';

function Sidebar() {
  const { filters, setFilters, isSidebarOpen } = useSearch();

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <div className={`
      fixed inset-y-0 left-0 lg:relative w-80 lg:w-auto
      transform lg:transform-none transition-transform duration-300
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      bg-white lg:bg-transparent z-50 lg:z-0
      p-6 overflow-y-auto
      lg:rounded-2xl lg:shadow-sm
    `}>
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
      </div>

      <div className="space-y-6">
        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyDiscount}
              onChange={() => handleFilterChange('onlyDiscount')}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">En oferta</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyInStock}
              onChange={() => handleFilterChange('onlyInStock')}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">En stock</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyNew}
              onChange={() => handleFilterChange('onlyNew')}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Productos nuevos</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyBestSeller}
              onChange={() => handleFilterChange('onlyBestSeller')}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Más vendidos</span>
          </label>
        </div>

        <hr className="border-gray-200" />

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-900">Enlaces rápidos</h3>
          <div className="space-y-1">
            <button className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 py-1">
              Ofertas del día
            </button>
            <button className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 py-1">
              Últimas unidades
            </button>
            <button className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 py-1">
              Recién llegados
            </button>
            <button className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 py-1">
              Más populares
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;