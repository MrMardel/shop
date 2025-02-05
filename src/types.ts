export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  discount?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  stock?: number;
}

export interface CategoryInfo {
  name: string;
  icon: string;
  description: string;
  featured?: Product;
}