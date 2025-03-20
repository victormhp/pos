import { pb } from '@/lib/pocketbase';
import type { Product, ProductCategory } from './products.model';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';

export async function getMaterials(): Promise<Product[]> {
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

export async function getMaterialsByCategory(category_id?: string): Promise<Product[]> {
  try {
    const products = await pb.collection('products').getFullList<Product>({
      filter: category_id ? `category_id="${category_id}"` : undefined,
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMaterialCategories(): Promise<ProductCategory[]> {
  try {
    const categories = await pb.collection('product_categories').getFullList<ProductCategory>();
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const productsQueryOptions = (category_id: string | null) =>
  queryOptions({
    queryKey: ['products', category_id],
    queryFn: () => {
      if (category_id) {
        return getMaterialsByCategory(category_id);
      }
      return getMaterials();
    },
    placeholderData: keepPreviousData,
  });

export const categoriesQueryOptions = queryOptions({
  queryKey: ['products_category'],
  queryFn: getMaterialCategories,
});
