import { pb } from '@/lib/pocketbase';
import type { Material, MaterialCategories } from './materials.model';

export async function getMaterials(): Promise<Material[]> {
  try {
    const materials = await pb.collection('materials').getFullList<Material>({
      expand: 'category_id',
    });
    return materials;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMaterialsByCategory(category_id: string): Promise<Material[]> {
  try {
    const materials = await pb.collection<Material>('materials').getFullList({
      filter: `category_id="${category_id}"`,
    });
    return materials;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMaterialCategories(): Promise<MaterialCategories[]> {
  try {
    const categories = await pb.collection<MaterialCategories>('material_categories').getFullList();
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}
