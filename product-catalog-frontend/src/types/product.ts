export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateProductDto {
    name: string;
    price: number;
    description?: string;
}

export interface UpdateProductDto {
    name?: string;
    price?: number;
    description?: string;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
}
