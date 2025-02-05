import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Cámara Digital Profesional",
    description: "Cámara digital de alta resolución perfecta para fotografía profesional y aficionada. Incluye múltiples modos de disparo y configuraciones avanzadas.",
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800&h=600",
    discount: 15,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Reloj Elegante",
    description: "Reloj de diseño elegante con correa de cuero genuino y mecanismo de precisión suizo. Perfecto para ocasiones formales.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800&h=600",
    isNew: true
  },
  {
    id: 3,
    name: "Mochila Aventurera",
    description: "Mochila resistente al agua con múltiples compartimentos y sistema de ventilación. Ideal para excursiones y viajes.",
    category: "Aire Libre",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800&h=600",
    discount: 20
  },
  {
    id: 4,
    name: "Auriculares Inalámbricos",
    description: "Auriculares con cancelación de ruido y calidad de sonido premium. Batería de larga duración y diseño ergonómico.",
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=600",
    isBestSeller: true,
    stock: 5
  },
  {
    id: 5,
    name: "Zapatillas Deportivas",
    description: "Zapatillas ligeras y transpirables con tecnología de amortiguación avanzada. Perfectas para running y entrenamiento.",
    category: "Deportes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800&h=600",
    isNew: true
  },
  {
    id: 6,
    name: "Laptop Ultradelgada",
    description: "Laptop potente y ligera con pantalla de alta resolución. Perfecta para trabajo y entretenimiento.",
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800&h=600",
    discount: 10
  },
  {
    id: 7,
    name: "Gafas de Sol",
    description: "Gafas de sol con protección UV y diseño moderno. Marco resistente y lentes polarizadas.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600",
    stock: 3
  },
  {
    id: 8,
    name: "Botella Térmica",
    description: "Botella térmica de acero inoxidable que mantiene las bebidas frías por 24 horas o calientes por 12 horas.",
    category: "Aire Libre",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800&h=600",
    isBestSeller: true
  }
];

export const categoryInfo = {
  "Electrónica": {
    name: "Electrónica",
    icon: "Smartphone",
    description: "Descubre lo último en tecnología y gadgets",
    featured: products.find(p => p.id === 1)
  },
  "Accesorios": {
    name: "Accesorios",
    icon: "Watch",
    description: "Complementa tu estilo con nuestros accesorios",
    featured: products.find(p => p.id === 2)
  },
  "Aire Libre": {
    name: "Aire Libre",
    icon: "Mountain",
    description: "Equípate para tus aventuras al aire libre",
    featured: products.find(p => p.id === 3)
  },
  "Deportes": {
    name: "Deportes",
    icon: "Dumbbell",
    description: "Todo para tu entrenamiento y actividad física",
    featured: products.find(p => p.id === 5)
  }
};