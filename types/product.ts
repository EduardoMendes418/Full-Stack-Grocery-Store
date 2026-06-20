export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  unit: string;
  image: string;
  tag?: string;
  description?: string;
  gallery?: string[];
  category?: string;
  sku?: string;
  tags?: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
