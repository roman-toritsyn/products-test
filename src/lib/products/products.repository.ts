import type { TProductsResponse } from "./products.types";

const PRODUCTS_URL = process.env.PRODUCTS_API_URL || "https://dummyjson.com";

class ProductsRepository {
  async getProducts(limit: number = 12): Promise<TProductsResponse> {
    const url = `${PRODUCTS_URL}/products?limit=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return response.json();
  }
}

export const productsRepository = new ProductsRepository();
