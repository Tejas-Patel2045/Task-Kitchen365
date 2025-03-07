"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import ProductSearch from "@/components/products/ProductSearch";
import { getProducts, deleteProduct } from "@/lib/api";
import { Product } from "@/types/product";
import { useAuth } from "@/hooks/useAuth";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    productId: string | null;
  }>({ isOpen: false, productId: null });
  
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    fetchProducts();
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDeleteRequest = (productId: string) => {
    setDeleteConfirmation({ isOpen: true, productId });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteConfirmation.productId) return;
    
    try {
      await deleteProduct(deleteConfirmation.productId);
      setProducts(products.filter(p => p.id !== deleteConfirmation.productId));
      setDeleteConfirmation({ isOpen: false, productId: null });
    } catch (err) {
      setError("Failed to delete product. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation({ isOpen: false, productId: null });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Product Catalog</h1>
        <button
          onClick={() => router.push("/products/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Add New Product
        </button>
      </div>
      
      <ProductSearch onSearch={handleSearch} />
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          {error}
        </div>
      ) : (
        <ProductList 
          products={filteredProducts} 
          onDeleteRequest={handleDeleteRequest} 
        />
      )}
      
      {/* Delete Confirmation Dialog */}
      {deleteConfirmation.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={handleDeleteCancel}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}