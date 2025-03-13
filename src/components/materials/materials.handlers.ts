import { pb } from "@/lib/pocketbase"
import type { Material, MaterialsCategory } from "./materials.model"

export async function getMaterials(): Promise<Material[]> {
  try {
    const materials = await pb.collection<Material>("materials").getFullList()
    return materials
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getMaterialsByCategory(category_id: string): Promise<Material[]> {
  try {
    const materials = await pb.collection<Material>("materials").getFullList({
      filter: `category_id="${category_id}"`
    })
    return materials
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getMaterialCategories(): Promise<MaterialsCategory[]> {
  try {
    const categories = await pb.collection<MaterialsCategory>("materials_category").getFullList()
    return categories
  } catch (error) {
    console.error(error)
    return []
  }
}
