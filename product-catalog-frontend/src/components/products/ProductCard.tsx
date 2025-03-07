import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onDeleteRequest: (productId: string) => void;
}

export default function ProductCard({ product, onDeleteRequest }: ProductCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 truncate">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description || "No description available."}</p>
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">{formatPrice(product.price)}</span>
                    <button
                        onClick={() => onDeleteRequest(product.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                        aria-label="Delete product"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}