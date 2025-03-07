import { useState } from "react";
import { Product, CreateProductDto, UpdateProductDto } from "@/types/product";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "@/lib/api";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getProducts();
      setProducts(data);
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch products";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductById = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const product = await getProduct(id);
      return product;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch product";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addProduct = async (productData: CreateProductDto) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newProduct = await createProduct(productData);
      setProducts([...products, newProduct]);
      return newProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create product";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const editProduct = async (id: string, productData: UpdateProductDto) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedProduct = await updateProduct(id, productData);
      setProducts(products.map(p => p.id === id ? updatedProduct : p));
      return updatedProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update product";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const removeProduct = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete product";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    isLoading,
    error,
    fetchProducts,
    fetchProductById,
    addProduct,
    editProduct,
    removeProduct,
  };
}
