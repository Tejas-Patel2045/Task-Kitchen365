"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/products/ProductForm";
import { createProduct } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export default function NewProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (productData: { name: string; price: number; description?: string }) => {
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);
    
    try {
      await createProduct(productData);
      setSuccessMessage("Product created successfully!");
      
      // Reset form or redirect after successful creation
      setTimeout(() => {
        router.push("/products");
      }, 2000);
    } catch (err) {
      setError("Failed to create product. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            {successMessage}
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        
        <ProductForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        
        <div className="mt-6">
          <button
            onClick={() => router.push("/products")}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            &larr; Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}