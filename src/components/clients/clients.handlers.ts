import { pb } from '@/lib/pocketbase';
import type { Client } from './clients.model';

export async function getClients(): Promise<Client[]> {
  try {
    const materials = await pb.collection('clients').getFullList<Client>();
    return materials;
  } catch (error) {
    console.error(error);
    return [];
  }
}
