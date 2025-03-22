import type { ProductCategory, Product } from './';
import { pb } from '@/lib/pocketbase';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await pb.collection('products').getFullList<Product>({
      sort: 'name',
      expand: 'category_id',
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  try {
    const categories = await pb.collection('product_categories').getFullList<ProductCategory>();
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function insertProduct(product: Product) {
  try {
    await pb.collection('products').create(product);
  } catch (error) {
    console.error(error);
  }
}

// Query options
export const productsQueryOptions = queryOptions({
  queryKey: ['products'],
  queryFn: getProducts,
  placeholderData: keepPreviousData,
});

export const categoriesQueryOptions = queryOptions({
  queryKey: ['products_category'],
  queryFn: getProductCategories,
});
