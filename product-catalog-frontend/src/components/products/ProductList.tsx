import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onDeleteRequest: (productId: string) => void;
}

export default function ProductList({ products, onDeleteRequest }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id} 
          product={product} 
          onDeleteRequest={onDeleteRequest} 
        />
      ))}
    </div>
  );
}