import React, { createContext, useState, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Store, Search, ChevronDown, Smartphone, Watch, Mountain, Dumbbell, User, LogIn, UserPlus, Settings, Menu, X, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { products, categoryInfo } from '../data/products';
import Footer from './Footer';
import ServiceFeatures from './ServiceFeatures';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export interface Filters {
  minPrice?: number;
  maxPrice?: number;
  onlyDiscount: boolean;
  onlyInStock: boolean;
  onlyNew: boolean;
  onlyBestSeller: boolean;
}

export const SearchContext = createContext<SearchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
  selectedCategory: '',
  setSelectedCategory: () => {},
  filters: {
    onlyDiscount: false,
    onlyInStock: false,
    onlyNew: false,
    onlyBestSeller: false
  },
  setFilters: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: () => {}
});

export const useSearch = () => useContext(SearchContext);

const icons = {
  Smartphone,
  Watch,
  Mountain,
  Dumbbell
};

function Layout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    onlyDiscount: false,
    onlyInStock: false,
    onlyNew: false,
    onlyBestSeller: false
  });
  const location = useLocation();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <SearchContext.Provider value={{ 
      searchTerm, 
      setSearchTerm, 
      selectedCategory, 
      setSelectedCategory, 
      filters, 
      setFilters,
      isSidebarOpen,
      setIsSidebarOpen
    }}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center space-x-2 group">
                  <Store className="h-8 w-8 text-indigo-600 transition-transform group-hover:scale-110" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    Mi Tienda
                  </h1>
                </Link>

                {location.pathname === '/' && (
                  <div className="relative group">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 font-medium"
                    >
                      <span>Categorías</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Menu */}
                    {isMenuOpen && (
                      <div className="absolute top-full left-0 w-screen max-w-4xl bg-white rounded-lg shadow-xl border border-gray-100 mt-2 p-6 grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {Object.values(categoryInfo).map((category) => {
                            const Icon = icons[category.icon as keyof typeof icons];
                            return (
                              <button
                                key={category.name}
                                onClick={() => handleCategorySelect(category.name)}
                                className={`w-full flex items-start space-x-4 p-3 rounded-lg transition-colors hover:bg-gray-50 ${
                                  selectedCategory === category.name ? 'bg-indigo-50' : ''
                                }`}
                              >
                                <div className="flex-shrink-0">
                                  <Icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div className="flex-1 text-left">
                                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                                  <p className="text-sm text-gray-500">{category.description}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Featured Products */}
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="font-medium text-gray-900 mb-4">Productos Destacados</h3>
                          <div className="space-y-4">
                            {Object.values(categoryInfo)
                              .filter(cat => cat.featured)
                              .slice(0, 2)
                              .map(category => (
                                <Link
                                  key={category.featured?.id}
                                  to={`/producto/${category.featured?.id}`}
                                  className="flex items-center space-x-4 group"
                                >
                                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                                    <img
                                      src={category.featured?.image}
                                      alt={category.featured?.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                                      {category.featured?.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{category.name}</p>
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar productos..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64 transition-all hover:bg-white"
                  />
                </div>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <User className="h-6 w-6 text-gray-600" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <LogIn className="h-4 w-4" />
                        <span>Iniciar sesión</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        <span>Registrarse</span>
                      </button>
                      <hr className="my-1" />
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        <span>Configuración</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}

export default Layout;