import type { TProductsResponse } from "./products.types";

const PRODUCTS_URL = process.env.PRODUCTS_API_URL || "https://dummyjson.com";

class ProductsRepository {
  async getProducts(limit: number = 12): Promise<TProductsResponse> {
    const url = `${PRODUCTS_URL}/products?limit=${limit}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`Failed: ${response.status}`);
      }

      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }
}

export const productsRepository = new ProductsRepository();
